# MiroTestAutomation

Web Automation Testing Using Java, Selenium, Cucumber, BDD and Allure reports

WebTestAutomation is a behavior driven development (BDD) approach to write automation test script to test Web application with minimal coding on multi-browser & cross platform
The framework supports reporting with Allure reports & Cucumber reports
# Tools

1) Java 8 or above
2) Maven
3) BDD
4) Cucumber
5) PageObjectModel [POM]
6) ChromeDriver - 90.0.4430.24
7) Jenkins

# Installing
Clone the repo to get a working project

# Writing a test

The cucumber features goes in the features library and should have the ".feature" extension.

# Running test

1) Set the tags in the TestRunner file.
For eg: tags = "@qTest"

2) Go to your project directory from terminal and hit following commands to run on different browser
cd to project path

 mvn clean test -Dbrowser=firefox

or 

 mvn clean test -Dbrowser=chrome

# Built With
Selenium - The web framework to automate browsers
Maven - Dependency Management
Cucumber - Behavior Driven Development (BDD) library
Allure + Cucumber reports - Reporting

# Run Report
Summary Report:
http://localhost:63342/MiroTestAutomation/QTestAutomation/target/cucumber-reporting-html/cucumber-html-reports/feature-overview.html?_ijt=5qvo7gbf1m32mc5mp6usecqqh8

Complete Report:
http://localhost:63342/MiroTestAutomation/QTestAutomation/target/cucumber-reporting-html/cucumber-html-reports/miroSignUp-feature.html?_ijt=ns09occl52s3o75qgrvhcnlu57
