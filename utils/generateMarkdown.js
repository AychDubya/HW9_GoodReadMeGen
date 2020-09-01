// function to generate markdown for README
function generateMarkdown(answers) {
  return `# Title : ${answers.title}

  # Description : ${answers.description}

  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [COntributing](#Cuntributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  # Installation:
  ${answers.installation}

  # Usage:

  ${answers.usage}

  # License:

  ${answers.license}

  # Contributing:

  ${answers.contributing}

  # Tests:

  ${answers.tests}

  # Questions:

  ${answers.questions}



  

`;
}

module.exports = generateMarkdown;
