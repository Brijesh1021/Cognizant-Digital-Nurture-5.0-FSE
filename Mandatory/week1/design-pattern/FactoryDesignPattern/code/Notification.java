
interface Notification{
    void send();
}

class EmailNotification implements Notification{
    public void send(){
        System.out.println("This is email notification");
    }
}

class SmsNotification implements Notification{
    public void send(){
        System.out.println("This is SMS notification");
    }
}