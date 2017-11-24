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

        var scroller = '#scroller';
        var $scroller = $(scroller);

        // Get a reference to all the fixed cells within the THs
        var fixedCells = '#scroller th.header-cell div.slds-cell-fixed';
        var $fixedCells = $(fixedCells);
        var lastScrollPosition = 0;
        // Set up a scroll listener in the overflow div
        $scroller.on('scroll.scroller', function() {
            // Get the horizontal position of the scrollbar
            var horizontalScrollPosition = $(this).scrollLeft();
            if (lastScrollPosition !== horizontalScrollPosition) {
               console.log('scrolling horizontal');
               // Apply the new position to each fixed cell so that they move with the table
               // The negative number ensures they will move in the opposite direction, off to the left
               $fixedCells.each(function (index) {
                   $(this).css('transform', 'translate3d(-' + horizontalScrollPosition + 'px, 0px, 0px)');
               });
            }
            lastScrollPosition = horizontalScrollPosition;
        });
    },


    // unrender: function () {
    //     this.superUnrender();
    //     console.log('in unrender()');
    // }
})