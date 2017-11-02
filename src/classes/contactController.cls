public with sharing class contactController {
    @AuraEnabled
    public static List<Contact> getContacts() {
        List<Contact> contacts = [
            SELECT Id,
                   Name,
                   MailingStreet,
                   Phone,
                   Email,
                   LeadSource
            FROM Contact
        ];
        return contacts;
    }
}