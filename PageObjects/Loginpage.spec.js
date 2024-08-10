const {Enter_Values} = require("../Utlis/GenericUtils.spec");

class Loginpage{


    constructor(page)
    {
        this.page=page;
        this.UserName = page.locator("#userEmail");
        this.Password = page.locator("input[id='userPassword']");
        this.SignInButton = page.locator("input[type='submit']");
    }

    async Login(username, password)
    {
        await Enter_Values(this.UserName, username);
        await Enter_Values(this.Password, password);
        await this.SignInButton.click();

    }

    get_page()
    {
        return this.page;
    }
}

module.exports={Loginpage}