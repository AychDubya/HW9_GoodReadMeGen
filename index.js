var inquirer = require("inquirer")
var fs = require("fs")
var generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [

    {
        type:"input",
        message: "What is the title of your project",
        name:"title"
    },
    {
        type:"input",
        message: "What's your name?",
        name:"myName"
    },
    {
        type:"input",
        message: "Describe your project?",
        name:"description"
    },
    {
        type:"input",
        message: "Installation instructions?",
        name:"installation"
    },
    {
        type:"input",
        message: "What is the usage of this app?",
        name:"Usage"
    },
    {
        type:"input",
        message: "What is this apps license?",
        name:"license"
    },
    {
        type:"input",
        message: "How can anyone contribute to this project?",
        name:"contributing"
    },
    {
        type:"input",
        message: "Are there any tests for this project?",
        name:"tests"
    },
    {
        type:"input",
        message: "How can people ask questions about your project?",
        name:"questions"
    }







];

// function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, function(err){
        if(err){
            return console.log(err);
            
        }
        console.log("done");
        
    })

}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        writeToFile("readMe.md", generateMarkdown(answers))
    })

}

// function call to initialize program
init();
