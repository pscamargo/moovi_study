sap.ui.define([
    "moovi/m09a01/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("moovi.m09a01.controller.View1", {
            onInit: function () {

            },

            onListItemPress: function(oEvent){
                var oItem, oCtx
                oItem = oEvent.getSource()
                oCtx = oItem.getBindingContext();
                this.getRouter().navTo("RouteCompanyDetail",{
                    carrId: oCtx.getProperty("Carrid")
                })
            },

            onBtnCreatePress: function(oEvent){
                this.getRouter().navTo("RouteCompanyDetail", {
                    carrId: "New"
                })
            }
        });
    });
