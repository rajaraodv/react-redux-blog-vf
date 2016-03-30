# React Redux CRUD App In Visualforce


#Local Installation
1. Install <a href="https://nodejs.org" target="_blank">Node.js</a> 
2. `git clone https://github.com/rajaraodv/react-redux-blog-vf.git`
3. `cd react-redux-blog-vf`
4. `npm install`

#Install ngrok for localhost tunneling
Install <a href="https://ngrok.com" target="_blank">ngrok</a>. It provides a way to serve/expose your localhost files to the internet even in **https (required by Visualforce)**.  

**This is great for VF development**. Because now, you can develop React Redux (or angular or whatever) locally and directly load the JS from within Visualforce while you are still developing it! So you won't have to  upload the JS to Static Resource everytime you make changes to the code!

For example: In your Visualforce,
Instead of point to static resource, you can point to something that looks like below. Notice that `bundle.js` is actually the main app file that's currently being developed on localhost!
 
`<script src="https://cca77cf6.ngrok.io/bundle.js"/>`

**Note: Once you are all done, simply copy the final bundle.js from 'public' folder in your localhost (see production section) to static resource and update the url above to point to static resource.**

#Custom Object
Create a custom object "Post" with following three fields: 

1. "Name" (This is the default/standard text field), 
2. "Categories" (text) 
3. "Content" (textarea)

#Development: Local + Visualforce
*You need two terminal windows open*, one for client and the other for ngrok.

1. In terminal 1, run: `npm run dev`. This runs the development server(webpack-dev-server) at port 8080.
2. In terminal 2, point ngrok to 8080 by running: `/path/to/ngrok  http 8080`. You'll see ngrok w/ urls as shown below. Simpy use the **https** one.
  <img src="https://raw.githubusercontent.com/rajaraodv/react-redux-blog-vf/master/ngrok.png" />
3. Open up your Visualforce page and page the code below. Update the bundle.js file's url to `<your ngrok's https url>/bundle.js`.

```
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

    <!-- reactjs -->
    <div id="body" />
    <!--Development to point to ngrok. Also update the ngrok's url to match your localhost's url-->
    <script src="https://cca77cf6.ngrok.io/bundle.js"/>

    <!-- Uncomment and use the below for production to point to final static resource "reactreduxblog"(bundle.js) -->
    <!-- <script src="{!URLFOR($Resource.reactreduxblog)}"/> -->
   
  </body>
</html>
</apex:page>
```


#Production (Visualforce)

1. Generate the latest React app by running: `npm run build`
2. This file will be created in the `public` folder
3. Upload the file to static resource
4. Change the URL in your Visualforce to point to the `bundle.js` in Static resource.


#Learn More
1. <a href="https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_remote_objects.htm" target="_blank">Visualforce Remote Objects</a>
2. <a href="https://jsforce.github.io" target="_blank">jsforce (nodejs lib)</a>


#React Redux Blogs
Please check out the following blogs to learn more:

1. <a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.kjkfygy88" target="_blank">A Guide For Building A React Redux CRUD App</a>
2. <a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124" target="_blank">Adding A Robust Form Validation To React Redux Apps</a></b> 



