package adapter.servlet;


import adapter.account.AccountRepositoryImpl;
import adapter.project.CreateProjectInputImpl;
import adapter.project.CreateProjectOutputImpl;
import adapter.project.CreateProjectUseCase;
import adapter.project.ProjectRepositoryImpl;
import domain.Account;
import domain.Project;
import org.json.JSONObject;
import usecase.account.AccountRepository;
import usecase.project.CreateProjectInput;
import usecase.project.CreateProjectOutput;
import usecase.project.ProjectRepository;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/createProject", name = "CreateProjectServlet")
public class CreateProjectServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject jsonObject = new JSONObject();
        JSONObject requestBody = new JSONObject(request.getReader().readLine());

        String userName = requestBody.getString("userId");
        String repoName = requestBody.getString("repoName");
        String id = createProjectAndReturnId(userName, repoName);

        jsonObject.put("projectId", id);

        PrintWriter out = response.getWriter();
        out.println(jsonObject) ;
        out.close();
    }

    private String createProjectAndReturnId(String userName, String repoName){
        ProjectRepository projectRepository = new ProjectRepositoryImpl();
        AccountRepository accountRepository = new AccountRepositoryImpl();
        CreateProjectInput input = new CreateProjectInputImpl();
        CreateProjectOutput output = new CreateProjectOutputImpl();
        input.setName(repoName);
        CreateProjectUseCase createProjectUseCase = new CreateProjectUseCase(projectRepository);
        createProjectUseCase.execute(input, output);

        String id = output.getId();
        Project project = projectRepository.getProjectById(id);

        Account account = accountRepository.getAccountById(output.getId());
        account.addProject(project.getId());

        accountRepository.updateAccountOwnProject(account);
        return output.getId();
    }

}
