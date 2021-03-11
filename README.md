# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Stella Kim **

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/pale-admitted-parent
https://pale-admitted-parent.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Web Responsive and Mobile Responsive

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* Overall reference: https://www.w3schools.com/js/default.asp and 
https://developer.mozilla.org/en-US/docs/Web/JavaScript
* Reference used to help how to generate random pattern: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array]
* Credit for icons: http://www.classicgaming.cc/classics/pac-man/icons

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* A challenge that I encountered while creating this submission was working on the JavaScript components. As Javascript is a language that I learned recently, I found it a bit difficult when trying to work on implementing features such as : speeding up the playback, generating a random pattern, counting guesses, and giving 3 strikes. Initially, I thought that adding these features were pretty straightforward. However I realized that I found it challenging to figure out what function/variables to create and where to place them.

* For example, I struggled with figuring out how to keep track of mistakes a user makes as I wasn't sure how to increment the counter variable and where to place the function. Furthermore, if a user makes 3 mistakes and loses the game, how would I reset the mistake counter? 

* I was able to solve this challenge by writing down a flow chart. Instead of hopping straight to stackoverflow or other online resources, I found it helpful to first approach the challenge by breaking it down to figure out what I needed to do first and then proceed step by step. If there were functions or methods I was not familiar with, I took to online resources such as stackoverflow and w3schools to learn how to approach and implement the code. 
 
* So in the example above, I was able to solve the problem by first creating a global variable to track the number of mistakes by setting the variable to 0. 
In the guess function, I set up a loop such that if the user makes a mistake, the variable will increment by 1 every time. Then, if the variable reaches a value of 3 mistakes, the loseGame function is called to tell the user that game has ended. But, then we have an issue where the counter keeps incrementing even though the game has ended. Thus, we must create a reset function.I then created a reset function such that the variable is set to the initial value of 0. That way, we can call this function to reset when the game has ended. Problem solved!


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* Some questions I had about web development were
* What kind of tech stack would we be working with as web developers? How would we implement these into projects?
* How would we go about connecting both front-end and back-end together? 
* How do we go about testing and debugging?
* How can we make websites more accessible and responsive?
* I find that sometimes while styling projects, a method works for one project but doesn't for others. For example, centering a div for one section using METHOD A works, but sometimes that method doesn't apply for other sections. How do we go about this? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* If I had a few more hours to work on this project, some features that I would add are:
* Implementing different levels of difficulty modes so users can pick easy/medium/hard mode. With this feature, each mode would have different speed levels, different sounds, and images. For example, hard mode would
consist of faster speed between playing cues, shorter playback cue hold sounds, and more buttons.
*  Improve UI and make the website more accessible.Accomodate for those who have hearing loss and those who are color-blind. And also maybe an option for users to select a color palette or change volume.
* Make the website more mobile-friendly such as changing button sizes and making the button pressing more visual, as it can be hard to tell if the button is pressed on mobile view.
* Display the number of strikes left. Since my theme has been "retro-videogame", I would like to incorporate a display similar to displaying how many lives are left. A visual display of 3 hearts or stars, where everytime
a user makes a mistake, the heart/star reduces by 1. 
*  Change the alert message to something more visually appealing and mobile-friendly (ex: using sweetalert)



## License

    Copyright [Stella Kim]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.