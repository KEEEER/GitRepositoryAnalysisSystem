package usecase.account;

import domain.Account;

public interface CreateAccountOutput {

    void setAccount(Account admin);
    Account getAccount();
    void setId(String id);
    String getId();
}
