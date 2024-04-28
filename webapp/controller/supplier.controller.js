sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent) {
        "use strict";

        return Controller.extend("com.tushars.manageproduct.controller.supplier", {
            onInit: function () 
            {
                UIComponent.getRouterFor(this).getRoute("RouteViewSupplier").attachPatternMatched(this.onObjectMatched, this);
                
                
          
            },
            onObjectMatched : function (oEvent) {
                var sObjectId =  oEvent.getParameter("arguments").pId;
               
            },
            getRouter : function () {
                return UIComponent.getRouterFor(this);
            },
            
        });
    });
