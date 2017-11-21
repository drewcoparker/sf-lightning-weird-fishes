({
    // render : function(cmp, helper) {
    //     var ret = this.superRender();
    //     console.log('in render()')
    //     return ret;
    // },

	// afterRender: function (component, helper) {
    //     this.superAfterRender();
    //     console.log('in afterRender()');

    // },

    rerender : function(component, helper){
        this.superRerender();
        var isjQueryLoaded = component.get("v.isjQueryLoaded");
        var headersNeedWidths = component.get("v.headersNeedWidths");
        if(component.isValid() && isjQueryLoaded && headersNeedWidths){
            console.log("jQuery can interact with the DOM now");
            // helper.computeTableContainerWidth(component);
            helper.computeHeaderWidths(component);
            component.set("v.headersNeedWidths", false);
        }
    },


    // unrender: function () {
    //     this.superUnrender();
    //     console.log('in unrender()');
    // }
})