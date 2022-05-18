// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Test](#test)
  [Questions](#questions)

  ## Installation
  ${data.installtionInstructions}
  ## Usage
  ${data.usageInformation}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributionGuidelines}
  ## Tests
  ${data.testInstructions}
  ## Questions
  Here is a link to my github profile: [Cam Cole](https://github.com/${data.github})
  If you have any additional questions feel free to shoot me an email at ${data.email}

`;
}

module.exports = generateMarkdown;
