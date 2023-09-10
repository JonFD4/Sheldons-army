# Rock Paper Scissors Lizard and Spock.
## Project DESCRIPTION:
Scenario: A social club (The Sheldon Cooper's of the world) want a simple website that invites people to join them. Aside from a website that represents them and their interest on astrophysics, they want to have a fun simple game.

The idea from this game is inspired from the Big Bang theory tv show and for that it is targeted towards individuals interested in the show.
Especially, those who are a fan of Sheldon Cooper, the originator of this game. 

The game is a modification of the original rock, paper, scissors. it includes lizard and spock, a character from the start trek franchise. 
therefore, the game aims to draw people interested in big bang theory, Sheldon Cooper and other characters, and Star Trek.

### Deployment.

The website was deployed in github. The live version can be found at [link to live website](https://jonfd4.github.io/projectportfolio2.1/).

To deploy on github
1. Sign in to github and find the right repository.
2. Click on settings and then pages.
3. Under build and deployment, make sure the source: "Deploy from a branch" and Branch: main - another dropdown will I appear beside this; make sure the selected item is file/root.
4. Click save to beginning thebuilding process. When the page is refreshed the link to the live deployment website will available at the top.

### Rules of games.

The game is a zero-sum game meant for settling disputees. it is simple to play and so the rules are easy to follow.

1. Rock crushes Lizard
2. Lizard poisons Spock
3. Spock smashes Scissors
4. Scissors decapitate Lizard
5. Lizard eats Paper
6. Paper disproves Spock
7. Spock vaporizes Rock
8. Rock crushes Scissors

## Overview
The project involved building a rock, paper, scissors, lizard, spock game using HTML, CSS and JavaScript. The player is presented with 5 options they can choose from. The choice will be compared to the computer's automated selection of the same choices as the user. the result will be dispalyed on the scoreboard and compared to decide who wins. 

## Product
![AmIResponsive-derived image of  index page](readmeimages/AmIresponsive-Index.png)
* The responsiveness of index page tested on amiresponsive website 
  
  ![AmIResponsive-derived image of  game page](readmeimages/AmiResponsive-gamepage.png)
* The responsivenes of game page tested on amiresponsive website
  
## Development Process

To develop the game, the following steps were followed:

### Defining  Project Goal (UX)
 *What would user want?*
- to be able feel goood and be excited about website.
- to be able to immediately start playing the game
- to have clear and concise information about progress of game and final results.
- to be able to track scores

*What are the developers goals*
-  a project that test their understanding of javascript and development of game logic.
- a site that vistors can be excited about and one that is easily navigable
- a game and a site that is fun, niche and interest-focused.
- a very simple interface that is responsive.
- the project should represent the target audience interest as well as be inspired by the theme of the show.

#### Mind map and lo-fi development
![mind map of website developed using](readmeimages/mindmap.png)
*Developed using lucidsparks*

![lo-fi of index.html ](readmeimages/lo-fi-Index.png)
*Developed using rp.mockplus. There images for all lo-fi are not on here because they are a lot, hence the rest are stored in the readmeimages folder in the [lo-fi folder](readmeimages/lo-fi-prototypes).*

*The files where developed with consideration to responsiveness. Notably, this is a mock up  and so not all design ideas where implemented in the actual product.*

### Tools used in creating website

 **Planning:** 
The requirements and features of the game were defined, including understanding the rules of Rock Paper Scissors Spock Lizard and how the game mechanics should work.
Mind maps and lo-fi mock ups where used in design what the webisye could potentially look like. The 
The game is implemented using HTML, CSS, and JavaScript.

**HTML Structure:** The HTML structure was created, including the necessary elements like buttons, scoreboards, and game result display.

**CSS Styling:** CSS was utilized to add styles and make the game visually appealing. The layout, colors, fonts, and animations were implemented to enhance the user experience.

 **JavaScript Logic:** The game logic was implemented using JavaScript. This included functions to handle user clicks, generate random computer moves, determine the winner of each round, and update the score. Javascript was also used in implement personalisation featurs such as prompting the user's name.

 **Testing and Debugging:** The game was thoroughly tested for different scenarios and any bugs or errors were identified and fixed. This involved using browser developer tools for debugging purposes.

 **Validation:** The code was reviewed to ensure it follows best practices and is free of syntax errors. Accessibility considerations were also taken into account to make the game usable by all users.

## Features 
### Index page features
![images of headers ](readmeimages/header-navbar-responsive.png)
- It contains the header which shows the logo, a blue rocket with Sheldon's army underneath, and the other side is the home, about and follow us(leads to the footer).
  
-The header was designed to be responsive so that at screen widths below 800 it becomes a menu button which when clicked on produces a drop down of items.

 ![images of CTA buttons ](readmeimages/CTAbuttons1.png)
The CTA buttons direct user to the the game area and the rules section.
They are responsive and when sreen-width is smaller will transition into a column whereby click rules button will be underneath the click to play.

 ![images of rules page ](readmeimages/Rules-page.png)
This page contains the rules of the game as well as a simple footer with social media icons.

### Game page features
![image of Game page ](readmeimages/Gamepage.png)

The Rock Paper Scissors Spock Lizard game includes the following features:

1. **Prompt user's name :** for a personalised touch, prompt feature has been added to take the user's name.
2.  **Buttons:** Buttons for the player to select their move (Rock, Paper, Scissors, Spock, or Lizard).

3. **Score Display:** The current scores of the player and computer are displayed. Additionally the computer choices ae shown underneath the score.

4. **Game Result:** After each round, the result is displayed, including who won or if it was a tie and final result are displayed.
   
6. The number of moves left is also dispalyed

7. **Reset Option:** A reset button is available to restart the game and reset the scores.
   - The reset button(play again) on widescreen sits beside the game board, underneath the score board. However, it appears above the gameboard when screen size is reduced. This iis done by create two buttons, similar function and using display:none property on under the unique attributes in media queries.

8. There is a home button icon to send user back to the home page.
    
## Evaluating responsiveness and browser compatibility
 **Browser Compatibility:** The game was tested in multiple browsers (e.g., Chrome, Safari) to ensure cross-browser compatibility.
 Further testing was done on responsiveness using iphone XR to test display of all components of website.
 ![index page on iphone](readmeimages/IndexResponsePage1.jpeg)
 
  ![index page on iphone](readmeimages/IndexResponsivePage2.jpeg)
  
 ![Game page on iphone](readmeimages/GameResponsivePage1.jpeg)
  
  ![Game page on iphone](readmeimages/GameResponsivepage2.jpeg)
  
These images clarify the responsiveness and browser compatibility that the website has with safari.

## Validation and Debugging

During development, the code was validated and tested using the following methods:

1. **Syntax Validation:** HTML, CSS, and JavaScript code were validated using validators to identify any syntax errors or invalid code.

JavaScript validation was done using devtools and console.log to determine output of code.
  ![image of home page validation](readmeimages/index-html-validation.png)
*Image of home page validation *

   ![image of Game page validation](readmeimages/Rps-html-validation.png)
*Image of home game validation: There was a lot of trailing slash errors which were not dealt due to their lack of impact on the web page.*

  ![image of CSS  validation](readmeimages/Jigsaw-validation.png)
*Image of CSS validation: The errors shown were just bad practice code writing and were fixed immediately*
  
2. **Debugging:** When issues or bugs were discovered, the browser's developer tools were utilized to find error messages, inspect variables, and trace the code to identify and fix the bugs.

3. **User Testing:** The game was shared with potential users, and their feedback was collected to identify any issues or suggestions for improvement.
   
5. **Accessibility** There was great consideration for accessibility. Lighthouse analysis was carried out through out development processs to test accessibility in terms of contrast, readability, screen-reader friendliness.

    **lighthouse analysis for desktop**
   ![Home page lighthouse analysis](readmeimages/lighthouse-index.png)
   *Home page lighthouse analysis*
   
      ![Game page lighthouse analysis](readmeimages/lighthouse-gamepage.png)
   *Game page lighthouse analysis*


     **lighthouse analysis for Mobile**
   ![mobile-Home page lighthouse analysis](readmeimages/mobile-homepage-lighthouse.png)
   *mobile-Home page lighthouse analysis*
     
      ![mobile-game page lighthouse analysis](readmeimages/gamepage-mobile-lighthouse.png)
   *Mobile- game page lighthouse analysis*

   
By following these steps, the Rock Paper Scissors Spock Lizard game was successfully developed, ensuring its functionality, responsiveness, and user-friendliness.

## Isues and Bugs

* CSS issues: The home page menu button is not fixed to position and keeps toggling when clicked on. The movement affects the layout of the page causing to the image move.
* The menu button is automatically open when page is loaded.
  
* The game page layout is not very suitable for mobile especially when screen width is below 400px.
  -The icon of sheldon image is not fully displayed.
  
## Credits and Acknowledgement
### Images Used
[Image of Sheldon with spock hands in rulkes page](https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Big-Bang-Theory-Sheldon-Cooper-3083760.jpg?r=1622696742330)

logo: Created in BrandCrowd

 [Cast animation](https://mir-s3-cdn-cf.behance.net/project_modules/1400/51fc1470145071.5e8e0e31ce2db.jpg)
 
[Rules page background](https://wallpapers.com/wallpapers/heavy-metal-star-trek-m99hilsk4b3bh6jd.html)

[Sheldon icon image in game page](https://res.cloudinary.com/teepublic/image/private/s--lFIbc6Q0--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1501546939/production/designs/1780163_1.jpg)

[time-warp image](https://d.newsweek.com/en/full/1423504/time-warp.jpg)

[spaceship-image](https://media.istockphoto.com/vectors/spacecraft-cabin-with-astronauts-behind-the-control-panel-vector-id1067829600?k=6&m=1067829600&s=612x612&w=0&h=-jb3qxvXLJG4KMuuu0_JN92iu0Xh2QfyksRwqrwlk_A= )

### Tutorials watched and referenced in game development
[Inspiration for game button structure](https://youtu.be/jaVNP3nIAv0)

[Understanding logic and structuring code](https://www.youtube.com/watch?v=1yS-JV4fWqY&ab_channel=WebDevSimplified)

### Acknowledgement 
* I would like to thank the tutors at code institute for their support and patience in answering my questions and assisting me with finding solutions to coding problems.
* I would also like to thank my mentor, Dick Vlaanderen, for his support and assistance during this project. My gratitude for his aid in helping me sort out and structure my code.
