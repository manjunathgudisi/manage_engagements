sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'manageengagements',
            componentId: 'EngagementsDraftObjectPage',
            contextPath: '/EngagementsDraft'
        },
        CustomPageDefinitions
    );
});