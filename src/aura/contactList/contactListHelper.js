({
	computeHeaderWidths : function(component) {
        var count = component.get("v.fireCount");
        var headerCells = '#contacts-table-container th.header-cell';
        var $headerCells = $(headerCells);
        $headerCells.each(function(index) {
            var $this = $(this);
            var width = $this.width();
            $this.children('div.slds-cell-fixed').width(width);
            // $this.width(width);
        })
        count += 1;
        component.set("v.fireCount", count);
        console.log("Component has computed header widths " + count + " time(s).");
    },

    // computeTableContainerWidth : function(component) {
    //     var tableContainer = '.outer-table-container div#contacts-table-container';
    //     var table = '.outer-table-container table#contacts-table-el';
    //     var $tableContainer = $(tableContainer);
    //     var $table = $(table);
    //     var tableWidth = $table.width();
    //     console.log("@TableWidth: "+tableWidth);
    //     $tableContainer.width(tableWidth);
    // }
})