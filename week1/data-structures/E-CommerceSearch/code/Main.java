
public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product linear=LinearSearch.linear(products,105);
        System.out.println("Linear Search");
        System.out.println(linear);

        Product binary=BinarySearch.search(products,101);
        System.out.println("Binary Search:");
        System.out.println(binary);

    }
    
}
