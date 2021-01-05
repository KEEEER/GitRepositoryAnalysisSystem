package usecase;

import adapter.gitrepository.GitRepositoryRepositoryImpl;
import com.mysql.cj.xdevapi.JsonArray;
import domain.GitRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import usecase.GithubRepositoryAccessor;
import usecase.gitrepository.GitRepositoryRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class GithubRepositoryTest {
    List<String> urls = new ArrayList<>();
    @Before
    public void setUp(){
        urls.add("https://github.com/octocat/boysenberry-repo-1");
        urls.add("https://github.com/octocat/git-consortium");
        urls.add("https://github.com/octocat/hello-worId");
        urls.add("https://github.com/octocat/Hello-World");
        urls.add("https://github.com/octocat/linguist");
        urls.add("https://github.com/octocat/octocat.github.io");
        urls.add("https://github.com/octocat/Spoon-Knife");
        urls.add("https://github.com/octocat/test-repo1");

    }

    @Test
    public void AccessPersonalPublicRepositoryTest() throws IOException {
        String apiUrl = "https://api.github.com/users/octocat/repos";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONArray jsonArray = accessor.httpsGet(apiUrl);
        List<String> personalPublicRepository = new ArrayList<>();
        for (Object object : jsonArray) {
            JSONObject jsonObject = (JSONObject) object;
            personalPublicRepository.add(jsonObject.get("html_url").toString());
        }
        Assert.assertTrue(
                urls.size() == personalPublicRepository.size() &&
                urls.containsAll(personalPublicRepository) &&
                personalPublicRepository.containsAll(urls)
        );
    }

    @Test
    public void GithubQueryIssueCountTest() throws IOException {
        String apiUrl = " https://api.github.com/search/issues?q=repo:octokit/octopoller.rb%20is:issue%20is:closed";
        String totalCount = "";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONArray jsonArray = accessor.httpsGet(apiUrl);
        for(Object object : jsonArray){
            JSONObject jsonObject = (JSONObject) object;
            totalCount = String.valueOf(jsonObject.get("total_count"));
        }
        Assert.assertEquals(3, Integer.parseInt(totalCount));
    }

    @Test
    public void GithubQueryCommitCountTest() throws IOException {
        String apiUrl = "https://api.github.com/search/commits?q=repo:KEEEER/gphotos-python-download-REST+merge:false";
        String totalCount = "";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        accessor.addHTTPSGetProperty("Accept", "application/vnd.github.cloak-preview+json");
        JSONArray jsonArray = accessor.httpsGet(apiUrl);
        for(Object object : jsonArray){
            JSONObject jsonObject = (JSONObject) object;
            totalCount = String.valueOf(jsonObject.get("total_count"));
        }
        Assert.assertEquals(6, Integer.parseInt(totalCount));
    }

    @Test
    public void GithubQueryCommitUrlTest() throws IOException {
        String apiUrl = "https://api.github.com/search/commits?q=repo:KEEEER/gphotos-python-download-REST+merge:false";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        accessor.addHTTPSGetProperty("Accept", "application/vnd.github.cloak-preview+json");
        JSONObject jsonObject = (JSONObject) accessor.httpsGet(apiUrl).get(0);
        JSONArray commitItemsJsonArray = jsonObject.getJSONArray("items");
        List<String> commitUrls = new ArrayList<>();
        for(Object commitItemObject : commitItemsJsonArray){
            JSONObject commitItemJsonObject = (JSONObject) commitItemObject;
            commitUrls.add(commitItemJsonObject.getString("url"));
        }
        Assert.assertEquals("https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/a461ce6e25c15fa9acec47e57bde87baaa0d4f6e", commitUrls.get(0));
        Assert.assertEquals("https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/772696b8a160b9fe1b9ac77ec5ed13af3454a986", commitUrls.get(1));
        Assert.assertEquals("https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/1504e029f1b7ff0d9af9e2a53530291b479dd3f3", commitUrls.get(2));
        Assert.assertEquals("https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/b91b82de92ee580c73b88ef9f0ba41519306e6ba", commitUrls.get(3));
        Assert.assertEquals("https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/a0a081a9126ea75fa9dfad2f352077c50d0b67c2", commitUrls.get(4));
        Assert.assertEquals("https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/31ac9abbf6753a0e6a23907def1c1d8fbc1248ee", commitUrls.get(5));
    }

    @Test
    public void GithubQueryCommitMessageTest() throws IOException {
        String apiUrl = "https://api.github.com/search/commits?q=repo:KEEEER/gphotos-python-download-REST+merge:false";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        accessor.addHTTPSGetProperty("Accept", "application/vnd.github.cloak-preview+json");
        JSONObject jsonObject = (JSONObject) accessor.httpsGet(apiUrl).get(0);
        JSONArray commitItemsJsonArray = jsonObject.getJSONArray("items");
        List<String> commitMessages = new ArrayList<>();
        for(Object commitItemObject : commitItemsJsonArray){
            JSONObject commitItemJsonObject = (JSONObject) commitItemObject;
            commitMessages.add(commitItemJsonObject.getJSONObject("commit").getString("message"));
        }
        Assert.assertEquals("update", commitMessages.get(0));
        Assert.assertEquals("Update README.md", commitMessages.get(1));
        Assert.assertEquals("first version", commitMessages.get(2));
        Assert.assertEquals("Update README.md", commitMessages.get(3));
        Assert.assertEquals("Create README.md", commitMessages.get(4));
        Assert.assertEquals("first version", commitMessages.get(5));
    }

    @Test
    public void GithubQueryCommitChangesCountTest() throws IOException {
        String apiUrl = "https://api.github.com/repos/KEEEER/gphotos-python-download-REST/commits/a461ce6e25c15fa9acec47e57bde87baaa0d4f6e";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONObject jsonObject = (JSONObject) accessor.httpsGet(apiUrl).get(0);
        JSONObject commitStatsJsonObject = jsonObject.getJSONObject("stats");
        int totalChanges = commitStatsJsonObject.getInt("total");
        int additions = commitStatsJsonObject.getInt("additions");
        int deletions = commitStatsJsonObject.getInt("deletions");
        Assert.assertEquals(100, totalChanges);
        Assert.assertEquals(59, additions);
        Assert.assertEquals(41, deletions);
    }

    @Test
    public void RepoInformationTest() throws IOException {
        JSONObject returnJson = new JSONObject();

        String requestRepo = "r1";
        GitRepositoryRepository gitRepositoryRepository = new GitRepositoryRepositoryImpl();
        GitRepository gitRepository = gitRepositoryRepository.getGitRepositoryById(requestRepo);
        gitRepository.getOwnerName();
        String repoInfoUrl =
                "https://api.github.com/repos/" +
                        gitRepository.getOwnerName() + "/" +
                        gitRepository.getRepoName();
        String contributorsUrl = repoInfoUrl + "/contributors";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();

        JSONObject repoJson = (JSONObject) accessor.httpsGet(repoInfoUrl).get(0);
        JSONArray contributorsJson  = accessor.httpsGet(contributorsUrl);

        returnJson.put("description", repoJson.get("description"));
        returnJson.put("contributorCount", contributorsJson.length());

        Assert.assertEquals("GRAS", repoJson.get("description"));
        Assert.assertEquals(4, contributorsJson.length());
    }
}
