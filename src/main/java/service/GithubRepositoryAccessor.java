package service;

import org.json.JSONArray;
import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class GithubRepositoryAccessor {
    private InputStream is;
    private InputStreamReader isr;
    private HttpsURLConnection httpsConnection;
    private Map<String, String> properties;

    public GithubRepositoryAccessor(){
        properties = new HashMap<>();
    }

    public JSONArray httpsGet(String url) throws IOException {
        httpsConnection = getConnection(url);
        httpsConnection.setRequestMethod("GET");
        setConnectionProperty(httpsConnection);
        BufferedReader reader = getJSONUsingHttpsGet(httpsConnection);
        String completeContent = getCompleteContentString(reader);
        if(completeContent.charAt(0) != '[') completeContent = "[" + completeContent + "]";
        JSONArray jsonArray = new JSONArray(completeContent);
        closeAllConnection();
        return jsonArray;
    }

    public void addHTTPSGetProperty(String property, String value){
        this.properties.put(property, value);
    }

    private HttpsURLConnection getConnection(String url) throws IOException {
        URL requestUrl = new URL(url);
        return (HttpsURLConnection) requestUrl.openConnection();
    }

    private void setConnectionProperty(HttpsURLConnection conn){
        for(String property : this.properties.keySet())
            conn.setRequestProperty(property, this.properties.get(property));
    }

    private BufferedReader getJSONUsingHttpsGet(HttpsURLConnection httpsConnection) throws IOException {
        is = httpsConnection.getInputStream();
        isr = new InputStreamReader(is);
        return new BufferedReader(isr);
    }
    
    private String getCompleteContentString(BufferedReader reader) throws IOException {
        StringBuilder compeleteContent = new StringBuilder(0);
        String line = "";
        while ((line = reader.readLine()) != null) compeleteContent.append(line);
        return compeleteContent.toString();
    }
    
    private void closeAllConnection() throws IOException {
        is.close();
        isr.close();
        httpsConnection.disconnect();
    }


}
