package adapter.servlet;

import org.json.JSONArray;
import org.json.JSONObject;
import usecase.GithubRepositoryAccessor;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/issuesServlet", name = "issuesServlet")
public class IssuesServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        String owner = requestBody.getString("owner");
        String repo = requestBody.getString("repo");
        JSONArray issuesInfo = getIssuesInfoJsonArray(owner, repo);
        request.setAttribute("issues_info", issuesInfo);

        response.setContentType("text/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        out.println(issuesInfo);
        out.flush();
        out.close();
    }

    private JSONArray getIssuesInfoJsonArray(String owner, String repo) throws IOException {
        String apiUrl = "https://api.github.com/search/issues?q=repo:" + owner + "/" + repo + "%20is:issue&per_page=100";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONArray jsonArray = accessor.httpsGet(apiUrl);
        JSONArray itemsJsonArray = jsonArray.getJSONObject(0).getJSONArray("items");
        JSONArray issuesResult = new JSONArray();
        for(Object issuesObject : itemsJsonArray) {
            JSONObject issuesJsonObject = (JSONObject) issuesObject;

            JSONArray labels = issuesJsonObject.getJSONArray("labels");
            JSONArray labelsForResult = new JSONArray();
            for (Object labelsObject : labels){
                JSONObject labelsJsonObject = (JSONObject) labelsObject;

                JSONObject labelsForResultElem = new JSONObject();
                labelsForResultElem.put("name", labelsJsonObject.getString("name"));
                labelsForResultElem.put("description", labelsJsonObject.getString("description"));
                labelsForResult.put(labelsForResultElem);
            }

            JSONObject issuesResultElem = new JSONObject();
            issuesResultElem.put("state", issuesJsonObject.get("state"));
            issuesResultElem.put("labels", labelsForResult);
            issuesResultElem.put("title", issuesJsonObject.get("title"));
            issuesResultElem.put("body", issuesJsonObject.get("body"));
            issuesResultElem.put("created_at", issuesJsonObject.get("created_at"));
            issuesResultElem.put("closed_at", issuesJsonObject.get("closed_at"));
            issuesResult.put(issuesResultElem);
        }
        return issuesResult;
    }
}
