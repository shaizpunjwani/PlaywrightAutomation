const {Enter_Values} = require("../Utlis/GenericUtils.spec");
const {expect} = require('@playwright/test');

class CartPage{


    constructor(page)
    {
        this.page=page;
        this.items = page.locator("div ul li");
        this.checkout = page.locator("text=Checkout");
    }

    async Check_Product_Visibility(prodname)
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