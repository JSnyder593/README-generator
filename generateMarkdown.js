// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let license = "https://img.shields.io/badge/license-MIT-blue"

function renderLicenseBadge(license) {
  if (!license) {
    return ""
  }
  else {
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## license'
  ${renderLicenseBadge(license)}

`;
}

module.exports = generateMarkdown;
