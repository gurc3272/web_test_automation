package com.automation.steps;

import com.automation.pages.SuccessPage;
import cucumber.api.java.en.Then;

public class SuccessPageSteps {
    SuccessPage homepage = new SuccessPage();

    @Then("^User verify the authentication code screen for success$")
    public void user_verify_the_authentication_code_screen_for_success() throws Throwable {

        homepage.verifySuccessScreen();
    }

}
