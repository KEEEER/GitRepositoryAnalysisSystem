package adapter;

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
        jsonObject.append("repo", "123");
        jsonObject.append("owner", "cena");
        request.setAttribute("userInfo", jsonObject);
    }

    @Test
    public void CommitControllerTest(){
        commitServlet.doGet(request, response);
        JSONObject jsonObject = (JSONObject) request.getAttribute("obj");
        Assert.assertEquals("ok", jsonObject.get("return").toString());
    }
}
