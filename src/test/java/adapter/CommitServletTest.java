package adapter;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CommitServletTest {
    private HttpServletRequest request;
    private HttpServletResponse response;
    private CommitServlet commitServlet;

    @Before
    public void setUp(){
        request = new MockHttpServletRequest();
        response = new MockHttpServletResponse();
        commitServlet = new CommitServlet();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("owner", "octocat");
        jsonObject.put("repo", "hello-world");
        request.setAttribute("repoInfo", jsonObject);
    }

    @Test
    public void CommitControllerTest() throws IOException {
        commitServlet.doGet(request, response);
        JSONArray jsonArray = (JSONArray) request.getAttribute("personal_commit_stats");
        Assert.assertEquals("Spaceghost", jsonArray.getJSONObject(0).getString("user_name"));
        Assert.assertEquals(1, jsonArray.getJSONObject(0).getInt("total_deletions"));
        Assert.assertEquals(1, jsonArray.getJSONObject(0).getInt("total_additions"));
        Assert.assertEquals(1, jsonArray.getJSONObject(0).getInt("total_commits"));
    }
}
