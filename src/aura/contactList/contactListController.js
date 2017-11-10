({
	dataGetter : function(component, event, helper) {
		var action = component.get("c.getContacts") // connects to the controller in "contactController.cls"
		
		action.setCallback(this, function (response) {  // call back fucntion requests info from back end to set to varibale for manipulation
			component.set("v.contacts", response.getReturnValue());  // variale "contacts" and what to do when you get it
			console.log("before action", response.getReturnValue());
			console.info(response.getReturnValue(), "look here");

		});

		$A.enqueueAction(action);  // this fires the action after callback
	}

});