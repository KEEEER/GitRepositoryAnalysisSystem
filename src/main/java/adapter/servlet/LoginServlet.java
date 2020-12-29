package adapter.servlet;
import adapter.account.AccountRepositoryImpl;
import domain.Account;
import org.json.JSONObject;
import usecase.account.AccountRepository;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/userLogin", name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // dependency 超亂(bad smell but no time.QQ)
        JSONObject jsonObject = new JSONObject();
        AccountRepository accountRepository = new AccountRepositoryImpl();
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        Account account = new Account(
                requestBody.getString("account"),
                requestBody.getString("password")
        );
        boolean isAccountValid = accountRepository.verifyAccount(account);
        account = accountRepository.getAccountByAccountAndPassword(account);
        if (isAccountValid){
            jsonObject.append("valid", "true");
            jsonObject.append("userName", account.getName());
            jsonObject.append("redirect", "homepage");
        }
        else{
            jsonObject.append("valid", "false");
        }

        request.setAttribute("result", jsonObject);
        response.setContentType("text/json");
        PrintWriter out = response.getWriter();
        out.println(jsonObject) ;
        out.close();
    }
}
