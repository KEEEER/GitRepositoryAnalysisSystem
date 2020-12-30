package adapter.gitrepository;

import usecase.gitrepository.CreateGitRepositoryInput;

public class CreateGitRepositoryInputImpl implements CreateGitRepositoryInput {
    private String ownerName;
    private String repoName;

    @Override
    public String getOwnerName() {
        return ownerName;
    }

    @Override
    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    @Override
    public String getRepoName() {
        return repoName;
    }

    @Override
    public void setRepoName(String repoName) {
        this.repoName = repoName;
    }
}
