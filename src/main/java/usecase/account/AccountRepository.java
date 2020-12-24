package usecase.account;

import domain.Account;

import java.util.Optional;

public interface AccountRepository {
    void addAccount(Account account);
    Account getAccountById(String id);


}
