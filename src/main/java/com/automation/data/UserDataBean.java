package com.automation.data;

import org.apache.commons.lang.RandomStringUtils;

public class UserDataBean {
    String userEmail;
    String firstName;
    String password;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



    public void generateRandomUserData() {
        userEmail = RandomStringUtils.randomAlphabetic(8) + "@hotmail.com";
        firstName = RandomStringUtils.randomAlphabetic(12);
        password = RandomStringUtils.randomAlphanumeric(8);
    }

}
