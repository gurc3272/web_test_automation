$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("miroSignUp.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up on Miro",
  "description": "",
  "id": "sign-up-on-miro",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@qTest"
    }
  ]
});
formatter.before({
  "duration": 7276181507,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the successful registration on Miro",
  "description": "",
  "id": "sign-up-on-miro;verify-the-successful-registration-on-miro",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Signup page of the miro application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sign up with  correct name email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects terms and privacy",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selects agree to receive miro news and update",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on get started now for signup",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verify the authentication code screen for success",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupPageSteps.verify_user_on_signup_page()"
});
formatter.result({
  "duration": 183454822,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.user_sign_up_with_correct_name_email_and_password()"
});
formatter.result({
  "duration": 240520962,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.selectTnC()"
});
formatter.result({
  "duration": 276653382,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.selectPromo()"
});
formatter.result({
  "duration": 250080193,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.user_click_on_get_started_now_for_signup()"
});
formatter.result({
  "duration": 2396575089,
  "status": "passed"
});
formatter.match({
  "location": "SuccessPageSteps.user_verify_the_authentication_code_screen_for_success()"
});
formatter.result({
  "duration": 71493844,
  "status": "passed"
});
formatter.after({
  "duration": 704532732,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the negative test on Miro signup",
  "description": "",
  "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on Signup page of the miro application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User sign up with \"\u003cname\u003e\" \"\u003cemailId\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User selects terms and privacy",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects agree to receive miro news and update",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on get started now for signup",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verify the \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup;",
  "rows": [
    {
      "cells": [
        "name",
        "emailId",
        "password",
        "error_message"
      ],
      "line": 20,
      "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup;;1"
    },
    {
      "cells": [
        "miro",
        "123@mail@mail.com",
        "enter_password123",
        "This doesn’t look like an email address. Please check it for typos and try again."
      ],
      "line": 21,
      "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup;;2"
    },
    {
      "cells": [
        "1232",
        "abc@gmail.com",
        "entewewe123",
        "Sorry, this email is already registered"
      ],
      "line": 22,
      "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7101984856,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the negative test on Miro signup",
  "description": "",
  "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@qTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on Signup page of the miro application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User sign up with \"miro\" \"123@mail@mail.com\" and \"enter_password123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User selects terms and privacy",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects agree to receive miro news and update",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on get started now for signup",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verify the \"This doesn’t look like an email address. Please check it for typos and try again.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignupPageSteps.verify_user_on_signup_page()"
});
formatter.result({
  "duration": 80939139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "miro",
      "offset": 19
    },
    {
      "val": "123@mail@mail.com",
      "offset": 26
    },
    {
      "val": "enter_password123",
      "offset": 50
    }
  ],
  "location": "SignupPageSteps.user_sign_up_with_and(String,String,String)"
});
formatter.result({
  "duration": 277408011,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.selectTnC()"
});
formatter.result({
  "duration": 265946323,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.selectPromo()"
});
formatter.result({
  "duration": 249699047,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.user_click_on_get_started_now_for_signup()"
});
formatter.result({
  "duration": 3576010528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This doesn’t look like an email address. Please check it for typos and try again.",
      "offset": 17
    }
  ],
  "location": "SignupPageSteps.verifyErrorMessage(String)"
});
formatter.result({
  "duration": 38042045,
  "status": "passed"
});
formatter.after({
  "duration": 598270386,
  "status": "passed"
});
formatter.before({
  "duration": 7096236542,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the negative test on Miro signup",
  "description": "",
  "id": "sign-up-on-miro;verify-the-negative-test-on-miro-signup;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@qTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on Signup page of the miro application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User sign up with \"1232\" \"abc@gmail.com\" and \"entewewe123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User selects terms and privacy",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects agree to receive miro news and update",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on get started now for signup",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verify the \"Sorry, this email is already registered\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignupPageSteps.verify_user_on_signup_page()"
});
formatter.result({
  "duration": 74349946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1232",
      "offset": 19
    },
    {
      "val": "abc@gmail.com",
      "offset": 26
    },
    {
      "val": "entewewe123",
      "offset": 46
    }
  ],
  "location": "SignupPageSteps.user_sign_up_with_and(String,String,String)"
});
formatter.result({
  "duration": 252004929,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.selectTnC()"
});
formatter.result({
  "duration": 262659324,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.selectPromo()"
});
formatter.result({
  "duration": 250201142,
  "status": "passed"
});
formatter.match({
  "location": "SignupPageSteps.user_click_on_get_started_now_for_signup()"
});
formatter.result({
  "duration": 3118773302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, this email is already registered",
      "offset": 17
    }
  ],
  "location": "SignupPageSteps.verifyErrorMessage(String)"
});
formatter.result({
  "duration": 34188665,
  "status": "passed"
});
formatter.after({
  "duration": 613351655,
  "status": "passed"
});
});