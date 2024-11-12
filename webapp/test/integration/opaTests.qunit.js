sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manageengagements/test/integration/FirstJourney',
		'manageengagements/test/integration/pages/EngagementsDraftList',
		'manageengagements/test/integration/pages/EngagementsDraftObjectPage'
    ],
    function(JourneyRunner, opaJourney, EngagementsDraftList, EngagementsDraftObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manageengagements') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEngagementsDraftList: EngagementsDraftList,
					onTheEngagementsDraftObjectPage: EngagementsDraftObjectPage
                }
            },
            opaJourney.run
        );
    }
);