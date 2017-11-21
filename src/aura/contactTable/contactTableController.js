({
	doInit : function(component, event, helper) {
		console.log("dataTable init");
        var contacts = component.get("v.contacts");
        // Get all the property names in contact obj (i.e., "address");
        // var contactProperties = Object.getOwnPropertyNames(contact);
        // component.set("v.contactProperties", contactProperties);
        console.log(JSON.stringify(contacts));
	}
})