# GlanceGitHub
Cross-Platform mobile(based on the build) application which helps us glance through Git Users/ their profile stats and repositories details. 


This is a simple application built on Ionic 2 framework and cordova.
Ionic-2 is framework built over angularJS.

This application requires the following installed.
cordova, ionic-2 , typescript

This follows MVC model architecture.

Run ionic serve to see the application in action.
Switch view in developer console of chrome to Mobile devices.


Issue:

More than 25 requests per minute to gitAPI as an unauthorized user ,starts dropping further requests, till you restart the application.

Developments to be made

1. Include authentication which allows more requests per minute to git API server.
2. Make the chart reflect the actual language weightage of each user.
