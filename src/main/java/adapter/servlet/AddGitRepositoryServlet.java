package adapter.servlet;

import adapter.account.AccountRepositoryImpl;
import adapter.gitrepository.CreateGitRepositoryInputImpl;
import adapter.gitrepository.CreateGitRepositoryOutputImpl;
import adapter.gitrepository.GitRepositoryRepositoryImpl;
import adapter.project.ProjectRepositoryImpl;
import domain.GitRepository;
import domain.Project;
import org.json.JSONObject;
import usecase.account.AccountRepository;
import usecase.gitrepository.CreateGitRepositoryInput;
import usecase.gitrepository.CreateGitRepositoryOutput;
import usecase.gitrepository.CreateGitRepositoryUseCase;
import usecase.gitrepository.GitRepositoryRepository;
import usecase.project.ProjectRepository;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(urlPatterns = "/addGitRepository", name = "AddGitRepositoryServlet")
public class AddGitRepositoryServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject jsonObject = new JSONObject();

        try{
            BufferedReader requestReader = request.getReader();
            String line = requestReader.readLine();
            JSONObject requestBody = new JSONObject(line);
            String projectId = requestBody.getString("projectId");

            ProjectRepository projectRepository = new ProjectRepositoryImpl();
            Project project = projectRepository.getProjectById(projectId);

            do{
                requestBody = new JSONObject(line);
                String githubUrl = requestBody.getString("githubUrl");
                String gitRepositoryId = createGitRepositoryAndReturnId(
                        getRepoOwnerName(githubUrl, "github.com"),
                        getRepoName(githubUrl, "github.com")
                );
                project.addGitRepository(gitRepositoryId);

            }while((line = requestReader.readLine()) != null);
            projectRepository.updateProject(project);
            jsonObject.put("isSuccess", "true");

        }catch (Exception e){
            jsonObject.put("isSuccess", "false");
            e.printStackTrace();
        }

        PrintWriter out = response.getWriter();
        out.println(jsonObject) ;
        out.close();
    }

    private String createGitRepositoryAndReturnId(String repoName, String ownerName){
        GitRepositoryRepository gitRepositoryRepository = new GitRepositoryRepositoryImpl();
        CreateGitRepositoryInput input = new CreateGitRepositoryInputImpl();
        input.setRepoName(repoName);
        input.setOwnerName(ownerName);
        CreateGitRepositoryOutput output = new CreateGitRepositoryOutputImpl();
        CreateGitRepositoryUseCase createGitRepositoryUseCase = new CreateGitRepositoryUseCase(gitRepositoryRepository);
        createGitRepositoryUseCase.execute(input, output);
        return output.getResult().getId();
    }

    private String getRepoOwnerName(String validUrl, String keyWord){
        String[] metadatas = validUrl.split("/");
        for (int i = 0; i < metadatas.length; i++) {
            if (metadatas[i].equals(keyWord)) {
                return metadatas[i+2];
            }
        }
        return null;
    }

    private String getRepoName(String validUrl, String keyWord){
        String[] metadatas = validUrl.split("/");
        for (int i = 0; i < metadatas.length; i++) {
            if (metadatas[i].equals(keyWord)) {
                return metadatas[i+1];
            }
        }
        return null;
    }
}
