![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

# Marvelverse
Marvelverse is a website where you can view Marvel comics, movies, and their details. The Marvel api is used to get the comic book data and I created my own api to get data for the movies. 

![Screenshot 2022-04-28 101630](https://user-images.githubusercontent.com/84540947/165809511-752af1de-c42c-476e-84e7-6a2952aa9734.png)

# Getting Started

If you want to clone the code locally on your machine: You must insert your own .env file into the project. 

The marvel api needs a specific user api key in order to work and this can be obtained by going to https://developer.marvel.com/ and signing up. 

First, install the dependencies: 

```
npm install
```

Add the .env file in the root directory: 

```
REACT_APP_TIMESTAMP=(your timestamp)
REACT_APP_HASH=(md5 hash)
REACT_APP_API_KEY=(your private api key)
```

To start the development server:

```
npm start
```

# Need help with the Marvel api key?
 To get the unique timestamp run this piece of code:
 ````javascript
	const timestamp = new Date().getTime();
	console.log(timestamp);
  ````
  Copy the logged timestamp and paste it in the .env file and then head over to https://www.md5hashgenerator.com/
  
  In md5hashgenerator, paste your logged timestamp in the textarea.
  
  Next, if you have already created an account for the Marvel developer portal, head over to this link https://developer.marvel.com/account to get your private and public keys.
 
  Copy your private key and paste it right after the timestamp in the md5 textarea and then copy and paste your public key right after the private one. 
  The format should be => timestampprivatekeypublickey.
  Hit the generate button to create your unique hash and copy and paste the md5 hash into the .env file. 
  
  Finally, copy and pate your public key in the .env file and you should be all set!
  
  For more information, head over to https://developer.marvel.com/documentation/authorization for more details.




# Features
View comic books for different MCU heros as well as other comics written by Marvel such as Alien, Conan, Star Wara, etc. You can check out all the movies in the MCU and view details for each which include, description, chronology, trailer, and a post-credit scene. The site is mobile responsive and works smoothly on all devices.

# Future Features
I am currently working on a few features that will make the user experience of this site much better. I want the user to be able to view comic book for any Marvel hero/villian they search for. Also, I want to improve my MCU api and add more in-depth information about each film and provide the user with all the data they need. The biggest feature I want to add is a discussion board for users to talk about anything Marvel and create a place for people to share questions or theories they have. 

# Build
This website is built with JavaScript, React, and SCSS. 

# API
- Comics api = https://gateway.marvel.com/v1/public/comics
- Movies api = https://rvel-mcu-api.herokuapp.com/movies 


