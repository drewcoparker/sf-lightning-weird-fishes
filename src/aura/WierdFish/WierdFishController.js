({
	doInit : function(component, event, helper) {
        var action = component.get("c.getUserName");

        action.setCallback(this, function(response) {
            console.log("*** User name: "+response.getReturnValue());
            component.set("v.userName", response.getReturnValue());
        });

        $A.enqueueAction(action);
	}
})