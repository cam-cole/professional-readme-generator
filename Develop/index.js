// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
        type: 'input',
        name: 'project name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?'
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the contribution guidelines for this project?'
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'What are the test instructions for this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ['Red', 'Blue', 'Green']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
