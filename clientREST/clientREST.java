import java.io.*;
import java.net.*;
import org.json.*;

public class clientREST {
    public void getREST() throws Exception {
        String url = "https://jsonplaceholder.typicode.com/albums";
        URL obj = new URL(url);
        HttpURLConnection conn = 
                 (HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("User-Agent", "Mozilla/5.0");
        int responseCode = conn.getResponseCode();
        System.out.println("Send GET Request: "+url);
        System.out.println("Response Code: "+responseCode); 

        BufferedReader in = new BufferedReader(
            new InputStreamReader(conn.getInputStream())
        );
        String r;
        StringBuffer response = new StringBuffer();
        while ((r=in.readLine())!=null) {
            response.append(r);
        }
        in.close();
        System.out.println
            ("Received data: \n"+response.toString());
     
        JSONArray myArray = new JSONArray(response.toString());
        for (int i=0;i<myArray.length();i++) {
            JSONObject o = myArray.getJSONObject(i);
            System.out.print("Title: ");
            System.out.println(o.getString("title"));
        }
            
    }
}
