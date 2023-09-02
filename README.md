# Property Finder - Cypress - Cucumber 

### Test Execution Results in video can be found [here](./cypress//videos//commercial.feature.mp4)
### Test HTML Report can be found [here](https://sumbal-malik.github.io/property-finder/)
### Test Summary Report can be found [here](./test-summary-report.pdf)
### How to execute the test? 

1. Clone the repository to local machine via `git clone https://github.com/sumbal-malik/property-finder`
2. Open the terminal in the root directory of the project and run `npm install`, to install the dependencies for the project. 
3. Start the project:
   - In Browser:
      -  Run `npm run start` to start the project and executing test cases in GUI browser and click on <b> commercial.features</b> file to start the test. 
   - In headless terminal:
       - Run `npm run start:headless` to start the project and executing test cases in terminal . 
4. Generate HTML Report:
   - Run `npm run generate:report` to generate the report in html. Generated report will be found under folder <i>`cypress/cucumber-reports/html`</i>
5. Deploy the html report to github pages:
   - Run `npm run deploy` to deploy the project to github via [Github-Pages](https://pages.github.com/)
   - Current repository deployment url can be found [here](https://sumbal-malik.github.io/property-finder/).