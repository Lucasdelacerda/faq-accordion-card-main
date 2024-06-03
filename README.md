# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
![Design preview for the FAQ accordion card coding challenge](./design/desktop-preview.jpg)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked



### Links

- Solution URL: [Add solution URL here](https://github.com/Lucasdelacerda/faq-accordion-card-main)
- Live Site URL: [Add live site URL here](https://lucasdelacerda.github.io/faq-accordion-card-main/)

## My process
 I started organizing the HTML using 2 sections, one for the images and another to organize the questions, in the questions the unordered list was used to organize them in a single column. In CSS i used absolute position to align the images on top of each other, in the unordered section column was used as flex-direction and display none for the awnsers to use JAVASCRIPT to change it to flex as soon as your question is clicked.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JAVASCRIPT


### What I learned


How to use javascript to change multiple events with a single function that independently changes each description from display none to flex when clicked on the question

```js
questions.forEach(function (question) {
    question.addEventListener('click', function () {

        var rotateArrow = this.getAttribute('id').replace('question', 'arrow');

        document.getElementById(answerId).style.display = 'flex';
        document.getElementById(rotateArrow).style.rotate = '270deg';
```


### Continued development

My focus is to create new ways of making a single function for several tags and not an event for each function



## Author

- Website - [Lucas de Lacerda](https://www.your-site.com)
- Frontend Mentor - [@Lucasdelacerda](https://www.frontendmentor.io/profile/Lucasdelacerda)


## Acknowledgments

Thanks to the website frontendmentor for this challenge where I learn more about front end programming