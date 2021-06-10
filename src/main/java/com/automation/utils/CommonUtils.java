package com.automation.utils;

import org.openqa.selenium.WebElement;

import static com.automation.utils.WebElementUtils.waitForVisible;

public class CommonUtils {

    public static void clickOnElement(WebElement element) {
        waitForVisible(element);
        element.click();
    }

    public static void sendKeysTo(WebElement element, String text){
        waitForVisible(element);
        element.clear();
        element.sendKeys(text);
    }
}
