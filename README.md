# AutomationProject
Coded using Cypress with Javascript

Description: I tested the CountbyGender function by, first retrieving two unique users from the random user generator, then including their JSON objects in the request body, and then validating the count by gender function with the response, confirming there is one male and one female

 I tested the CountbyCountry function by,using the same two users from the previous function and then validating the countbycountry function with the response, confirming there is one person from Brazil and one person from Australia

 I was unsure of how to test the CountPasswordComplexity because both of my users had passwords with only alphanumeric characters. The instructions state to test for passwords with non alpha numeric passwords

How to run this code:
1. Download cypress (follow instructions online) // do npm install to have all proper packages
2. In terminal, run this command:

 ./node_modules/.bin/cypress run --spec "cypress/e2e/automation_project.cy.js"


 BUGS:
 1) The instructions state that the Census Toy API service does not require authentication, however I get a 403 response error when I try to access it. This means that the authentication token is missing. I am not sure how to proceed here. I would include a screenshot of the error as well as the 403 in the response using inspector tools. I would include exact steps to reproduce for the dev as well as include a short video if possible. 