#      The MET  :  The Metropolitan Museum of Art in New York 

## Theme selection:  
The great passion and passion for art, painted and architect, has been crucial for the selection of the subject. We wanted to fill the page with color and beauty, of immortal and famous painter works.

## API Selection:
At first we wanted to use the API of a Spanish museum (Museo del Prado, Reina Sofia, Thyssen-Bornemisza), or an architect (Gaudi), but to our surprise, these cultural and universal institutions do not have open source
The MET API was a great meeting for its extensive stock of works of art, the flexiblicity of its open source and ease of use, which they make available to everyone.
the API used: https://metmuseum.github.io/

## What is the application:
Through the data provided by the API, and through a country search button, you can access all the paintings of the requested country, with the image and details that we thought were most important: name of the work, of its author, the date, the technique used and the dimensions of it.

## Technology used:
Vanilla HTML
Vanilla CSS, JavaScript
GitHub Pages
Postman
React

## Installation Instructions:
The queries we request from the APi are made on the criterion of 'objets', which the unique id they use for each specific work. And on the other hand the criteria of 'geoLocation' and 'hasImage' that give meaning to the purpose of the application,
(https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=Spain&q=painting&hasImages=true / https://collectionapi.metmuseum.org/public/collection/v1/objects/202718).

The getObjectsByRegion asynchronous function, through the fetch function and URL address, returns a promise that it must accept or not, and we deserialize it into JSON, and it returns all id by country. We perform the same asynchronous function of getPaitingbyId, also through the fetch function and the URL, it will return a promise, and it will return the id of all what are paintings.
With the getPaintingsbyRegion function through -map, it will litigate us all over the root of the paintings, and we will be devover only those that correspond to each country.
The render function handles an arrow function, after forEach, for each painting will show us the desired attributes, through the cloning of the array
Both in the form function, where we make the form to make the query, and in the handleSubmit event, a function was performed to capitalize on the first letter of the requests, and give a more user-friendly service, since we avoid errors by using majusculas or minuscules in your queries.
Since the applications make sense whenever they facilitate the use and enjoyment by customers, the responsive site has been made, so that you can enjoy the painteric works in the different screen sizes.

## Difficulties and demand for application.
This application does not meet the minimum requirements of the final project requested. Two APIs were required, and only one has been used. The level of dependencies corresponds to the formation of the first few weeks, far from all the skills and knowledge that I presumably had to have gone back here. I have difficulty in "writing" my wishes, but I am already being able to read the writing, therefore I begin to understand these "languages" and their logic. But like the parable of the hare and turtle, the important thing is to get there, go on. Follow step by step, without pause, after this week






