package usecase.girrepository;

import adapter.gitrepository.CreateGitRepositoryOutputImpl;

import adapter.gitrepository.GitRepositoryRepositoryImpl;
import domain.GitRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import usecase.gitrepository.CreateGitRepositoryInput;
import adapter.gitrepository.CreateGitRepositoryInputImpl;
import usecase.gitrepository.CreateGitRepositoryOutput;
import usecase.gitrepository.CreateGitRepositoryUseCase;
import usecase.gitrepository.GitRepositoryRepository;

public class CreateGitRepositoryTest {
    private GitRepositoryRepository gitRepositoryRepository;
    @Before
    public void setUp(){
        gitRepositoryRepository = new GitRepositoryRepositoryImpl();
    }


    @Test
    public void Create_Git_Repository_Should_Commit_To_Repository_Test(){
        String myRepo = "https://github.com/KEEEER/gphotos-python-download-REST";
        CreateGitRepositoryInput input = new CreateGitRepositoryInputImpl();
        input.setName("MakeBigMoney");
        input.setUrl(myRepo);

        CreateGitRepositoryOutput output = new CreateGitRepositoryOutputImpl();

        CreateGitRepositoryUseCase createGitRepositoryUseCase = new CreateGitRepositoryUseCase(gitRepositoryRepository);
        createGitRepositoryUseCase.execute(input, output);

        GitRepository gitRepository = gitRepositoryRepository.getGitRepositoryById(output.getResult().getId());
        Assert.assertEquals(gitRepository.getUrl(), output.getResult().getUrl());
        gitRepositoryRepository.deleteGitRepository(gitRepository.getId());
    }
}
