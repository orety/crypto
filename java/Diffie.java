public class Diffie {

  public static void main(String[] args) {
    int g = 3;
    int n = 17;
    System.out.println("g = " + 3);
    System.out.println("n = " + n);
    int A, B;
    A = 5;
    B = 7;
if(args.length != 0) {
    A = Integer.parseInt(args[0]);
    B = Integer.parseInt(args[1]);
}

    // a = Integer.parseInt(args[0]);

    System.out.println("A = " + A);
    System.out.println("B = " + B);

    double a = Math.pow(g, A) % n;
    double b = Math.pow(g, B) % n;

    System.out.println("g^A mod n -> a = " + a);
    System.out.println("g^B mod n -> b = " + b);

    double keyA = Math.pow(b, A) % n;
    double keyB = Math.pow(a, B) % n;

    System.out.println("b^A mod n -> a = " + keyA);
    System.out.println("g^B mod n -> b = " + keyB);
  }
}
