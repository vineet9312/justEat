# justEat
justEat food order website automation testing
package.jsonfile -- all dependencies related to protractor,cucumber, report generation
cucumberconfig file - managing the connections,browser capabilities, options to select after running the tests
demo.feature file - all the scenarios for the test cases have been defined in this
steps.ts - all step definations related to demo.feature file are present in this 
jsFiles - after transpilation of the code from ts files to js files, having all the related js files
node_modules - whatever changes are done to package.json file are reflected in the core node modules here 
cucumber_report.html -  report generation as per cucumber format

Project Title----
just Eat food order website for Uk test automation

Getting Started-----
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites----
  download node.js
  set node in system variables
  install protractor(npm install -g protractor, webdriver-manager update,webdriver manager start )
  install typescript in the system
  webdriver manager plugins
  IDE such as visualStudio or webstorm is required
  
examples

after installation, 
 we have to write the command from the terminal >> tsc
      this willconvert all the ts(typescript) files into js files
      since protractor automatically compiles the js files, hence we need to do the transpilation
 Then,we give the command as protractor JSFiles/cucumberconfig.js                  
This will run all the tests step by step and finally will generate a report.
The report will tell whether the test scenarios have been passed or failed.
