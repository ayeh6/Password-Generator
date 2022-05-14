# Password Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

To build a webpage that generates a password based on parameters the user wants.

### User Story

AS AN employee with access to sensitive data  
I WANT to randomly generate a password that meets certain criteria  
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria

GIVEN I need a new, secure password  
WHEN I click the button to generate a password  
THEN I am presented with a series of prompts for password criteria  
WHEN prompted for password criteria  
THEN I select which criteria to include in the password  
WHEN prompted for the length of the password  
THEN I choose a length of at least 8 characters and no more than 128 characters  
WHEN asked for character types to include in the password  
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters  
WHEN I answer each prompt  
THEN my input should be validated and at least one character type should be selected  
WHEN all prompts are answered  
THEN a password is generated that matches the selected criteria  
WHEN the password is generated  
THEN the password is either displayed in an alert or written to the page

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML
- CSS

### What I learned

Biggest thing I learned is that checkbox inputs don't use a .value parameter to get the value, it uses a .checked that returns a boolean if the box is checked or not. Other than that I had to be clever to make a random password based on given user parameters by using multiple arrays combined and having a random index be generated.

### Useful resources

- [Random number generator in Javascript](https://www.w3schools.com/js/js_random.asp)
- [Valid special characters for password](https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm#MCMAD416)

## Author

Andrew Yeh - [LinkedIn](https://www.linkedin.com/in/ayeh6/)
