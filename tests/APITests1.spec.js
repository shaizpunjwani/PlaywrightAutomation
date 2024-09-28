const {test, expect, request} = require('@playwright/test');
const { APIUtils } = require('../Utlis/APIUtils.spec');
const payload_login = {userEmail: "john.cena@gmail.com", userPassword: "Johncena123!"}
const payload_order = {orders: [{country: "India", productOrderedId: "6581cade9fd99c85e8ee7ff5"}]}
let response;

test.beforeAll(async ()=>{

    const apiContext = await request.newContext();
    const apiutils = new APIUtils(apiContext, payload_login);
    response = await apiutils.CreateOrder(payload_order);
    

});


test("end to end flow of adding items to cart", async({page})=>{

    page.addInitScript(value=>{

        window.localStorage.setItem('token',value);
    }, response.token)

    await page.goto("https://rahulshettyacademy.com/client/");


   await page.locator("button[routerlink*='myorders']").click();

   await page.locator("tbody tr").first().waitFor();

   const rows=page.locator("tbody tr");
   const rows_count=await rows.count();
   console.log(rows_count);

   for(var r=0; r < rows_count; r++)
   {
    const ordertext=await rows.locator("th").nth(r).textContent();
    if(ordertext===response.orderid)
    {
        await rows.locator("td button").nth(r).first().click();
        break;
    }
   }

   const order_details = await page.locator("div[class*='col-text']").textContent();
   await expect(order_details.includes(response.orderid)).toBeTruthy();

});