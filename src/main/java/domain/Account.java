package domain;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Account {
    private String name;
    private String id;
    private String password;
    private String account;
    private List<String> projects;

    public Account(String account, String password) {
        this.id = UUID.randomUUID().toString();
        this.password = password;
        this.account = account;
        projects = new ArrayList<>();
    }

    public Account(String name, String account, String password) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.password = password;
        this.account = account;
        projects = new ArrayList<>();

    }

    public Account(String id, String name, String account, String password) {
        this.id =id;
        this.name = name;
        this.password = password;
        this.account = account;
        projects = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public String getAccount() {
        return account;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void addProject(String id){
        projects.add(id);
    }
    public List<String> getProjects(){
        return this.projects;
    }
}
