import {test, expect, Page, Locator} from "@playwright/test"

export class OrderInformationPage{

    page:Page;
    country:Locator;
    dynamic_dd:Locator;
    cvv:Locator;
    name:Locator;
    email:Locator;
    submit:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.country = page.locator("input[placeholder*='Country']");
        this.dynamic_dd = page.locator("section[class*='ta-results']");
        this.cvv = page.locator("div[class='field small'] input[class='input txt']");
        this.name = page.locator("div[class='field'] input[class='input txt']");
        this.email = page.locator("div[class*='user__name '] label");
        this.submit = page.locator("a[class*='submit']");
    }

    async EnterCountry(shortname:string, fullname:string)
    {
        await this.country.waitFor();
        await this.country.pressSequentially(shortname);
        const dyanamic_dd=this.dynamic_dd;
        await dyanamic_dd.waitFor();

        const options_count = await dyanamic_dd.locator("button").count();
        console.log(options_count);

        for(var j=0; j < options_count; j++)
        {
            let txt:any;
            txt = await dyanamic_dd.locator("button").nth(j).textContent();
            if(txt.trim() == fullname)
            {
                await dyanamic_dd.locator("button").nth(j).click();
                break;
            }
        }
    }

    async EnterInfo(number:string, name:string, email:string)
    {
        await this.cvv.fill(number);
        await this.name.fill(name);

        await expect(this.email).toHaveText(email);

    }

    async Click_Submit()
    {
        await this.submit.click();
    }
    
}

module.exports={OrderInformationPage}