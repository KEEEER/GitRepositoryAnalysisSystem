package adapter;

import usecase.account.CreateAccountInput;

public class CreateAccountInputImpl implements CreateAccountInput {
    private String account;
    private String password;

    public void setAccount(String account) {
        this.account = account;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccount() {
        return account;
    }

    public String getPassword() {
        return password;
    }
}
