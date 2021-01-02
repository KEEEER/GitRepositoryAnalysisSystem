package adapter.servlet;

import org.json.JSONObject;
import usecase.GithubRepositoryAccessor;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/verifyUrl", name = "LoginServlet")
public class VerifyUrlServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        String needVerifyUrl = requestBody.getString("GithubUrl");
        JSONObject returnJson = new JSONObject();

        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        String[] metadatas = needVerifyUrl.split("/");

        response.setContentType("text/json");
        PrintWriter out = response.getWriter();

        if (!findKeyWord(metadatas, "github.com")) returnJson.put("isUrlVaild", "false");
        else returnJson.put("isUrlVaild", "true");
        out.println(returnJson);
        out.close();
    }

    private boolean findKeyWord(String[] metadatas, String keyWord){
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONObject verifyJson = null;
        try {
            for (int i = 0; i < metadatas.length; i++) {

                if (metadatas[i].equals(keyWord) && metadatas.length - i >= 2) {
                    verifyJson = (JSONObject) accessor.httpsGet(
                            "https://api.github.com/repos/" +
                                    metadatas[i + 1] + "/" +
                                    metadatas[i + 2]
                    ).get(0);
                    break;
                }
            }
        } catch (Exception ignored) {}
        // ugly logic
        if(verifyJson != null) {
            if (verifyJson.has("message")){
                if(verifyJson.get("message").equals("Not Found")){
                    return false;
                }
            }
            else {
                return true;
            }
        }
        return false;
    }
}
