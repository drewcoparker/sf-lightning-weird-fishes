public with sharing class contactController {

    @AuraEnabled
    public static String getUserName() {
        return userInfo.getName();
    }

    @AuraEnabled
    public static List<ContactMsg> getContacts() {
        List<Contact> contacts = [
            SELECT Id,
                   Name,
                   MailingStreet,
                   Phone,
                   Email,
                   LeadSource
            FROM Contact
        ];

        List<ContactMsg> msgList = new List<ContactMsg>();
        for(Contact c:contacts){
            msgList.add(new ContactMsg(c));
        }
        return msgList;
    }
}