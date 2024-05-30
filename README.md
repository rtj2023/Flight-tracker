Interactive MERN Stack Single-Page Application

Working with the group we create an "Flight-tracker" Mern-stack single-page application , we combined a scalable MongoDB back end , a GraphQL API and Express.js and also Node.js server with React front end , implementing user authentication with JWT to build a user-focused platform.


Deploying a MERN Stack Application to Render: Create a Database on MongoDB Atlas

First, you'll create a database for your application:

1.Navigate to the MongoDB Atlas dashboard. Click on the "Database" link in the left-hand sidebar. You'll see something like the following image:
![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/dd0f95b4-6d63-4198-81eb-0a0c18899e8e)

2.To create a database for your application, click the "Browse Collections" button in your sandbox Clusters box. If you haven't previously created a database, you'll be taken to a page that looks like the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/59d07938-6eba-4637-b25e-86e62e1bcd54)

3.From this page, select the "Add My Own Data" button. If you previously created a database through MongoDB Atlas and need to create another one for this app, click the "+ Create Database" button in the left column of the window pane instead. Either way, the resulting modal should look like the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/ed850a2c-8244-45c5-a103-b9cfa60d5074)

4.Fill out the form with the name of your MongoDB database and a collection for that database. Leave the "Additional Preferences" field blank. You only need to create one collection to get started, as your application will create them upon deploy, so don't worry if you think your database will scale up or down in the future.

5.When you're done creating your database and initial collection, the dashboard should display them, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/4aec58ef-0050-49fb-993e-1fe560cf2ff7)

Great! Your database has been created. Let's move on to connect it to your application in production.


Project Setup
To start, make sure that your project is initialized as a Git repository. You can check this by running the following command at the root of your project:

"git status"

If you encounter an error, that means that your project isn't yet a Git repository. You can initialize the repository by running the following command:

"git init"

Applications that feature an Express.js back end can use Render's PORT environment variable. To set this up, create a port variable with a value of process.env.PORT. You can also add a default value for local instances of your server by using the || syntax, as shown in the following example:

"const port = process.env.PORT || 3001"

Render allows you to deploy directly from a GitHub repository, so make sure you have committed and pushed your changes to your GitHub:

"git add -A
git commit -m "<descriptive message here>"
git push"

Update the install script and add a render-build script to your package.json similar to the following example:

{
"name": "googlebooks-app",
"version": "1.0.0",
"description": "",
"main": "server/server.js",
"scripts": {
"start": "node server/server.js",
"develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
"install": "cd server && npm i && cd ../client && npm i --production=false",
"build": "cd client && npm run build",
"render-build":"npm install && npm run build"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"concurrently": "^8.2.0"
}
}


Now that we've created the repository, configured the server, and pushed to GitHub, we can create an app on Render and link it to our existing GitHub repository.


Create a Render App:

Create a new Render app by clicking the "New" button on the right side of the navbar, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/a3ef8b92-4b00-499a-88da-64d8f2ff557f)


Select "Web Service" from the dropdown menu, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/935c8064-7569-4958-b7e6-c0c5547f7690)

Make sure "Build and deploy from Git repository" is selected, then click "Next," as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/8eb557d6-d812-4229-9ea0-61ffa15ea3ba)

If this is your first time deploying to Render, you will need to allow access to your GitHub repositories. Click on the "+ Connect account" link under the GitHub heading, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/f4f60876-99e0-4604-aca2-984cc37fae71)

Next, install Render to your GitHub account, providing access to all of your repositories, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/0fa3e927-945f-4623-b9e5-3880780ea9d7)

Click the blue "Connect" button next to the repo you want to deploy. You can use the search box to filter out the repo you want, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/3818dd28-79ca-4d81-8170-6d486b63ab40)

Give your new Render app a unique name, as shown in the following image. It does not have to match the repo name, but it is useful to do so to keep track of which app is attached to which repo:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/1f9db99b-315a-44f3-a7ff-81a338a8db30)

Render needs to know which steps need to be taken to get your app up and running. In the case of a MERN stack app, we need to run npm install to install all required dependencies and npm build to build compile the front-end of our application. We created a custom script, render-build, that will perform both of these tasks. Scroll to the section "Build Command" and update the field to npm run render-build. Render also needs to know which command to run to start your application. The "Start Command" field will be automatically populated with the start script from your package.json. Confirm that the "Start Command" is correct, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/ede96ce7-28a0-491c-97a9-fc5d715c8d17)

Make sure you leave the free tier selected, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/b35a6852-a2f7-4a50-8192-b1bd7943ab5a)

Next, click the "Create Web Service" button, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/54a7b5db-add4-4d69-8342-00339efefff2)


The next page will log all the actions being taken to set up your server. Once your server goes live, you can use the provided link toward the top of the page to view your live site, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/40566143-bb0d-4690-8ed1-d5484a88b13c)

Clicking the "Environment" link takes you to a page where you can set your environment variables, as shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/02c28d9b-cc20-4daf-bd5b-43dafa57aa37)

Open your MongoDB Atlas dashboard in another browser tab so you don't leave the Render page. Once there, locate the Connect button in your cluster's information and click it. If you're having trouble finding it, refer to the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/dfd44fa8-5b8d-4eb9-b0c8-2e4a90603bb0)

When the connection modal dialog opens, you should see the options shown in the following image:

![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/6b79db26-aea0-440b-a385-7cb6330fcbd0)

Because you want to connect our database to an application, select the first option, "Drivers," under the header "Connect your application." You'll then see something like the following image:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/8380ba95-4242-47fb-90fa-6fba6895bad1)

Here, all you need to do is copy the connection string listed in the second step. So go ahead and click the Copy button.

With the connection string copied, navigate back to your Render application settings.

Click the "Add Environment Variable" button, add a key named MONGODB_URI and paste the value of the connection string.

We need to update the connection string to include our database name, username, and password. The URL connection string should look like the following code:

"mongodb+srv://<username>:<password>@cluster0.5k55w.mongodb.net/<dbname"


By default, MongoDB Atlas will populate your database username and leave off the database name, as shown in the following code:

"mongodb+srv://twoser:<password>@cluster0.dfd4e4s.mongodb.net/?retryWrites=true&w=majority"


Update the string so your password is correct and make sure to add the database name where <dbname> is indicated above, as shown in the following code:

"mongodb+srv://twoser:password1234@cluster0.5k55w.mongodb.net/firstdb?r"

Note Make sure you're using the database user password, and not your MongoDB Atlas account password.

Click the "Save Changes" button to apply the changes, as shown in the following image:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/7511c1b8-a00e-425c-a3cb-c245b8b27709)

Finally, you can click the "Logs" link and use the provided link toward the top of the page to view your live site, as shown in the following image:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/b674bf8e-3779-4fd6-a103-4eab984514e9)



Seeding Your Deployed Database
In order to seed your deployed Render application. We will need to run our seed script to our Atlas database. Typically, our hosting solution would allow us to run a shell command to complete this process, but the Render free tier does not allow for shell access, so we will need a workaround.

Navigate to your Render environment variables and copy the Mongo Atlas connection string, as shown in the following image:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/4136acc1-e9d8-4c48-82b1-2bce6dc3f5ee)



In the root level of your application, create a .env file and add the key of MONGODB_URI with the value of your Atlas database string, as shown in the following image. (Note that placeholders are used in this screenshot for database user, password, and name):


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/1e2e9336-7bab-457f-9cfa-ac0f36ce0b2a)

Change directory into the server folder of your application and install the dotenv package:

"cd server
   npm install dotenv"

We need to enable environment variables to allow us to connect to our deployed database. As the following line the top of the "server/config/connection.js "file:

"require("dotenv").config();"

Change directory back to the root level of your application:

"cd .."

Update the package.json file at the root of your repository so that the seed script directly runs the seed file (this is to ensure the environment variables are processed correctly), as shown in the following example:

""seed": "node server/config/seeds.js","

Run the "npm run seed" command from the root level of your application, as shown in the following image:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/0f4f24d8-1e1d-4d21-a2f4-08b7fc7887d4)



To confirm the data was successfully seeded, click on the "Browse Collections" button on your Mongo Atlas Dashboard. You should see some seeded data in your database, like the following image:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/a828fbac-9b6c-453a-8976-126571edc688)

Finally, be sure to are only connecting to your Mongo Atlas database when necessary, comment out the MONGODB_URI in your .env file:


![image](https://github.com/YuliiaPylypiv/Flight-trackerY/assets/155758070/1533b647-6aeb-409c-a329-5cada62b26a4)



Resources:

Set Up MongoDB Atlas

Render docs on deploying an Express.js app


Deployed application link:
















