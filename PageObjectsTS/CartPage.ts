const {Enter_Values} = require("../Utlis/GenericUtils.spec");
import {test, expect, Page, Locator} from "@playwright/test"

export class CartPage{

    page:Page;
    items:Locator;
    checkout:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.items = page.locator("div ul li");
        this.checkout = page.locator("text=Checkout");
    }

    async Check_Product_Visibility(prodname:string)
    {
        await this.items.first().waitFor();

        const visible = await this.page.locator("h3:has-text('" + prodname + "')").isVisible();
        expect(visible).toBeTruthy();
    }

    async Navigate_CheckoutPage()
    {
        await this.checkout.click();
    }

    
}

module.exports={CartPage}