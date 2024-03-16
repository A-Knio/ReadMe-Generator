function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}


function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `- [License](#license)`;
}


function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} license.`;
}


function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;