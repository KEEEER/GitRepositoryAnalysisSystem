package usecase.account;

import domain.Account;

import java.sql.Connection;
import java.sql.SQLException;

public interface AccountRepository {
    void createAccount(Account account);
    Account getAccountById(String id);
    boolean verifyAccount(Account account);



}
