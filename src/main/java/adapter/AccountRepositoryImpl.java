package adapter;

import domain.Account;
import usecase.account.AccountRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class AccountRepositoryImpl implements AccountRepository {
    private List<Account> accounts;

    public AccountRepositoryImpl(){
        accounts = new ArrayList<>();
    }

    @Override
    public void addAccount(Account account) {
        accounts.add(account);
    }

    @Override
    public Account getAccountById(String id) {
        for(Account account : accounts){
            if(account.getId().equals(id)) return account;
        }
        return null;
    }
}
