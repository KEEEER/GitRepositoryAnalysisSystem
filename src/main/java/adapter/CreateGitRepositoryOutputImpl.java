package adapter;

import domain.GitRepository;
import usecase.gitrepository.CreateGitRepositoryOutput;

public class CreateGitRepositoryOutputImpl implements CreateGitRepositoryOutput {
    private GitRepository gitRepository;
    @Override
    public GitRepository getResult() {
        return this.gitRepository;
    }

    @Override
    public void setResult(GitRepository gitRepository) {
        this.gitRepository = gitRepository;
    }
}
