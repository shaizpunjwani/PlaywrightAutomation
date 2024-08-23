import { Enter_Values } from "../UtlisTS/GenericUtils";
import {test, expect, Page, Locator} from "@playwright/test"


export class Loginpage{

    page:Page;
    UserName: Locator;
    Password: Locator;
    SignInButton: Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.UserName = page.locator("#userEmail");
        this.Password = page.locator("input[id='userPassword']");
        this.SignInButton = page.locator("input[type='submit']");
    }

    async Login(username:string, password:string)
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