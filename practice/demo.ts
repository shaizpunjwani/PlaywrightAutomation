let message: string = "Hello world";
console.log(message);

let age: number = 23;
console.log(age);

let isActive: Boolean = true;
console.log(isActive);

let data: any = "29";
data="webelements"
console.log(data);

let products: string[] = ["hello", "iphone"];
console.log(products[0]);

function Adding(a:number, b:number):number
{
    return a+b
}

console.log(Adding(2,3));


let user: {name: string, salary: number, location:string} = {name: "shaiz", salary: 90, location: ""}
user.location="hyd";
console.log(user.location)

import { expect, type Locator, type Page } from '@playwright/test';


class CartPage{

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
}



