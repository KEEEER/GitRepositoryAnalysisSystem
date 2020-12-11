package usecase.gitrepository;

import domain.GitRepository;

public class CreateGitRepositoryUseCase {

    public void execute(CreateGitRepositoryInput input, CreateGitRepositoryOutput output ) {
        GitRepository newGitRepository = new GitRepository(input.getName(), input.getUrl());
        output.setResult(newGitRepository);
    }
}
