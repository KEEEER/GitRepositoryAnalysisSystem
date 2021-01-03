package adapter.servlet;

import adapter.account.AccountRepositoryImpl;
import adapter.account.CreateAccountInputImpl;
import adapter.account.CreateAccountOutputImpl;
import domain.Account;
import org.json.JSONObject;
import usecase.account.AccountRepository;
import usecase.account.CreateAccountInput;
import usecase.account.CreateAccountOutput;
import usecase.account.CreateAccountUseCase;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = "/signUp", name = "SignUpServlet")
public class SignUpServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        String userName = requestBody.getString("userName");
        String account = requestBody.getString("account");
        String password = requestBody.getString("password");
        JSONObject returnJson = new JSONObject();

        AccountRepository accountRepository = new AccountRepositoryImpl();
        Account fakeAccount = new Account(account, password);
        if(!accountRepository.verifyAccount(fakeAccount)){
            CreateAccountInput input = new CreateAccountInputImpl();
            input.setName(userName);
            input.setAccount(account);
            input.setPassword(password);
            CreateAccountOutput output = new CreateAccountOutputImpl();
            CreateAccountUseCase createAccountUseCase = new CreateAccountUseCase(accountRepository);
            createAccountUseCase.execute(input, output);
            returnJson.put("isSuccess", "true");
        }
        else{
            returnJson.put("isSuccess", "false");
        }

        response.setContentType("text/json");
        PrintWriter out = response.getWriter();
        out.println(returnJson);
        out.close();
    }
}