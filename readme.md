# THE MET: Metropolitan Museum of Art in New York

## Theme selection:

Admiration and passion for art, especially for painting and architecture, determined the choice of theme. To be able to enjoy painteric works of great geniuses of painting, of immortal works on our screens. Fill our pupils with color and beauty 


## API selection: 

Initially the idea was to use an API from a Spanish museum (Museo del Prado, Reina Sofia, thyssen-bornemisza), or from a renowned architect (Antoni Gaudi), but surprisingly, these world-renowned cultural institutions have no open source, not even APIs where scholars, students or any art lover can access 

Luckily, we located the MET API, a free, flexible and easy-to-use code application that met all of our requirements. One of the most important museums in the world, with 150 years of history and extensive backgrounds, in works of painteric art of all stages, authors and countries: https://metmuseum.github.io/ 
 
The unique concept of control of each of the museum's works/pieces, used in the API is the object, its ID. The first filter was made on this concept: https://collectionapi.metmuseum.org/public/collection/v1/objects/202718

Subsequently, the planting was further attached, by geolocation, and the image corresponding to each objectId: https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=Spain&q=painting&hasImages=

 
 ## Application Technology:

Vanilla HTML 

Vanilla CSS, JavaScript 

GitHub pages 

Postman 

React 
 
## What is Appliation 
 
He's a painting finder from the MET's artistic background. Through a search form, the desired country is typed and shows us all the paintings, which the museum of that country has. With the detail of the information of its author, name of the work, date of realization, style used and measurements of the work. that has the museum of that country.  

The painteric work is prioritized, the delight of the vision of the painting, so we use a minimalist aesthetic on the page 

## Installation instructions: 

Initially, with the asincronic function getObjctIdsByRegion, using fetch and the API URL, it handles us requests to the API, which is returning to us, or not, by means of promises, the arguments of the location of the IDs, and the image they have. Once the promise is resolved, it is deserialized into JSON, and the IDs return to us.  

Through another asynchronous function, getPaintingById, we use fetch again and the URL that is returning a promise, the paintings q through your ID, also deserialized in JSON  

Finally through the getPaintingsByRegion function,look for all the paintings by their countries, and by .map, we hope that the promise will list and return all possible paintings, from each of the countries   

With the render function, we display on the screen each of the elements that we have selected and that give information of the painting.  
With a template we clone the attributes of each of the elements individually, with the data and text that we want to display.  

A form is created, the form where the search input was made, and the handleSubmit button that executed the action to validate the data.  

Since the purpose of the application is to facilitate and create positive experiences in our customers, a responsive design has been made to suit any screen size. 

## Difficulties and demand for application.

This application does not meet the minimum requirements of the final project requested. Two APIs were required, and only one has been used. The level of dependencies corresponds to the formation of the first few weeks, far from all the skills and knowledge that I presumably had to have gone back here. I have difficulty in "writing" my wishes, but I am already being able to read the writing, therefore I begin to understand these "languages" and their logic. But like the parable of the hare and turtle, the important thing is to get there, go on. Follow step by step, without pause, after this week