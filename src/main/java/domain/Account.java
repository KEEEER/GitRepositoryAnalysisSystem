package domain;

import java.util.UUID;

public class Account {
    private String name;
    private String id;
    private String password;
    private String account;

    public Account(String account, String password) {
        this.id = UUID.randomUUID().toString();
        this.password = password;
        this.account = account;
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
}
