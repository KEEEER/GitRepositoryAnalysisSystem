package adapter.account;

import database.Database;
import domain.Account;
import domain.GitRepository;
import domain.Project;
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
        final String insert = " INSERT INTO user(id, name, account, password) VALUES(?,?,?,?) ";
        try {
            conn = Database.getConnection();
            assert conn != null;
            PreparedStatement preparedStatement = conn.prepareStatement(insert);
            preparedStatement.setString (1, account.getId());
            preparedStatement.setString (2, account.getName());
            preparedStatement.setString (3, account.getAccount());
            preparedStatement.setString (4, account.getPassword());
            preparedStatement.execute();
            conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public Account getAccountById(String id) {
        final String query = " SELECT name, account, password FROM user WHERE id=?";
        Account account;
        try{
            conn = Database.getConnection();
            assert conn!= null;
            ResultSet resultSet;
            PreparedStatement preparedStatement = conn.prepareStatement(query);
            preparedStatement.setString(1, id);
            resultSet = preparedStatement.executeQuery();
            resultSet.next();
            account = new Account(
                    id,
                    resultSet.getString("name"),
                    resultSet.getString("account"),
                    resultSet.getString("password")
            );
            for(String projectId : getAccountProjects(id)){
                account.addProject(projectId);
            }
            return account;
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Account getAccountByAccountAndPassword(Account account) {
        final String query = " SELECT id, name, account, password FROM user WHERE account = ? AND password = ? ";
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
            if(!resultSet.first()) return null;
            queryAccount = new Account(
                    resultSet.getString("id"),
                    resultSet.getString("name"),
                    resultSet.getString("account"),
                    resultSet.getString("password")
            );

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return queryAccount;
    }

    @Override
    public void updateAccountOwnProject(Account account) {
        if(!accounts.contains(account)) accounts.add(account);
        Account accountInDB = getAccountById(account.getId());
        accountInDB = accountInDB == null ? new Account("", "") : accountInDB;

        final String insert = " INSERT INTO user_project(userid, projectid) VALUES(?,?) ";
        conn = Database.getConnection();
        for(String projectId : account.getProjects()){
            if(accountInDB.getProjects().contains(projectId)) continue;
            try{
                assert conn != null;
                PreparedStatement preparedStatement = conn.prepareStatement(insert);
                preparedStatement.setString (1, account.getId());
                preparedStatement.setString (2, projectId);
                preparedStatement.execute();
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        try{
            assert conn != null;
            conn.close();
        }catch (Exception e){e.printStackTrace();}
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

    @Override
    public void deleteAccount(String id) {
        final String delete = "DELETE FROM user WHERE id=?";
        try{
            PreparedStatement preparedStatement = conn.prepareStatement(delete);
            preparedStatement.setString(1, id);
            preparedStatement.executeUpdate();
        }catch (Exception e){e.printStackTrace();}
    }

    @Override
    public void deleteAccountRelations(String id) {
        final String delete = "DELETE FROM user_project WHERE userid=?";
        try{
            PreparedStatement preparedStatement = conn.prepareStatement(delete);
            preparedStatement.setString(1, id);
            preparedStatement.executeUpdate();
        }catch (Exception e){e.printStackTrace();}
    }
    public boolean deleteProjectRelations(String userId, String projectId) {
        final String delete = "DELETE FROM user_project WHERE userid=? AND projectId=?";
        try{
            PreparedStatement preparedStatement = conn.prepareStatement(delete);
            preparedStatement.setString(1, userId);
            preparedStatement.setString(2, projectId);
            preparedStatement.executeUpdate();
        }catch (Exception e){e.printStackTrace();}
    }

    private List<String> getAccountProjects(String id){
        final String query = " SELECT projectid FROM user_project WHERE userid=? ";
        List<String> projects = new ArrayList<>();
        Account queryAccount = null;
        try{
            ResultSet resultSet;
            PreparedStatement preparedStatement = conn.prepareStatement(query);
            preparedStatement.setString(1, id);
            resultSet = preparedStatement.executeQuery();
            if(!resultSet.first()) return projects;
            do{
                projects.add(resultSet.getString("projectid"));
            }
            while(resultSet.next());
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return projects;

    }
}
