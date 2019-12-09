Guc Parking spots app will serve the GUC students for finding parking spots faster. It will keep track of the free and occupied spots of the GUC parking. Now students will have to check the application before entering the parking area. Moreover, for the students who already found a free spot, they will have to mark their spot on the application for them to remember and for the system to calculate the number of spots available.

## dependencies

{
node.js
express
react
@material-ui
react-dom
react-router-dom
google-maps-react
}

In order to run the backend; we used (npm i) to get node.js and express packages.
As for the front-end, we used (npm i) in client directory to get react, material/ui , react-dom and react-router-dom.
For the third part API, we used google-maps-react

## config

GoogleApiWrapper{
apiKey:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
}
mongoURI: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,

For the security purpose, we kept the config file in the (.gitignore) file so no one will be allowed to access it.
The API key and mongoURI, were both kept in the config file.

## Docker

docker build -t gucparking . // to build an image from a Dockerfile
docker run -p 5000:5000 gucparking //Run a command in a new container

## Docker-Compose

docker-compose up //to link the backend with the frontend and run them together

## Live-Demo
http://acml-app.herokuapp.com/
