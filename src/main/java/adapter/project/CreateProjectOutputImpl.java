package adapter.project;

import usecase.project.CreateProjectOutput;

import java.util.List;

public class CreateProjectOutputImpl implements CreateProjectOutput {
    private String id;
    private String name;
    private List<String> gitRepositories;

    @Override
    public String getId() {
        return id;
    }

    @Override
    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public List<String> getGitRepositories() {
        return gitRepositories;
    }

    public void setGitRepositories(List<String> gitRepositories) {
        this.gitRepositories = gitRepositories;
    }
}
