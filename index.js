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
            message:"GitHub link: "
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
      })
}