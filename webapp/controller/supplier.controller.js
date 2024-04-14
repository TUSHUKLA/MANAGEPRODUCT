sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.tushars.manageproduct.controller.supplier", {
            onInit: function () 
            {
                this.getOwnerComponent().getRouter().getRoute("object").attachPatternMatched(this.onObjectMatched, this);
                
                
          
            },
            onObjectMatched : function (oEvent) {
                var sObjectId =  oEvent.getParameter("arguments").pId;
               
            },
            
        });
    });
