public with sharing class ContactMsg {
   @AuraEnabled public String name;
   @AuraEnabled public String phone;
   @AuraEnabled public String email;
   @AuraEnabled public String id;
   @AuraEnabled public String address;
   @AuraEnabled public String lead;

    public ContactMsg(Contact c){
        this.name    = c.Name;
        this.phone   = c.Phone;
        this.email   = c.Email;
        this.id      = c.Id;
        this.address = c.MailingStreet;
        this.lead    = c.LeadSource;
    }
}