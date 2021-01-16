# - Dev Challenge - Node.js -

 

**Challenge Backend - Node.js**

    Backend done in Node.js with express for the routers. 
    The database is made in MySql and the ORM used is Sequelize.
    Authentication is through JWT.


## How to use
  
**`You need to clone the repository, move to the api folder and run "npm install"`**

**`In the public folder of the repository is the database instance, install the database.`**

**`When "npm install" finishes and you have the base installed and started, run "npm run test" to start the API with nodemon.`**


**User Test - Log In**

>    You must log in to get a **TOKEN**
- **email: admin@admin.com** 
- **password: 1admin1** 
> the JWT must be sent through the header with the key: **"authorization"**
> and the token must have the word **"Bearer"** in front
> Most routes **need the token** to access 

## Endpoints

**User**

- **POST - /api.users/SignIn**  - *return JWT* 
- **POST - /api.users/LogIn** - *update JWT*
- **GET - /api.users/detail/: id** - *get user for id. **needs authorization***

**Movies:  needs authorization**
- **GET - /api.movies/** - *all movies* 
- **GET- /api.movies/detail/:id** - *get movie detail by id* 
- **GET - /api.movies /genre/:id** - *get all the movies by genre* 
-  **GET - /api.movies/search?title=** - *get all the movies you are looking for by title* 

**`Example: /api.movies/detail/1`** 
> Movie id: 1


**Series:  needs authorization**
- **GET - /api.series/**  - *all series* 
- **GET- /api.series/detail/:id** - *get serie detail by id* - 
- **GET- /api.series/detail/:id/:season/** -  *get season detail by season number and id serie* - 
- **GET- /api.series/detail/:id/:season/:episode** - *episode detail with director information*
- **GET - /api.series/search?title=** - *get all the series you are looking for by title*

**`Example: /api.series/detail/2/1/1`** 
> Serie id: 1 -  Season number:1 -  Episode number: 1

**Main creator:  needs authorization**
- **POST - /api.create/new/:object** - *create any of the entities *

 **`Example:  /api.create/new/movie/`**
 >  you need to send a POST request with the necessary fields 


## Database entities and form fields

- **User**  
**fields for request body**

>    - name
>    - email 
>    - password
>    
 - **Movie** 
 **fields for request body**

>    - title
>    - awards
>    - duration
>    - releaseDate 
>    - idGenre
>    - idDirector

 - **Serie** 
 **fields for request body**

>    - title
>    - releaseDate 
>    - idGenre

 - **Season** 
 - **fields for request body**

>    - title
>    - releaseDate 
>    - idSerie

 - **Episodes** - there is only one episode per season
 **fields for request body**

>    - title
>    - releaseDate 
>    - idSeason
>    - idDirector

 - **Actor** 
 **fields for request body**

>    - name
>    - lastName
>    - awards

 -  **Director**
 **fields for request body**

>    - name
>    - lastName
>    - awards

  -  **Genre**
 **fields for request body**

>    - name




## EER database diagram

![ingrese la descripción de la imagen aquí](https://i.imgur.com/MhFOzBY.png)

  