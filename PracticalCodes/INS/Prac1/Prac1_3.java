package pract.pkg1;
import java.util.Scanner;
public class prac3 { 
    public static void main(String[] args) {
        String rf;
        String s="";
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a String : ");
        rf = sc.nextLine();
        int i,j;      
        System.out.println("\n--\n First half :");
        for(i=0;i<rf.length();i=i+2){
            char c= rf.charAt(i);
            s = s+c;
            System.out.print(c);
        }      
        System.out.println("\nSecond Half :");
        for(j=1;j<rf.length();j=j+2){
            char c= rf.charAt(j);
            s = s+c;
            System.out.print(c);
        }
        System.out.println("\n");
    }
}