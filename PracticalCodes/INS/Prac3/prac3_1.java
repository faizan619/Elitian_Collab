
package sha.program.ins;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHAProgramINS {

    public static String encryptThisString(String input){
        try{
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger no = new BigInteger(1,messageDigest);
            String hashtext = no.toString(16);
            
            return hashtext;
        }
        catch(NoSuchAlgorithmException e){
            throw new RuntimeException(e);
        }
    }
    
    public static void main(String[] args){
        System.out.println("HashCode by SHA-1 for :");
        String s1 = "Faizan alam";
        System.out.println("\n"+s1+" : "+encryptThisString(s1));
    }
}