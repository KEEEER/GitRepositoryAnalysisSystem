package adapter;

import domain.Account;
import usecase.account.CreateAccountOutput;

public class CreateAccountOutputImpl implements CreateAccountOutput {
    private String id;
    @Override
    public void setAccount(Account admin) {

    }

    @Override
    public Account getAccount() {
        return null;
    }

    @Override
    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return this.id;
    }
}
