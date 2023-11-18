import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    private static boolean isPangram(String input) {
        String cleanInput = input.replaceAll("[^a-zA-Z]", "").toLowerCase();


        Set<Character> uniqueLetters = new HashSet<>();


        for (char c : cleanInput.toCharArray()) {
            if (Character.isLetter(c)) {
                uniqueLetters.add(c);
            }
        }
        
        return uniqueLetters.size() == 26;
    }
}
