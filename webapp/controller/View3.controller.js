sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.tushars.manageproduct.controller.View3", {
            onInit: function () 
            {
                
                
                
                
          
            },
            onPress:function(oEvent)
            { 
                let pId = oEvent.getSource().getBindingContext().getProperty("ProductID")
                const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteViewSupplier", {pId:pId});

            }
            
        });
    });
