# Coding-Challenge

# Table of Contents
* [Description](#description)
* [Primary Requirements](#primary-requirements)
* [Run the Application](#run-the-application)
* [Dependencies](#dependencies)
* [Takeaway](#takeaway)

## Description
Build a browser-based web application to manage a recipe collection. It should be able to show all recipes a user has created, allow a user to edit or delete old recipes, and create new recipes. It should be able to store the recipes between sessions in the application.

----

## Primary Requirements


### Status
:x: Not Started    
:large_orange_diamond: In Progress    
:white_check_mark: Complete    


|              Requirement         |  <br>Status       | 
|:--------------------------------:|:-----------------:|
|**Add Recipe**                    | :white_check_mark:                   |
|**Edit Recipe**                   | :white_check_mark:                   |
|**Delete Recipe**                 | :white_check_mark:                   |
|**View Recipe Index**             | :white_check_mark:                   |
|**Utilize Local Storage**         | :white_check_mark:                   |
|**Deploy to Netlify**             | :white_check_mark:                   |
|**Submit Deliverables**           | :white_check_mark:                   |
  
----

## Requirements Description

### Add Recipe
Users must be able to add new recipes to the system. These recipes should have a **title, description, ingredient list with an amount of each ingredient, and a list of steps to follow to cook the recipe**.

### Edit Recipe
Users must be able to update their old recipes with new information. Any of the attributes listed in requirement Add Recipe must be editable. **Editing an old recipe should not move it to the top of the recipe index**.

### Delete Recipe
Users must be able to delete their old recipes. **When a user chooses to delete their recipe, the application should ask them to confirm that they want to delete the recipe**.

### View Recipe Index
Users must be able to view a list of all of their recipes in **reverse chronological order** of the time they added the recipe to the application. **Clicking on a recipe should cause the application display the details of the clicked recipe**.

## Other Noteworthy Things

* Any CSS Framework Goes
* No User Login System Required

## Run the Application

To use the application you can run it locally, or visit [Rokkin Recipes](https://stupefied-goldwasser-8f3bb4.netlify.com/)

1. Download the .zip file or clone the project:

    ```
    $ git clone https://github.com/brendanpettis/Coding-Challenge.git
    ```

2. Using the command line, enter the root folder /coding-challenge and install project dependencies by running the command
    
    ```
    $ npm install 
    ``` 

3. After the dependencies have been installed, you should have noticed the node_modules folder appear. Now run the following command:
    
    ```
    $ npm start
    ``` 
    
4. Finally, visit the application @:`http://localhost:3000`.

## Dependencies

* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom)
* [Material-UI](https://material-ui.com/)
* [ReactBootstrap](https://react-bootstrap.github.io/)

## Takeaway

Overall, I believe I was able to successfully meet the basic requirements for this take home coding challenge. It was a lot of fun, and I gained valuable experience playing with React Router, and the new Context API. A major thing I would change in a future build would be to create a single form component that could be reused for both the Add and Edit Pages since they are practically identical. I would also modularize the helper functions and overall form validation, as well as rework the applications composition to make better use of the Context API and further limit duplicate code. Not to mention plain CSS files are on their way out and I should've probably utilized Styled Components. That said, I originally speed built this application with one page, no validation, using modals, and I'm glad I chose to scrap it and learn something new instead. :raised_hands: