package practical5;
import java.security.KeyPairGenerator;
import java.io.*;
import java.security.*;
public class Practical5 { 
    public static void main(String[] args) {
        // TODO code application logic here
        if(args.length == 1){
            System.out.println("usage : name of the file to sign ");
        }
        else try{
            KeyPairGenerator keyGen = KeyPairGenerator.getInstance("DSA","SUN");
            SecureRandom random = SecureRandom.getInstance("SHA1PRNG","SUN");   
            keyGen.initialize(1024,random);
            KeyPair pair = keyGen.generateKeyPair();
            PrivateKey priv = pair.getPrivate();
            PublicKey pub = pair.getPublic();    
            Signature dsa = Signature.getInstance("SHA1withDSA","SUN");
            dsa.initSign(priv);
            
            FileInputStream fis = new FileInputStream("D:\\TYCS\\502_INS\\Practical-5\\Pract-5\\Practical5\\src\\practical5\\Digital.txt");
            BufferedInputStream bufin = new BufferedInputStream(fis);
            byte[] buffer = new byte[1024];
            int len;
            while(bufin.available() != 0){
                len = bufin.read(buffer);
                dsa.update(buffer,0,len);
            };
            bufin.close();
            
            byte[] realSig = dsa.sign();
            FileOutputStream sigfos = new FileOutputStream("D:\\TYCS\\502_INS\\Practical-5\\Pract-5\\Practical5\\src\\practical5\\Digi.txt");
            sigfos.write(realSig);
            sigfos.close();
            
            byte[] key = pub.getEncoded();
            FileOutputStream keyfos = new FileOutputStream("D:\\TYCS\\502_INS\\Practical-5\\Pract-5\\Practical5\\src\\practical5\\PublicKey.txt");
            keyfos.write(key);
            keyfos.close();
            
        }
        catch(Exception e)
        {
            System.err.println("Caught exception"+e.toString());
        }
    };
}