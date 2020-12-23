package adapter;
import com.sun.org.apache.xalan.internal.xsltc.dom.CurrentNodeListFilter;
import org.json.JSONObject;
import usecase.GithubRepositoryAccessor;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CommitServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("return" , "ok");
        request.setAttribute("obj", jsonObject);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response){

    }
}
