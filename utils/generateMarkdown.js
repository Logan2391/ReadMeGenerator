// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![license:${license}](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'Apache-2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'GPL-3.0') {
    return `https://creativecommons.org/licenses/by-nd/4.0`
  }
  if (license === 'BSD-2-Clause') {
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
  if (license === 'BSD-3-Clause') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. Click the license button at the top to learn more about what this means.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}
 ## Description
  ${responses.description}

  ${renderLicenseBadge(responses.licenses)}

 ## Table of Contents 
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributions](#contributions)
 - [Tests](#tests)
 - [License](#license)
 - [Questions](#questions)
 
  ## Installation
  ${responses.installationInstructions}

  ## Usage
  ${responses.usageInfo}

  ## Contributions
  ${responses.contributions}

  ## Tests
  ${responses.test}

  ${renderLicenseSection(responses.licenses)}

  ## Questions
  Find me on GitHub at: [${responses.username}](https://github.com/${responses.username})<br>
  Email me with questions regarding this application at: ${responses.email}

`;
}

module.exports = generateMarkdown;
