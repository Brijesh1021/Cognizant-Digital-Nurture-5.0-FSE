
public class Main {
    public static void main(String[] args) {
        Notification notifcation=NotificationType.getNotifcation("EMAIL");
        Notification not=NotificationType.getNotifcation("SMS");
        notifcation.send();
        not.send();
    }
}
