package usecase.gitrepository;

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import usecase.GithubRepositoryAccessor;

import java.io.IOException;

public class VerifyGithubRepositoryTest {
    @Before
    public void setUp(){

    }

    @Test
    public void verify_GithubRepository_Exist() throws IOException {
        boolean flag;
        String needVerifyUrl = "https://github.com/KEEEER/GitRepositoryAnalysisSystem/";
        String[] metadatas = needVerifyUrl.split("/");
        flag = findKeyWord(metadatas, "github.com");
        Assert.assertTrue(flag);
    }

    @Test
    public void verify_GithubRepository_NOT_Exist() throws IOException {
        boolean flag = true;
        String needVerifyUrl = "https://github.com/KEEEER/no_such_repo/";
        String[] metadatas = needVerifyUrl.split("/");
        flag = findKeyWord(metadatas, "github.com");
        Assert.assertFalse(flag);
    }

    private boolean findKeyWord(String[] metadatas, String keyWord){
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONObject verifyJson = null;
        try {
            for (int i = 0; i < metadatas.length; i++) {

                if (metadatas[i].equals(keyWord) && metadatas.length - i >= 2) {
                    verifyJson = (JSONObject) accessor.httpsGet(
                            "https://api.github.com/repos/" +
                                    metadatas[i + 1] + "/" +
                                    metadatas[i + 2]
                    ).get(0);
                    break;
                }
            }
        } catch (Exception ignored) {}
        // ugly logic
        if(verifyJson != null) {
            if (verifyJson.has("message")){
                if(verifyJson.get("message").equals("Not Found")){
                    return false;
                }
            }
            else {
                return true;
            }
        }
        return false;
    }
}
