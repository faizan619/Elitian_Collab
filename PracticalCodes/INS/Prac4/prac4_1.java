package pract.pkg1;
import java.util.*;
public class prac4 {  
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 2 prime Number, prime number P and primitive root G both users should agree on same");
        int P = sc.nextInt();
        int G = sc.nextInt();
        System.out.println("Enter secret value by Alice :");
        int a = sc.nextInt();
        System.out.println("Enter secret by bob");
        int b = sc.nextInt();
        
        int x = (int) Math.pow(G, a)%P;
        int y = (int) Math.pow(G, b)%P;
        
        System.out.println("X :"+x);
        System.out.println("Y :"+y);
           
        int k1 = (int) Math.pow(y, a)%P;
        int k2 = (int) Math.pow(x, b)%P;
        
        System.out.println("Secret key for Alice is : "+k1);
        System.out.println("Secrey key for Bob is :"+k2);
    }
}