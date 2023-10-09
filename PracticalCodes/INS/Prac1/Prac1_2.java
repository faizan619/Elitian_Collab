package pract.pkg1;
import java.util.Scanner;
import java.util.HashMap;

public class prac1B {
    public static char a[] = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};

    public static char b[] = {'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'};
    
    public static String doEncryption(String s){
        char c[] = new char[(s.length())];
        for(int i=0;i<s.length();i++){
            for(int j=0;j<26;j++){
                if(a[j] == s.charAt(i)){
                    c[i]=b[j];
                    break;
                }
            }
        }
        return new String(c);
    }
    public static String doDecryption(String s){
        char c1[] = new char[(s.length())];
        for(int i = 0;i<s.length();i++){
            for(int j=0;j<26;j++){
                if(b[j] == s.charAt(i)){
                    c1[i]=a[j];
                    break;
                }
            }
        }
        return new String(c1);
    }
    
  public static void main(String[] args) {
      System.out.println("Enter The String :");
      Scanner sc = new Scanner(System.in);
  System.out.println("Enter The String :");
  String str = sc.nextLine();
  System.out.println("Do you want to encrypt or decrypt the string? (e/d)");
  String choice = sc.nextLine();
  if (choice.equals("e")) {
    System.out.println("The encrypted string is: " + doEncryption(str));
  } else if (choice.equals("d")) {
    System.out.println("The decrypted string is: " + doDecryption(str));
  } else {
    System.out.println("Invalid choice!");
  }
        }
}