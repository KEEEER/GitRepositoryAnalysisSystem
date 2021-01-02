package adapter.servlet;

import adapter.account.AccountRepositoryImpl;
import adapter.gitrepository.GitRepositoryRepositoryImpl;
import adapter.project.ProjectRepositoryImpl;
import domain.Account;
import domain.Project;
import org.json.JSONArray;
import org.json.JSONObject;
import usecase.account.AccountRepository;
import usecase.gitrepository.GitRepositoryRepository;
import usecase.project.ProjectRepository;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/getUserProject", name = "GetUserProjectServlet")
public class GetUserProjectServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        JSONObject returnJson = new JSONObject();
        AccountRepository accountRepository = new AccountRepositoryImpl();
        ProjectRepository projectRepository = new ProjectRepositoryImpl();
        GitRepositoryRepository gitRepositoryRepository = new GitRepositoryRepositoryImpl();


        String userId = String.valueOf(requestBody.get("userId"));
        Account account = accountRepository.getAccountById(userId);
        JSONArray jsonArray = new JSONArray();

        for(String projectId : account.getProjects()){
            Project project = projectRepository.getProjectById(projectId);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("projectId", project.getId());
            jsonObject.put("projectName", project.getName());
            jsonObject.put("projectDescription", project.getDescription());
            jsonObject.put("projectStartTime", project.getStartTime());
            jsonObject.put("gitRepoCount", project.getGitRepositories().size());
            jsonArray.put(jsonObject);
        }
        System.out.println(jsonArray);
        PrintWriter out = response.getWriter();
        out.println(jsonArray) ;
        out.close();
    }
}