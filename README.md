 # Project 2
 
## JavaScript Essentials Project

* This website shows a basic example of an interactive game, a quiz with 10 film and entertainment qeustions.
* This project is designed as a training excersize, not for professional use or example.  
[Project2 view](URL '')

---

# Table of contents

- [UX](#UX)
   - [Site creator aim](#Site-creator-aim)
   - [User aim](#User-aim)
   - [Site structure](#Site-structure)
   - [Surface Design](#Surface-Design)
- [Features](#Features)
- [Technology](#Technology)
- [Testing](#Testing)
   - [Functionality Testing](#Functionality-Testing)
   - [Compatibility Testing](#Compatibility-Testing)
   - [Performance Testing](#Performance-Testing)
   - [Code Validation](#Code-Validation)
   - [Development Issues](#Development-Issues)
- [Deployment](#Deployment)
- [Credits](#Credits)
- [Screenshots](#Screenshots)

# UX

## Aim of website

The websites goal is to present an easily understandable quiz to the user accompanied with a brief description of the rules. The layout is designed to be as simplistic as possible for ease of use.

## Site creator aim

The aim is to consolidate my education on JavaScript, showcasing functionality, interactivity, proper syntax and code structure etc.

## User aim

The user should be able to navigate the site with great ease, understand the aim of the game aswell as how to play. If the user came away from the site understanding the rules and how well they scored I would consider the site a success.

## Site structure

The site consists of one page, an explanation of the rules of the game, followed by the game area (having a true or false button for each question, a start game button and a next question button) finally, at the bottom of the page there is a score-box letting the user know how many questions they have answered correctly at every point in the game.

## Surface Design

The reason I chose the colours outlined below are due to their high contrast, making the different site components easy to see and their eye catching nature as 'aqua' is quite a bold colour. I chose these fonts because I personally liked them and had used them before. I believe that this layout would be the simplest and easiest to follow, displaying everything to the user at once seemed to leave no room for error in the site's usability or understanding.

### colours

* Background colour: aqua
* Score-box and Question Area: azure
* Font colour: black

### fonts

* Cormorant SC
* Noto Serif

### images

* No images were used for this site

---

# Features

## Game Title and Rules

The page has a clear Title indicating what the site is about, with clear instructions immediately below outlining how to navigate through the game features and the game's explicit purpose/rules.

## Game Area

The game area consists of 4 main features: the question area, the true or false question buttons, the start game button and the next question button. The start game button displays the first question provided in my questions array while the next question button loops through the next question one by one, all questions are displayed in the question area and are each checked whether they are true or false depending on which button the user decides to select.

## Score - Box

As each question answer is selected for every correct entry the score will be incremented by one, until every question has been presented to and answered by the user.

---

# Technologies used

## HTML 5

* The programming language used to structure the game's page.

## CSS 3

* The programming language used to style the game's page.

## JavaScript

* the programming language used to build the game's functioning components.

## Google fonts

* The site that the fonts for this website were taken from.

## Git-hub

* The software hosting platform I used for this project.

## Git-pod

* The development hosting platform I used for this Project.

---

# Testing

Test | Pass | Fail
---|---|---
is site structure maintained across different screen sizes | X | 
if score counter accurately records correct answers | X | 
if questions repeat or break their structure at any point | X | 
if the questions display the correct value | X | 
if the quiz properly resets for multiple attempts | X | 
if the code throws any errors | X | 

* I used chrome developer tools throughout the project to test the site's responsivity.

## Code Validation

* I ensured that the HTML code was validated using the [w3c code validator](https://validator.w3.org/)
* I ensured that the CSS code was validated using the [jigsaw validator](https://jigsaw.w3.org/css-validator/)
* I ensured that the JS code was validated using [jshint](https://jshint.com/)

## Development Issues

* I initially struggled with how to structure my JavaScript properly but my mentor was able to help me overcome this issue.

* How to loop through the questions array one by one was a particulalry tricky function to write as the questions had to be displayed individualy I could not simply use a for loop to go through them, so another method had to be employed, but aside from this there were little to no development issues.

---

# Deployment

The project was deployed on GitHub Pages. I used Gitpod as a development environment and also commited all of the changes to git version control system. I used the push command in Gitpod to save changes to GitHub.

### The deployment process

* Log into Git-hub and select my chosen repository to deploy.
* Go to settings and select Git-hub pages on the left hand side of the page.
* From the source select branch and then main branch.
* Finally save and then the website was deployed.

### Cloning

* Cloning a GitHub repository creates a local copy of the remote repo. This allows you to make all of your edits 
  locally rather than directly in the source files of the origin repo. You first need to allow Git to be used from the command line, the next thing you have to do is decide where to store the repo on your local machine, after that, open your web browser and enter the GitHub repository’s URL. Then on the right side of the screen, below the 'Contributors' tab, you will see a green button that says 'Clone or Download', click that. In the window that appears, select the 'Clipboard' icon to copy the repo URL to your clipboard. Open the Command Prompt on whichever terminal you are using on your computer. In the terminal, navigate to the location in which you would like to store the repo. You can do so by typing the following command: '$ cd <directory>'. Now, with the repo URL still copied to your clipboard, you can clone the repo. Enter the following command: '$ git clone <repo-url>' and everything should be completed after that step.


### Forking

* A fork is a new repository that shares code and visibility settings with the original 'upstream' repository, you 
  can use forks to propose changes related to fixing a bug. When creating your public repository from a fork of someone's project, make sure to include a license file that determines how you want your project to be shared with others. You need to use Git on the command line, navigate to the 'octocat/Spoon-Knife' repository then, in the top-right corner of the page, click Fork. Select an owner for the forked repository keep in mind that by default, forks are named the same as their upstream repositories. You can change the name of the fork to distinguish it further and add a description of your fork if you want. Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. By default, only the default branch is copied. Finally Click 'Create fork' and the repo should then be successfully forked.

---

# Credits

## fonts

* [google fonts](https://fonts.google.com/) were used for the fonts on this project.

## Template

* I used the code institute [student template](https://github.com/Code-Institute-Org/gitpod-full-template) for this project.

## Code

* For help with my code I used [W3 schools](https://www.w3schools.com/).

---

# Screenshots

[Screenshots of page](https://ui.dev/amiresponsive?url=https://twilltp.github.io/JS-practice/) demonstrating site responsivity.

add screenshots
