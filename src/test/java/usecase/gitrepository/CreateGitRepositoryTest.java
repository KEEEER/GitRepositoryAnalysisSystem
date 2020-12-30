package usecase.gitrepository;

import adapter.gitrepository.CreateGitRepositoryOutputImpl;

import adapter.gitrepository.GitRepositoryRepositoryImpl;
import domain.GitRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import adapter.gitrepository.CreateGitRepositoryInputImpl;

public class CreateGitRepositoryTest {
    private GitRepositoryRepository gitRepositoryRepository;
    @Before
    public void setUp(){
        gitRepositoryRepository = new GitRepositoryRepositoryImpl();
    }


    @Test
    public void Create_Git_Repository_Should_Commit_To_Repository_Test(){
        CreateGitRepositoryInput input = new CreateGitRepositoryInputImpl();
        input.setRepoName("MakeBigMoney");
        input.setOwnerName("ku");

        CreateGitRepositoryOutput output = new CreateGitRepositoryOutputImpl();

        CreateGitRepositoryUseCase createGitRepositoryUseCase = new CreateGitRepositoryUseCase(gitRepositoryRepository);
        createGitRepositoryUseCase.execute(input, output);

        GitRepository gitRepository = gitRepositoryRepository.getGitRepositoryById(output.getResult().getId());
        Assert.assertEquals(gitRepository.getRepoName(), output.getResult().getRepoName());
        gitRepositoryRepository.deleteGitRepository(gitRepository.getId());
    }
}
