// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines for this project?'
    },
    {
        type: 'input',
        name: 'testInstructions',
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
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => 
        err ? console.log(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const filename = `${data.title
            .toLowerCase()
            .split(' ')
            .join('')}.md`;

            writeToFile(filename, generateMarkdown(data));
        });
}

// Function call to initialize app
init();
