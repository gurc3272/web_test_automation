@qTest
Feature: Sign up on Miro

  Scenario: Verify the successful registration on Miro
    Given User is on Signup page of the miro application
    When User sign up with  correct name email and password
    And User selects terms and privacy
    And User selects agree to receive miro news and update
    And User click on get started now for signup
    Then User verify the authentication code screen for success

  Scenario Outline: Verify the negative test on Miro signup
    Given User is on Signup page of the miro application
    When User sign up with "<name>" "<emailId>" and "<password>"
    And User selects terms and privacy
    And User selects agree to receive miro news and update
    And User click on get started now for signup
    Then User verify the "<error_message>"
    Examples:
      | name | emailId           | password          | error_message                                                                     |
      | miro | 123@mail@mail.com | enter_password123 | This doesn’t look like an email address. Please check it for typos and try again. |
      | 1232 | abc@gmail.com     | entewewe123       | Sorry, this email is already registered                                           |
