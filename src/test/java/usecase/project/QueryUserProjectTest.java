package usecase.project;

import adapter.account.AccountRepositoryImpl;
import adapter.gitrepository.GitRepositoryRepositoryImpl;
import adapter.project.ProjectRepositoryImpl;
import domain.Account;
import domain.Project;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import usecase.account.AccountRepository;
import usecase.gitrepository.GitRepositoryRepository;

public class QueryUserProjectTest {
    @Before
    public void setUp(){

    }
    @Test
    public void QueryExistUserProjectTest(){
        JSONObject returnJson = new JSONObject();
        AccountRepository accountRepository = new AccountRepositoryImpl();
        ProjectRepository projectRepository = new ProjectRepositoryImpl();

        String userId = "boss";
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
        Assert.assertEquals(6, jsonArray.length());
    }
}
