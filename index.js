// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = ['What is your full name?', 'What is your GitHub username?', 'What is an email you can be contacted at for questions about your project?', 'What is your project called?','Please describe your project.', 'How is it installed?', 'How do you use it?', 'Who contributed to this project?'];

// Function that initializes the app and creates the README based on user input
init = () => { 
    inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name: "name" 
    },     
    {
        type: "input",
        message: questions[1],
        name: "username" 
    },          
    {
        type: "input",
        message: questions[2],
        name: "email" 
    },          
    {
        type: "input",
        message: questions[3],
        name: "title" 
    }, 
    {
        type: "input",
        message: questions[4],
        name: "description"
    }, 
    {
        type: "input",
        message: questions[5],
        name: "installation"
    }, 
    {
        type: "input",
        message: questions[6],
        name: "use" 
    }, 
    {
        type: "input",
        message: questions[7],
        name: "contributors" 
    }, 
     
]).then((data) => {
    console.log(data)
    const fileName = 'README.md'
    fs.writeFile(fileName, generateMD(data), errorHandle)
    });
}
// Function to generate README
generateMD = (data) => {
    return (
   `#${data.title}

    ## Description
    
    ${data.description}
    
    ## Table of Contents (Optional)
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Badges](#badges)
    - [How to Contribute](#howtocontribute)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.use}    
    
    ## Credits
    
    ${data.contributors}
    
    ## License
    
    MIT License

    Copyright (c) 2022 Jaeger Snyder
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    
    ## Badges
    
    
  
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    
    ## Questions
    My name is ${data.name} and you can find me on GitHub at ${data.username}! Feel free to reach out with any other questions at ${data.email}`
    )    
};

// Error function
const errorHandle = (err) => {
    if (err) {
        throw err;
    }
    console.log("success!")
}
// Function call to initialize app
init();
