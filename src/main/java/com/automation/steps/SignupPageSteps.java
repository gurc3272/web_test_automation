package com.automation.steps;

import com.automation.pages.SignupPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignupPageSteps {
    SignupPage signupPage = new SignupPage();

    @When("^User is on Signup page of the miro application$")
    public void verify_user_on_signup_page() throws InterruptedException {
        signupPage.verifyUserIsOnSignUpPage();
    }


    @When("^User sign up with  correct name email and password$")
    public void user_sign_up_with_correct_name_email_and_password() {
        signupPage.signup();

    }

    @When("^User sign up with \"([^\"]*)\" \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_sign_up_with_and(String name, String userid, String password) {
        signupPage.signUpNegativeValue(name, userid, password);

    }

    @Then("^User selects terms and privacy$")
    public void selectTnC() throws InterruptedException {
        signupPage.selectTnC();
    }

    @Then("^User selects agree to receive miro news and update$")
    public void selectPromo() throws InterruptedException {
        signupPage.selectSubscribe();
    }

    @Then("^User verify the \"([^\"]*)\"$")
    public void verifyErrorMessage(String errormessage_expected) {
        signupPage.verifyErrorMessages(errormessage_expected);
    }

    @When("^User click on get started now for signup$")
    public void user_click_on_get_started_now_for_signup() throws Throwable {
        signupPage.selectGetStartedNow();
    }

}
