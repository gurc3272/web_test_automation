package com.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static com.automation.utils.AssertionUtils.*;
import static com.automation.utils.DriverUtils.getDriver;
import static com.automation.utils.WebElementUtils.waitForVisible;

public class SuccessPage {
    public SuccessPage() {
        PageFactory.initElements(getDriver(), this);
    }

    @FindBy(id = "code")
    private WebElement authCode;

    @FindBy(xpath = "//h1[text()=\"Check your email\"]")
    private WebElement successPage;

    public void verifySuccessScreen() {
        waitForVisible(successPage);
        assertPresent(authCode);
    }

}
