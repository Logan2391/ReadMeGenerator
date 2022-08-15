// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Write your instructiuons for installation if any.",
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Write information for your applications intended usage.",
    },
    {
        type: "input",
        name: "contributions",
        message: "Who were the contributors to your project?",
    },
    {
        type: "input",
        name: "test",
        message: "If any, please provide any written tests for your application and how to run them.",
    },
    {
        type: "list",
        name: "licenses",
        message: "What license would you like to include with your project?",
        choices: ["MIT","Apache-2.0","GPL-3.0","BSD-2-Clause","BSD-3-Clause","BSD-4-Clause",],
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide an email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions); 
}

// Function call to initialize app
init();