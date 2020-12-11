package usecase;

import adapter.CreateGitRepositoryOutputImpl;
import org.junit.Assert;
import org.junit.Test;
import usecase.gitrepository.CreateGitRepositoryInput;
import adapter.CreateGitRepositoryInputImpl;
import usecase.gitrepository.CreateGitRepositoryOutput;
import usecase.gitrepository.CreateGitRepositoryUseCase;

public class CreateGitRepositoryTest {
    @Test
    public void createGitRepositoryTest(){
        String myRepo = "https://github.com/KEEEER/gphotos-python-download-REST";
        CreateGitRepositoryInput input = new CreateGitRepositoryInputImpl();
        input.setName("MakeBigMoney");
        input.setOwner("Korea Fish");
        input.setUrl(myRepo);
        CreateGitRepositoryOutput output = new CreateGitRepositoryOutputImpl();
        CreateGitRepositoryUseCase createGitRepositoryUseCase = new CreateGitRepositoryUseCase();
        createGitRepositoryUseCase.execute(input, output);
        Assert.assertEquals(myRepo, output.getResult().getUrl());
    }
}
