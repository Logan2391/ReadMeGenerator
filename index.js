// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("utils");
const generateMarkdown =require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: projectTitle,
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
    },
    {
        type: "input",
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
    {
        type: ,
        name: ,
        message: ,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();