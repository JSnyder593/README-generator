// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your project called?','Please describe your app.', 'How is this app installed?', 'How can this app be used?', 'Who contributed to this project?'];



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
init = () => { 
    inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name: "title" 
    }, 
    {
        type: "input",
        message: questions[1],
        name: "description"
    }, 
    {
        type: "input",
        message: questions[2],
        name: "installation"
    }, 
    {
        type: "input",
        message: questions[3],
        name: "use" 
    }, 
    {
        type: "input",
        message: questions[4],
        name: "contributors" 
    }, 
     
]).then((data) => {
    console.log(data)
})

}

// Function call to initialize app
init();
