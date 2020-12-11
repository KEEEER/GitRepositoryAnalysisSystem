package usecase.gitrepository;

import domain.GitRepository;

public interface CreateGitRepositoryOutput {
    GitRepository getResult();
    void  setResult(GitRepository gitRepository);

}
