

public class Product {
    public int productId;
    public String productName;
    public String category;

    public Product(int prodId,String proName,String category){
        this.productId=prodId;
        this.productName=proName;
        this.category=category;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId +
               ", Name: " + productName +
               ", Category: " + category;
    }
}
