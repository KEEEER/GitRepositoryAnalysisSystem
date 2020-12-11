import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import service.GithubRepositoryAccessor;
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
        String apiUrl = "https://api.github.com/users/KEEEER/repos";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONArray jsonArray = accessor.httpsGet(apiUrl);
        List<String> personalPublicRepository = new ArrayList<>();
        for (Object object : jsonArray) {
            JSONObject jsonObject = (JSONObject) object;
            personalPublicRepository.add(jsonObject.get("html_url").toString());
            System.out.println(jsonObject.get("open_issues_count").toString());
        }
        Assert.assertTrue(
                urls.size() == personalPublicRepository.size() &&
                urls.containsAll(personalPublicRepository) &&
                personalPublicRepository.containsAll(urls)
        );
    }

    @Test
    public void GithubGetIssueTest() throws IOException {
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
    
}
