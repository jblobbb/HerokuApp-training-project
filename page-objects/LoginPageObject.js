class LoginPageObject{

    constructor(page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.submitButton = page.locator("//*[contains(@class,'fa fa-2x fa-sign-in')]");
    }

    async goToLoginPage(){
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

    async enterUserDetails(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async clickSubmitButton(){
        await this.submitButton.click();
    }
}
export default{LoginPageObject};