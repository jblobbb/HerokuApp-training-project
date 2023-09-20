const { test, expect } = require('@playwright/test');
const {LoginPageObject} = require('../page-objects/LoginPageObject').default;

test.only('Log into herokuapp site', async ({ page }) => {
    const login = new LoginPageObject(page);
    const username = "tomsmith";
    const password = "SuperSecretPassword!";

    await login.goToLoginPage();
    await login.enterUserDetails(username, password);
    await login.clickSubmitButton();
    
    const loginSuccess = await page.locator("#flash");
    expect(loginSuccess).toContainText("You logged into a secure area!");
    await page.screenshot({ path: 'screenshot.png' });
});

