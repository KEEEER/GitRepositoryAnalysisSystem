package usecase.project;

import domain.Project;

public interface ProjectRepository {
    Project getProjectById(String id);
    void createProject(Project project);
    void updateProject(Project project);
    void deleteProject(String id);
}
