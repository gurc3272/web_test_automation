package com.automation.pages;

import com.automation.data.UserDataBean;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static com.automation.utils.AssertionUtils.assertEquals;
import static com.automation.utils.AssertionUtils.assertPresent;
import static com.automation.utils.CommonUtils.clickOnElement;
import static com.automation.utils.CommonUtils.sendKeysTo;
import static com.automation.utils.ConfigUtils.getPropertyByKey;
import static com.automation.utils.DriverUtils.getDriver;

public class SignupPage {
    public SignupPage() {
        PageFactory.initElements(getDriver(), this);
    }

    @FindBy(id = "SubmitCreate")
    private WebElement createBtn;
    @FindBy(xpath = "//h1[text()=\"Get started free today\"]")
    private WebElement signUpPage;
    @FindBy(id = "name")
    private WebElement enterName;
    @FindBy(id = "email")
    private WebElement enterEmailAddress;
    @FindBy(id = "password")
    private WebElement enterpassword;
    @FindBy(xpath = "//button[@type=\"submit\"]")
    private WebElement submitSignup;
    @FindBy(xpath = "//div[contains(@class, \"error-item\")][1]")
    private WebElement errormessage_actual;

    @FindBy(xpath = "//label[@for=\"signup-terms\"]")
    private WebElement termsnPrivacy;

    @FindBy(xpath = "//label[@for=\"signup-subscribe\"]")
    private WebElement subscribe;
    public void verifyUserIsOnSignUpPage() {

        assertPresent(signUpPage);
    }


    public void signup() {

        UserDataBean userdatabean = getRandomUserData();
        sendKeysTo(enterName, userdatabean.getFirstName());
        sendKeysTo(enterEmailAddress,userdatabean.getUserEmail());
        sendKeysTo(enterpassword, userdatabean.getPassword());
    }

    public void signUpNegativeValue(String name, String userid, String password) {
        sendKeysTo(enterName, name);
        sendKeysTo(enterEmailAddress,userid);
        sendKeysTo(enterpassword, password);
    }

    public void selectTnC() {
        clickOnElement(termsnPrivacy);
    }

    public void selectSubscribe() {
        clickOnElement(subscribe);
    }

    public void selectGetStartedNow() {
        clickOnElement(submitSignup);
    }

    public UserDataBean getRandomUserData() {
        UserDataBean userdatabean = new UserDataBean();
        userdatabean.generateRandomUserData();
        return userdatabean;
    }

    public void verifyErrorMessages(String errormessage_expected) {
        assertEquals(errormessage_actual,errormessage_expected);
    }
}
