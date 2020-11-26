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
    private List<String> urls = new ArrayList<>();
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

}
