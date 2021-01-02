package adapter.project;

import domain.Project;
import usecase.project.CreateProjectInput;
import usecase.project.CreateProjectOutput;
import usecase.project.ProjectRepository;

public class CreateProjectUseCase {
    private ProjectRepository projectRepository;

    public CreateProjectUseCase(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public void execute(CreateProjectInput input, CreateProjectOutput output){
        Project project = new Project(input.getName(), input.getDescription());
        projectRepository.createProject(project);
        output.setId(project.getId());
        output.setName(project.getName());
        output.setGitRepositories(project.getGitRepositories());
    }
}
