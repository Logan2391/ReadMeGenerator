// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(writeToFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
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
        choices: ["MIT", "Apache_2.0", "GPL_3.0", "BSD_2--Clause", "BSD_3--Clause",],
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(error);
        }
        console.log("Your README is being created!");
    })
 }

// TODO: Create a function to initialize app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        console.log(responses);
        const createContent = generateMarkdown(responses);
        await writeFileAsync("./utils/SampleREADME.md", createContent);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();