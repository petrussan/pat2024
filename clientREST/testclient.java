
public class testclient {
    public static void main(String[] args) {
        clientREST client = new clientREST();
        try {
            client.getREST();
        } catch (Exception e) {
            e.printStackTrace();
        }    
    }
}