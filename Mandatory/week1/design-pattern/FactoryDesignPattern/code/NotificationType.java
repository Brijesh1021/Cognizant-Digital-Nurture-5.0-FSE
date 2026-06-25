
public class NotificationType {
    public static Notification getNotifcation(String type){

        if(type.equalsIgnoreCase("EMAIL")){
            return new EmailNotification();
        }else if(type.equalsIgnoreCase("SMS")){
            return new SmsNotification();
        }
        return null;
    }
}
