package usecase.account;

public interface CreateAccountInput {
    void setAccount(String account);
    String getAccount();
    void setPassword(String password);
    String getPassword();
}
