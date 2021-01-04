package adapter.gitrepository;

import database.Database;
import domain.GitRepository;
import usecase.gitrepository.GitRepositoryRepository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class GitRepositoryRepositoryImpl implements GitRepositoryRepository {
    private List<GitRepository> gitRepositories;
    private Connection conn;

    public GitRepositoryRepositoryImpl(){
        gitRepositories = new ArrayList<>();
        conn = Database.getConnection();
    }
    public GitRepository getGitRepositoryById(String id){
        final String query = "SELECT reponame, ownername FROM gitrepository WHERE id=?";
        GitRepository gitRepository;
        try{

            assert conn!= null;
            ResultSet resultSet;
            PreparedStatement preparedStatement = conn.prepareStatement(query);
            preparedStatement.setString(1, id);
            resultSet = preparedStatement.executeQuery();
            resultSet.next();
            gitRepository = new GitRepository(
                    id,
                    resultSet.getString("reponame"),
                    resultSet.getString("ownername")
            );
            return gitRepository;
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public void createGitRepository(GitRepository gitRepository) {
        gitRepositories.add(gitRepository);
        final String insert = " INSERT INTO gitrepository(id, reponame, ownername) VALUES(?,?,?) ";
        try {
            assert conn != null;
            PreparedStatement preparedStatement = conn.prepareStatement(insert);
            preparedStatement.setString (1,gitRepository.getId());
            preparedStatement.setString (2, gitRepository.getRepoName());
            preparedStatement.setString (3, gitRepository.getOwnerName());
            preparedStatement.execute();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void deleteGitRepository(String id) {
        final String delete = "DELETE FROM gitrepository WHERE id=?";
        try{
            PreparedStatement preparedStatement = conn.prepareStatement(delete);
            preparedStatement.setString(1, id);
            preparedStatement.executeUpdate();
        }catch (Exception e){e.printStackTrace();}
    }


}
