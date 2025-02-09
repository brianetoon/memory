# SBA 316 - The Document Object Model

## Project Summary

The purpose of this project is to demonstrate understanding of the Document Object Model (DOM) in JavaScript. We were allowed to create any application of our choosing as long as it utilized DOM properites, methods and event driven programming in addition to the requirements listed below. I decided to create a Memory which is detailed below in the Appliction Details section.

## Project Requirements

- Cache at least one element using getElementById.
- Cache at least one element using querySelector or querySelectorAll.
- Use the parent-child-sibling relationship to navigate between elements at least once.
- Iterate over a collection of elements to accomplish some task.
- Create at least one element using createElement.
- Use appendChild and/or prepend to add new elements to the DOM.
- Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
- Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText or textContent.
- Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
- Modify at least one attribute of an element in response to user interaction.
- Register at least two different event listeners and create the associated event handler functions.
- Use at least two Browser Object Model (BOM) properties or methods.
- Include at least one from and/or input with HTML attribute validation.
- Include at least one form and/or input with DOM event-based validation.
- Ensure that the program runs without errors.
- Include a README file that contains a description of the application.
- Level of effort displayed in creativity, presentation and user experience.

## Application Details

As mentioned in the Project Summary section, this application is a Memory game. A game where the player is shown eight pairs of matching images for a short period of time after which they are hidden. The player's goal is to find all the matching pairs in the least amount of turns possible. 

The main component of this application is the game board where the randomized set of cards is output to the user interface. A click event listener is applied to the board which responds to user clicks on face-down cards. When a face-down card is clicked it is temporarily stored in a variable and when a second face-down card is clicked, the two cards are compared to see if they are the same. In order to accomplish this there is a name property on each card element that corresponds to the image on the card. If the name property on both selected cards match, the cards remain face up and their `data-matched` attribute is set to `true`. After each successful match, a function runs to check if the player has won by checking the `data-matched` attribute of each card element. If they have won, the user recieves an alert that they have matched all the cards and have the option to start a new game.

**Notes:**

- The randomization technique used for the cards utilizes the JavaScript sort method. Although not truly random, it served the purpose of this game which didn't require true randomness.

## My Approach

**Steps:**

- Create a function that renders a board. Initially the board just rendered 16 boxes to represent what will later be the cards.
- Randomize an array of eight pairs of images.
- Iterate through the randomized array and create a card element for each of the 16 images.
- Append the card elements to the game board and apply a click event listener to the game board.
- Using event delegation, the name attribute of each element could be checked.
- Next the program needs to evaluate whether the two selections match and react accordingly.
- Initially this meant just logging a message to the console whether or not the cards matched.
- At this point the program can update the `data-matched` property of the cards to `true` if they match. If they don't they are simply flipped back face-down by toggling a class called "flipped".
- The next step was to check if the player had won after each successful match and alert the user if they had matched all cards and won the game.
- Here the game is working correctly, however I wanted to add an animation to "flip" the cards over when they are clicked on and when they are turned face-down by toggling the "flipped" class mentioned above.
- The final step for the game functionality was to allow the user to click a button to start a new game.
- To do this I called a function to reset the game variables, remove the old event listener and re-render the game board.

## Deliverables

- GitHub Repository: https://github.com/brianetoon/memory
- Live Project on GitHub Pages: https://brianetoon.github.io/memory/
