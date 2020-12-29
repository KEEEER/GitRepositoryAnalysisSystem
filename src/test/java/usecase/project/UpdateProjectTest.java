package usecase.project;

import adapter.project.CreateProjectInputImpl;
import adapter.project.CreateProjectOutputImpl;
import adapter.project.CreateProjectUseCase;
import adapter.project.ProjectRepositoryImpl;
import domain.Project;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class UpdateProjectTest {
    private ProjectRepository projectRepository;
    private Project project;
    @Before
    public void setUp(){
        projectRepository = new ProjectRepositoryImpl();
        CreateProjectInput input = new CreateProjectInputImpl();
        CreateProjectOutput output = new CreateProjectOutputImpl();
        input.setName("MakeBigMoney");
        CreateProjectUseCase createProjectUseCase = new CreateProjectUseCase(projectRepository);
        createProjectUseCase.execute(input, output);
        String id = output.getId();
        project = projectRepository.getProjectById(id);
        Assert.assertEquals(output.getName(), project.getName());
    }
    @Test
    public void Update_Project_And_Commit_To_Repository_Test(){
        project.addGitRepository("123");
        project.addGitRepository("456");
        project.addGitRepository("789");
        project.addGitRepository("741");
        project.addGitRepository("822");
        projectRepository.updateProject(project);
        Project testProject = projectRepository.getProjectById(project.getId());
        Assert.assertEquals(project.getGitRepositories().size(), testProject.getGitRepositories().size());
        projectRepository.deleteProject(testProject.getId());
    }
}
