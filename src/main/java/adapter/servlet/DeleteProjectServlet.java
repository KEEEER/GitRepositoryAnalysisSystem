package adapter.servlet;

import adapter.project.ProjectRepositoryImpl;
import org.json.JSONObject;
import usecase.project.ProjectRepository;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/deleteProject", name = "DeleteProjectServlet")
public class DeleteProjectServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject jsonObject = new JSONObject();
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        ProjectRepository projectRepository = new ProjectRepositoryImpl();
        String userId = String.valueOf(requestBody.get("userId"));
        String projectId = String.valueOf(requestBody.get("userId"));
        if (projectRepository.deleteProject(projectId)) jsonObject.put("isSuccess", "true");
        else jsonObject.put("isSuccess", "false");

        PrintWriter out = response.getWriter();
        out.println(jsonObject);
        out.close();
    }
}
