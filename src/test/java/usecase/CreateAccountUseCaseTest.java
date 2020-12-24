package usecase;

import adapter.AccountRepositoryImpl;
import adapter.CreateAccountInputImpl;
import adapter.CreateAccountOutputImpl;
import domain.Account;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import usecase.account.AccountRepository;
import usecase.account.CreateAccountInput;
import usecase.account.CreateAccountOutput;
import usecase.account.CreateAccountUseCase;

import java.util.Optional;


public class CreateAccountUseCaseTest {
    private AccountRepository accountRepository;
    @Before
    public void setUp(){
        accountRepository = new AccountRepositoryImpl();
    }
    @Test
    public void Create_Account_Shoud_Commit_To_Account_Repository_Test(){

        CreateAccountInput input = new CreateAccountInputImpl();
        input.setAccount("account");
        input.setPassword("password");

        CreateAccountOutput output = new CreateAccountOutputImpl();
        CreateAccountUseCase createAccountUseCase = new CreateAccountUseCase(accountRepository);
        createAccountUseCase.execute(input, output);
        Account account = accountRepository.getAccountById(output.getId());
        Assert.assertEquals("account", account.getAccount());

    }
}
