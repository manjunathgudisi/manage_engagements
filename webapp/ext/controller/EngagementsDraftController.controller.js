sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('manageengagements.ext.controller.EngagementsDraftController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf manageengagements.ext.controller.EngagementsDraftController
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},

			onInitSmartFilterBarExtension: function() {
				this.base.getExtensionAPI().setCustomMessage("custom message");
			},

			onAfterRendering: function() {
				this.base.getExtensionAPI().setCustomMessage("custom message");
			}
		}
	});
});
