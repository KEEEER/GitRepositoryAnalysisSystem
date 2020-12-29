package adapter.gitrepository;

import usecase.gitrepository.CreateGitRepositoryInput;

public class CreateGitRepositoryInputImpl implements CreateGitRepositoryInput {
    private String name;
    private String owner;
    private String url;

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public void setOwner(String owner) {
        this.owner = owner;
    }

    @Override
    public String getOwner() {
        return this.owner;
    }

    @Override
    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String getUrl() {
        return url;
    }

}
