public class Singleton{
    private static Singleton instance;

    private Singleton(){
        System.out.println("Class Connected");
    }
   public static Singleton getInstance(){
        if(instance==null){
            instance=new Singleton();
        }
        return instance;
   }

}