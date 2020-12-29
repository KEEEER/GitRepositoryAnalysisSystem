package adapter;

import database.Database;
import org.junit.Assert;
import org.junit.Test;

import java.sql.Connection;

public class DatabaseTest {
    @Test
    public void DatabaseConnectionTest(){
        Connection connection = Database.getConnection();
        Assert.assertNotNull(connection);
    }
}
