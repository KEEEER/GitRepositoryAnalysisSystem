package adapter;
import org.json.JSONArray;
import org.json.JSONObject;
import usecase.GithubRepositoryAccessor;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CommitServlet extends HttpServlet {
    private JSONArray getPersonalStatsJsonArray(String owner, String repo) throws IOException {
        String apiUrl = "https://api.github.com/repos/" + owner + "/" + repo + "/stats/contributors";
        GithubRepositoryAccessor accessor = new GithubRepositoryAccessor();
        JSONArray jsonArray = accessor.httpsGet(apiUrl);
        JSONArray personalStatsJsonArrayResult = new JSONArray();
        for(Object statsObject : jsonArray) {
            int personalTotalAdditions = 0;
            int personalTotalDeletions = 0;
            JSONArray WeeksStatsForOutput = new JSONArray();

            JSONObject statsJsonObject = (JSONObject) statsObject;
            JSONArray weeksJsonArray = statsJsonObject.getJSONArray("weeks");
            for(Object weekObject : weeksJsonArray) {
                JSONObject weekJsonObject = (JSONObject) weekObject;
                personalTotalAdditions += weekJsonObject.getInt("a");
                personalTotalDeletions += weekJsonObject.getInt("d");

                JSONObject oneWeekStatsForOutput = new JSONObject();
                oneWeekStatsForOutput.put("start_week", weekJsonObject.getInt("w"));
                oneWeekStatsForOutput.put("additions", weekJsonObject.getInt("a"));
                oneWeekStatsForOutput.put("deletions", weekJsonObject.getInt("d"));
                oneWeekStatsForOutput.put("commits", weekJsonObject.getInt("c"));
                WeeksStatsForOutput.put(oneWeekStatsForOutput);
            }
            JSONObject personalElemJsonObject = new JSONObject();
            personalElemJsonObject.put("user_name", statsJsonObject.getJSONObject("author").getString("login"));
            personalElemJsonObject.put("total_commits", statsJsonObject.getInt("total"));
            personalElemJsonObject.put("total_additions", personalTotalAdditions);
            personalElemJsonObject.put("total_deletions", personalTotalDeletions);
            personalElemJsonObject.put("weeks_stats", WeeksStatsForOutput);
            personalStatsJsonArrayResult.put(personalElemJsonObject);
        }
        return personalStatsJsonArrayResult;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JSONObject repoInfoJsonObject = (JSONObject) request.getAttribute("repoInfo");
        String owner = repoInfoJsonObject.getString("owner");
        String repo = repoInfoJsonObject.getString("repo");
        JSONArray personalStatsJsonArray = getPersonalStatsJsonArray(owner, repo);
        request.setAttribute("personal_commit_stats", personalStatsJsonArray);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response){

    }
}
