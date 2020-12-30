package usecase.gitrepository;

import domain.GitRepository;

public class CreateGitRepositoryUseCase {
    private GitRepositoryRepository gitRepositoryRepository;

    public CreateGitRepositoryUseCase(GitRepositoryRepository gitRepositoryRepository){
        this.gitRepositoryRepository = gitRepositoryRepository;
    }


    public void execute(CreateGitRepositoryInput input, CreateGitRepositoryOutput output) {
        GitRepository newGitRepository = new GitRepository(input.getRepoName(), input.getOwnerName());
        gitRepositoryRepository.createGitRepository(newGitRepository);
        output.setResult(newGitRepository);
    }
}
