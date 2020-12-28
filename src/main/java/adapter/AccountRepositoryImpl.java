package adapter;

import database.Database;
import domain.Account;
import usecase.account.AccountRepository;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AccountRepositoryImpl implements AccountRepository {
    private List<Account> accounts;
    private Connection conn;
    public AccountRepositoryImpl(){
        accounts = new ArrayList<>();
    }

    @Override
    public void createAccount(Account account) {
        accounts.add(account);
        final String insert = " INSERT INTO user(id, account, password) VALUES(?,?,?) ";
        try {
            conn = Database.getConnection();
            assert conn != null;
            PreparedStatement preparedStatement = conn.prepareStatement(insert);
            preparedStatement.setString (1, account.getId());
            preparedStatement.setString (2, account.getAccount());
            preparedStatement.setString (3, account.getPassword());
            preparedStatement.execute();
            conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public Account getAccountById(String id) {
        for(Account account : accounts){
            if(account.getId().equals(id)) return account;
        }
        return null;
    }

    @Override
    public boolean verifyAccount(Account account) {
        final String query = " SELECT id,account, password FROM user WHERE account = ? AND password = ? ";
        Account queryAccount = null;
        try {
            PreparedStatement ps = null;
            ResultSet resultSet;
            this.conn = Database.getConnection();
            assert conn != null;
            ps = conn.prepareStatement(query);

            ps.setString(1,account.getAccount());
            ps.setString(2,account.getPassword());
            resultSet = ps.executeQuery();
            resultSet.last();
            if(resultSet.getRow() == 1) return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}
