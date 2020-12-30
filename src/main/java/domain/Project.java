package domain;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Project {
    private String id;
    private String name;
    private List<String> gitRepositories;


    public Project(String name) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.gitRepositories = new ArrayList<>();
    }

    public Project(String id, String name, List<String> gitRepositories) {
        this.id = id;
        this.name = name;
        this.gitRepositories = gitRepositories;
    }

    public void addGitRepository(String id){
        //可改進:use eventbus
        gitRepositories.add(id);
    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getGitRepositories() {
        return gitRepositories;
    }

    public void setGitRepositories(List<String> gitRepositories) {
        this.gitRepositories = gitRepositories;
    }

    public void removeGitRepository(String id){
        this.gitRepositories.remove(id);
    }
}
