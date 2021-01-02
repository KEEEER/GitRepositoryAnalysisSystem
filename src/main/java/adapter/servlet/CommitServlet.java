package adapter.servlet;

import org.json.JSONArray;
import org.json.JSONObject;
import usecase.GithubRepositoryAccessor;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

@WebServlet(urlPatterns = "/commitServlet", name = "commitServlet")
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

    private JSONObject getTotalStatsJsonObject(JSONArray personalStatsJsonArray) throws IOException {
        Map<Integer, ArrayList<Integer>> weeksStatsMap = new LinkedHashMap<>();
        for(Object onePersonStatsObject : personalStatsJsonArray) {
            JSONObject onePersonStatsJsonObject = (JSONObject) onePersonStatsObject;
            JSONArray weeksStatsJsonObject = onePersonStatsJsonObject.getJSONArray("weeks_stats");
            for(Object oneWeekStatsObject : weeksStatsJsonObject) {
                JSONObject oneWeekStatsJsonObject = (JSONObject) oneWeekStatsObject;
                int startWeek = oneWeekStatsJsonObject.getInt("start_week");
                ArrayList<Integer> statsInfo;
                if(weeksStatsMap.containsKey(startWeek)) {
                    statsInfo = weeksStatsMap.get(startWeek);
                    statsInfo.set(0, statsInfo.get(0) + oneWeekStatsJsonObject.getInt("additions"));
                    statsInfo.set(1, statsInfo.get(1) + oneWeekStatsJsonObject.getInt("deletions"));
                    statsInfo.set(2, statsInfo.get(2) + oneWeekStatsJsonObject.getInt("commits"));
                }else {
                    statsInfo = new ArrayList<>();
                    statsInfo.add(oneWeekStatsJsonObject.getInt("additions"));
                    statsInfo.add(oneWeekStatsJsonObject.getInt("deletions"));
                    statsInfo.add(oneWeekStatsJsonObject.getInt("commits"));
                }
                weeksStatsMap.put(startWeek, statsInfo);
            }
        }

        int totalAdditions = 0;
        int totalDeletions = 0;
        int totalCommits = 0;
        int linesCount = 0;
        JSONArray WeeksStatsForOutput = new JSONArray();
        for (Map.Entry<Integer, ArrayList<Integer>> statsEntry : weeksStatsMap.entrySet()) {
            ArrayList<Integer> statsInfo = statsEntry.getValue();

            totalAdditions += statsInfo.get(0);
            totalDeletions += statsInfo.get(1);
            totalCommits += statsInfo.get(2);
            linesCount = totalAdditions - totalDeletions;

            JSONObject oneWeekStatsForOutput = new JSONObject();
            oneWeekStatsForOutput.put("start_week", statsEntry.getKey());
            oneWeekStatsForOutput.put("additions", statsInfo.get(0));
            oneWeekStatsForOutput.put("deletions", statsInfo.get(1));
            oneWeekStatsForOutput.put("commits", statsInfo.get(2));
            oneWeekStatsForOutput.put("lines_count", linesCount);
            WeeksStatsForOutput.put(oneWeekStatsForOutput);
        }

        JSONObject totalStatsResult = new JSONObject();
        totalStatsResult.put("total_additions", totalAdditions);
        totalStatsResult.put("total_deletions", totalDeletions);
        totalStatsResult.put("total_commits", totalCommits);
        totalStatsResult.put("lines_count", linesCount);
        totalStatsResult.put("weeks_stats", WeeksStatsForOutput);
        return totalStatsResult;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        String owner = requestBody.getString("owner");
        String repo = requestBody.getString("repo");
        JSONArray personalStatsJsonArray = getPersonalStatsJsonArray(owner, repo);
        JSONObject totalStatsJsonObject = getTotalStatsJsonObject(personalStatsJsonArray);
        request.setAttribute("personal_commits_stats", personalStatsJsonArray);
        request.setAttribute("total_commits_stats", totalStatsJsonObject);

        JSONArray result = new JSONArray();
        result.put(totalStatsJsonObject);
        result.putAll(personalStatsJsonArray);
        response.setContentType("text/json");
        PrintWriter out = response.getWriter();
        out.println(result) ;
        out.close();
    }
}
