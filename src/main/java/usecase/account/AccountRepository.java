package usecase.account;

import domain.Account;

import java.sql.Connection;
import java.sql.SQLException;

public interface AccountRepository {
    void createAccount(Account account);
    Account getAccountById(String id);
    void updateAccountOwnProject(Account account);
    boolean verifyAccount(Account account);
    void deleteAccount(String id);
    void deleteAccountRelations(String id);



}
