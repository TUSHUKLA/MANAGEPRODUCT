sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent, JSONModel) {
        "use strict";

        return Controller.extend("com.tushars.manageproduct.controller.supplier", {
            onInit: function () {
                UIComponent.getRouterFor(this).getRoute("RouteViewSupplier").attachPatternMatched(this.onObjectMatched, this);
                
            },

            onObjectMatched : function (oEvent) {
                const that = this
                var sPID =  oEvent.getParameter("arguments").pId;

                const oModel = this.getOwnerComponent().getModel();
                
                // Read supplier data
                oModel.read("/Products("+ sPID +")/Supplier", {
                         success : function(oSupplierData, response) {
                            console.log('supplier data = ', oSupplierData)
                            let oJSONMOdel1 = new JSONModel()
                            oJSONMOdel1.setData(oSupplierData)
                            that.getView().setModel(oJSONMOdel1, "S")    
                         },
                         
                         error: function(oError) {
                            console.log(oError)
                        }
                })
                //end

                // Read product data
                oModel.read("/Products("+sPID+")", {
                    success : function(oSupplierData, response) {
                       console.log('product data = ', oSupplierData)
                       let oJSONMOdel1 = new JSONModel()
                       oJSONMOdel1.setData(oSupplierData)
                       that.getView().setModel(oJSONMOdel1, "PD")    
                    },
                    
                    error: function(oError) {
                       console.log(oError)
                   }
                 })    
            },

            getRouter : function () {
                return UIComponent.getRouterFor(this);
            }
        });
    });
