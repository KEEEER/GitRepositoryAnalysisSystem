package usecase.project;

import adapter.account.AccountRepositoryImpl;
import adapter.account.CreateAccountInputImpl;
import adapter.account.CreateAccountOutputImpl;
import adapter.project.CreateProjectInputImpl;
import adapter.project.CreateProjectOutputImpl;
import adapter.project.CreateProjectUseCase;
import adapter.project.ProjectRepositoryImpl;
import domain.Account;
import domain.Project;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import usecase.account.AccountRepository;
import usecase.account.CreateAccountInput;
import usecase.account.CreateAccountOutput;
import usecase.account.CreateAccountUseCase;

public class CreateProjectTest {
    private AccountRepository accountRepository = new AccountRepositoryImpl();
    private ProjectRepository projectRepository = new ProjectRepositoryImpl();
    private Account account;
    @Before
    public void setUp(){
        CreateAccountInput input = new CreateAccountInputImpl();
        input.setName("fish han");
        input.setAccount("bigMoney");
        input.setPassword("bbb");

        CreateAccountOutput output = new CreateAccountOutputImpl();
        CreateAccountUseCase createAccountUseCase = new CreateAccountUseCase(accountRepository);
        createAccountUseCase.execute(input, output);
        account = accountRepository.getAccountById(output.getId());
        Assert.assertEquals("bigMoney", account.getAccount());
    }

    @Test
    public void Create_Project_Should_Commit_To_Its_User_Test(){

        CreateProjectInput input = new CreateProjectInputImpl();
        CreateProjectOutput output = new CreateProjectOutputImpl();

        input.setName("MakeBigMoney");
        input.setDescription("abc");

        CreateProjectUseCase createProjectUseCase = new CreateProjectUseCase(projectRepository);
        createProjectUseCase.execute(input, output);

        String id = output.getId();
        Project project = projectRepository.getProjectById(id);
        Assert.assertEquals(output.getName(), project.getName());
        Assert.assertEquals("abc", project.getDescription());
        Assert.assertNotNull(project.getStartTime());

        account.addProject(project.getId());
        accountRepository.updateAccountOwnProject(account);

        Account accountInDB = accountRepository.getAccountById(account.getId());
        Assert.assertEquals(1, accountInDB.getProjects().size());

        accountRepository.deleteAccount(accountInDB.getId());
        accountRepository.deleteAccountRelations(accountInDB.getId());
        projectRepository.deleteProject(project.getId());
    }
}
