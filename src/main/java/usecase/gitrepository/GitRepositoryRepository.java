package usecase.gitrepository;

import domain.GitRepository;

public interface GitRepositoryRepository {
    GitRepository getGitRepositoryById(String id);
    void createGitRepository(GitRepository gitRepository);
    void deleteGitRepository(String id);
}
