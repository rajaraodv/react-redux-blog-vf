# React Redux CRUD App

#Live App
https://protected-escarpment-79486.herokuapp.com/

#Blogs
Please check out the following blogs for all the detals: 

1. <a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.kjkfygy88" target="_blank">A Guide For Building A React Redux CRUD App</a>
2. <a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124" target="_blank">Adding A Robust Form Validation To React Redux Apps</a></b> 


#Running On Heroku
You can create your own version of the app (including MongoDB!)
<br/>
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#Local Installation
1. Install <a href="https://nodejs.org" target="_blank">Node.js</a> 
2. Install <a target="_blank" href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew">MongoDB</a>
3. `git clone https://github.com/rajaraodv/react-redux-blog.git`
4. `cd react-redux-blog`
5. `npm install`



#Running Locally
*You need two terminal windows open*, one for client and the other for server.

####Development
1. In terminal 1, run: `npm start`. This runs the app server (Express). 
2. In terminal 2, run: `npm run dev`. This runs the development server(webpack-dev-server).
3. Open browser and go to: `localhost:8080`

Note: If you open `localhost:3000` in browser, you'll see a *stale* production app, so while in development, **always go to `localhost:8080`**

####Production
In production, we need to compile the **latest** client js and place it to `public` folder. This allows the main app server(Express) to also show the final app.

1. Generate latest React app: `npm run build`.
2. In terminal 1, run `npm start`. It will be running both the server and the client.
3. Open browser and go to : `localhost:3000`.



#Cloning Locally And Pushing To Heroku
Running your own instance on <a href="https://heroku.com">Heroku</a>.

1. `git clone https://github.com/rajaraodv/react-redux-blog.git`
2. `cd react-redux-blog`
3. `heroku login` (enter heroku credentials)
4. `heroku init`
5. `heroku create` 
6. `heroku addons:create mongolab`  <-- Add Mongolab test DB
7. `git push heroku master`


###Making changes to your app and pushing it to Heroku
Everytime you make changes to the front end, you need to build it, and do git commit before pushing it to Heroku test server.

1. `npm run build` #build new React app JS
2. `git add .` #Add change to git
3. `git commit -m "<your comment>" 
4. `git push heroku master`
5. `heroku open`

I usually have something like below that combines all the steps. I just change the commit message everytime.

`npm run build && git add . && git commit -m "made changes" && git push heroku master && heroku open`




