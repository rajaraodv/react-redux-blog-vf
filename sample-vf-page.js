<apex:page showHeader="false" sidebar="false" standardStylesheets="false"  applyBodyTag="false" applyHtmlTag="false">
<html>
<head>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
</head>
<body>
    <!-- Remote Objects definition to set accessible sObjects and fields -->
    <apex:remoteObjects >
        <apex:remoteObjectModel name="Post__c" jsShorthand="Post" 
            fields="Id, Name, Categories__c, Content__c">
        </apex:remoteObjectModel>
    </apex:remoteObjects>

    <!-- reactjs (change the url below to point to your localhost or static resource) -->
    <div id="body" />
    <script src="https://cca77cf6.ngrok.io/bundle.js"/>
  </body>
</html>
</apex:page>