package adapter.servlet;

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

public class issuesServletTest {
    private HttpServletRequest request;
    private HttpServletResponse response;
    private IssuesServlet issuesServlet;

    @Before
    public void setUp(){
        request = new MockHttpServletRequest();
        response = new MockHttpServletResponse();
        issuesServlet = new IssuesServlet();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("owner", "octocat");
        jsonObject.put("repo", "hello-world");
        request.setAttribute("repoInfo", jsonObject);
    }

    @Test
    public void GetPersonalCommitsStatsTest() throws IOException {
        issuesServlet.doPost(request, response);
        JSONArray jsonArray = (JSONArray) request.getAttribute("issues_info");
        Assert.assertEquals("closed", jsonArray.getJSONObject(0).get("state"));
        Assert.assertEquals("Hello-World", jsonArray.getJSONObject(0).get("title"));
        Assert.assertEquals("Allo", jsonArray.getJSONObject(0).get("body"));
        Assert.assertEquals("2020-12-26T04:39:46Z", jsonArray.getJSONObject(0).get("created_at"));
        Assert.assertEquals("2020-12-26T04:41:31Z", jsonArray.getJSONObject(0).get("closed_at"));
    }
}
