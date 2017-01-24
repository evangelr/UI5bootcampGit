sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampwebapp.controller.App", {

		onInit: function() {
			//Set Data Model View
			var oData = {
				field: {
					username: "username"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

			//set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcampwebapp.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},

		onLoginPress: function() {
			// sap.m.MessageToast.show("Hello World");
			var oVar1 = this.getView().byId("username");
			var oVar2 = this.getView().byId("password");
			var uname = oVar1.getValue();
			var pass = oVar2.getValue();

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			//username and password is initial
			if ((uname === "" && pass === "") ||
				(uname === " " && pass === " ")) {
				//Error - Input username and password
				MessageToast.show("Please Input Username and Password");
				//username or password is incorrect
			} else if ((uname !== "evangelr" || pass !== "password1")) {
				MessageToast.show("Incorrect User Credentials");
			} else {
				//successful login
				// MessageToast.show("Login Successful");
				MessageToast.show("Login Successful," + " " + sMsg + "!");
			}
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampwebapp.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampwebapp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampwebapp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampwebapp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});