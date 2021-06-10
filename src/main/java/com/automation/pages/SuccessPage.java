package com.automation.pages;

import com.automation.utils.AssertionUtils;
import com.automation.utils.CommonUtils;
import com.automation.utils.ConfigUtils;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static com.automation.utils.AssertionUtils.*;
import static com.automation.utils.CommonUtils.clickOnElement;
import static com.automation.utils.CommonUtils.sendKeysTo;
import static com.automation.utils.ConfigUtils.getPropertyByKey;
import static com.automation.utils.DriverUtils.getDriver;
import static com.automation.utils.WebElementUtils.createDynamicLocator;
import static com.automation.utils.WebElementUtils.waitForVisible;

public class SuccessPage {
    public SuccessPage() {
        PageFactory.initElements(getDriver(), this);
    }

    @FindBy(id = "code")
    private  WebElement authCode;

    @FindBy(xpath = "//h1[text()=\"Check your email\"]")
    private  WebElement successPage;

    @FindBy(className = "login")
    private WebElement signInBtn;

    @FindBy(className = "account")
    private WebElement userNameText;

    @FindBy(xpath = "//*[@class='account']/span")
    private  WebElement registeredUserName;

    @FindBy(id = "header_logo")
    private  WebElement logoImage;

    @FindBy(id = "search_query_top")
    private  WebElement searchText;

    @FindBy(name = "submit_search")
    private  WebElement searchSubmit;

    @FindBy(className = "product-count")
    private  WebElement productCount;

    @FindBy(xpath = "//button[@type=\"submit\"]")
    private  WebElement submitSignup;

    @FindBy(className = "header_user_info")
    private  WebElement userHeader;

    @FindBy(xpath = "//span[contains(text(),'Order history and details')]")
    private  WebElement orderHistory;

    public void verifyUserOnHomepage() {
        assertPageTitle(getPropertyByKey("homepage.title"));
    }

    public void navigateToLoginPage() {
        clickOnElement(signInBtn);
    }

    public void verifyUserNameAfterLogin() {
         assertEquals(userNameText, userNameText.getText(), getPropertyByKey("loggedin.user"));
    }

    public void verifyUserAfterRegistration(){
        String expectedText = System.getProperty("userdata.bean.firstName") + " " + System.getProperty("userdata.bean.lastName");
        assertEquals(registeredUserName, expectedText);
    }

    public void selectItemFromHOmePage(String itemName) {
        WebElement itemNameElement = createDynamicLocator("//div[@class='product-container']//a[contains(text(),'%s')]", itemName);
        clickOnElement(itemNameElement);
    }

    public void searchItem(String itemName) {
        clickOnElement(searchText);
        sendKeysTo(searchText, itemName);
        clickOnElement(searchSubmit);
    }

    public void verifySearchResult() {
        waitForVisible(productCount);
        assertPresent(productCount);
    }

    public void clicksMyPersonalInfo(){
        waitForVisible(submitSignup);
        clickOnElement(submitSignup);
    }

    public void clickOnHeader(){
        clickOnElement(userHeader);
        clickOnElement(orderHistory);
    }

    public void verifySuccessScreen(){
        waitForVisible(successPage);
        assertPresent(authCode);
    }

}
