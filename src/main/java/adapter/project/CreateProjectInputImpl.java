package adapter.project;

import usecase.project.CreateProjectInput;

public class CreateProjectInputImpl implements CreateProjectInput {
    private String name;
    private String description;
    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String getDescription() {
        return this.description;
    }
}
