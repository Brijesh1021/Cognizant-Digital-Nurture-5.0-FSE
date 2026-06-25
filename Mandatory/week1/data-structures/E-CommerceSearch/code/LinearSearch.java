

public class LinearSearch {
    
    public static Product linear(Product[] products,int id){
        for(Product product:products){
            if(product.productId==id){
                return product;
            }
        }
        return null;
    }
}
