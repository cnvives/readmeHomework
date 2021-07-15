var inquirer = require("inquirer");
var fs = require("fs")

init()

function init(){
      inquirer.prompt([
          {
              type: "input",
              name:"projectname",
              message:"Enter project name?"
          },
          {
            type: "input",
            name:"description",
            message:"Description:"
        },
        {
            type: "input",
            name:"contributers",
            message:"Enter names of contributers:"
        },
        {
            type: "input",
            name:"Installationinstructions",
            message:"Instructions:"
        },
        {
            type: "input",
            name:"Testingrequirements",
            message:"Testing requirements:"
        },
        {
            type: "input",
            name:"Usage",
            message:"Usage restrictions:"
        },
        {
            type: "list",
            name:"License",
            message:"Choose license",
            choices:['MIT', 'IFC', 'Apache', 'ETL', 'none']
        },
        {
            type: "input",
            name:"gitHub",
            message:"GitHub username: "
        },
        {
            type: "input",
            name:"contact",
            message:"Contact info"
        },
        // {
        //     type: "input",
        //     name:"projectname",
        //     message:"Enter project name?"
        // },
      ]).then(function(response){
          console.log(response)
var fileContent = `
# ${response.projectname}
-----------------------------
## _Description_
${response.description}

### Table of Contents
* [License](#License)
* [Contributors](#Contribution)
* [Installation Instructions](#Installation)
* [Testing Requirements](#Testing)
* [Usage](#Usage)
* [GitHub](#GitHub)
* [Contact](#Contact)

#### License
![GitHub license](https://img.shields.io/badge/license-${response.License}-blue.svg)

#### Contributions from:
${response.contributers}

#### Installation Instructions:
${response.Installationinstructions}

#### Testing Requirements:
${response.Testingrequirements}

#### Usage: 
${response.Usage}

#### GitHub:
[GitHub profile](https://github.com/${response.gitHub})
${response.gitHub}

#### Contact: 
If you have any questions feel free to contact me at
${response.contact}
`

fs.writeFileSync("README.md",fileContent,function(err){
    if (err) throw err;
    console.log("Markdown generated")
})
console.log(fileContent)
      })
}