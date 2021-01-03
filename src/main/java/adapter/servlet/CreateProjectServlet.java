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
        System.out.println(requestBody);
        String userId = String.valueOf(requestBody.get("userId"));
        String projectName = String.valueOf(requestBody.get("projectName"));
        String projectDescription = String.valueOf(requestBody.get("projectDescription"));
        String id = createProjectAndReturnId(userId, projectName, projectDescription);

        jsonObject.put("projectId", id);

        PrintWriter out = response.getWriter();
        out.println(jsonObject) ;
        out.close();
    }

    private String createProjectAndReturnId(String userId, String projectName, String projectDescription){
        ProjectRepository projectRepository = new ProjectRepositoryImpl();
        AccountRepository accountRepository = new AccountRepositoryImpl();
        CreateProjectInput input = new CreateProjectInputImpl();
        CreateProjectOutput output = new CreateProjectOutputImpl();
        input.setName(projectName);
        input.setDescription(projectDescription);
        CreateProjectUseCase createProjectUseCase = new CreateProjectUseCase(projectRepository);
        createProjectUseCase.execute(input, output);
        String id = output.getId();

        Account account = accountRepository.getAccountById(userId);
        account.addProject(id);

        accountRepository.updateAccountOwnProject(account);
        return output.getId();
    }

}
