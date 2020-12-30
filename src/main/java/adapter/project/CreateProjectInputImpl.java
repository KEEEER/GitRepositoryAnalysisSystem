package adapter.project;

import usecase.project.CreateProjectInput;

public class CreateProjectInputImpl implements CreateProjectInput {
    private String name;
    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }
}
