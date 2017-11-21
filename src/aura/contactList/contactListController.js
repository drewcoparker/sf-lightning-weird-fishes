({
	dataGetter : function(component, event, helper) {
		var action = component.get("c.getContacts") // connects to the controller in "contactController.cls"
		console.log("before adult")

		action.setCallback(this, function (response) {  // call back fucntion requests info from back end to set to varibale for manipulation
            var contacts = response.getReturnValue();
            var count = 0;
            component.set("v.contacts", contacts);  // variale "contacts" and what to do when you get it

            console.info(contacts, "look here");
            console.table(contacts);

            for (var contact of contacts) {
                count++;
            }
            component.set("v.count", count);
		});
        $A.enqueueAction(action);  // this fires the action after callback

        // Define a list of properties to use as table columns so we can iterate.
        var objProperties = ['Id','Name','Email','Phone','Address','Lead'];
        component.set("v.contactProperties",objProperties);
    },

    scriptLoaded : function(component, event, helper) {
        console.log("jQuery joined!")
        component.set("v.isjQueryLoaded", true);

        window.addEventListener('resize', function(){
            component.set("v.headersNeedWidths", true);
            // helper.computeTableContainerWidth(component);
            helper.computeHeaderWidths(component);
        }, true);
    },

    mouseDownResizer : function(component, event, helper) {
        // Denote the horizontal position of the resizer handle
        var startX = event.clientX;

        // Get the resizer handle that was just clicked on
        var childObj = event.target;
        var parObj = childObj.parentNode;

        // Traverse the DOM upward to find this resizer's parent th element
        while(parObj.tagName != 'TH') {
            parObj = parObj.parentNode;
        }

        // Create a reference to this th with jQuery
        var thisThId = parObj.id;
        var thisTh = '#contacts-table-container th#' + thisThId;
        var $thisTh = $(thisTh);

        // Attach a bound mousemove event listener
        $(document).on("mousemove.resizer", function(event) {
            var newWidth = $thisTh.width() + (event.clientX - startX);
            $thisTh.width(newWidth);
            $thisTh.children('div.slds-cell-fixed').width(newWidth);
            startX = event.clientX;
        });

        // Mouseup listener calls computeHeaderWidths so all header cells are updated
        $(document).on("mouseup", function() {
            $(document).unbind("mousemove.resizer");
            helper.computeHeaderWidths(component);
            $(document).off("mouseup");
        });


    }

});