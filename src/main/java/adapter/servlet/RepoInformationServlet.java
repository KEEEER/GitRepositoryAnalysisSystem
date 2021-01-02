package adapter.servlet;

import adapter.gitrepository.GitRepositoryRepositoryImpl;
import domain.GitRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import usecase.GithubRepositoryAccessor;
import usecase.gitrepository.GitRepositoryRepository;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/repoInfo", name = "RepoInformationServlet")
public class RepoInformationServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        String requestRepo = requestBody.getString("repoid");

        JSONObject returnJson = new JSONObject();

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

        response.setContentType("text/json");
        PrintWriter out = response.getWriter();
        out.println(returnJson) ;
        out.close();
    }

}
