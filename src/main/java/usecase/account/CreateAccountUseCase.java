package usecase.account;


import domain.Account;

public class CreateAccountUseCase {

    private AccountRepository accountRepository;
    public CreateAccountUseCase(AccountRepository accountRepository){
        this.accountRepository = accountRepository;

    }
    public void execute(CreateAccountInput input, CreateAccountOutput output) {
        String account = input.getAccount();
        String password = input.getPassword();
        Account admin = new Account(account, password);
        output.setId(admin.getId());
        output.setAccount(admin);
        accountRepository.createAccount(admin);
    }
}
