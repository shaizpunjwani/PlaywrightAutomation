const {test, expect} = require('@playwright/test');

let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForLoadState("domcontentloaded");
  
    await page.locator("#userEmail").fill("john.cena@gmail.com");
    await page.locator("input[id='userPassword']").fill("Johncena123!");
    await page.locator("input[type='submit']").click();
    await page.waitForLoadState('networkidle');


    await page.pause();
  
    await context.storageState({ path: 'state.json' });
});


// test("demo", async()=>{
//     console.log("hello")
// })

test("end to end flow of adding items to cart", async({browser})=>{

    const context = await browser.newContext({ storageState: 'state.json' });
    const page = await context.newPage();
    const products= page.locator(".card-body");

    await products.locator("b").first().waitFor();
   
    const count=await products.count();
    
    for(var i=0; i < count; i++)
    {
        // await products.locator("b").nth(i).waitFor();
        // await page.waitForLoadState("domcontentloaded");
        const locator = await products.locator("b").nth(i);
        var title = await locator.textContent();
        if(title=="IPHONE 13 PRO")
        {
            await products.locator("text= Add To Cart").nth(i).waitFor();
            const btn= await products.locator("text= Add To Cart").nth(i);
            btn.click({ force: true });
        }
    }

    await page.locator("button[routerlink*='cart']").click();

    await page.locator("div ul li").first().waitFor();

   const visible = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
   expect(visible).toBeTruthy();

   await page.locator("text=Checkout").click();

   await page.locator("input[placeholder*='Country']").waitFor();
   await page.locator("input[placeholder*='Country']").pressSequentially("ind");
   const dyanamic_dd=page.locator("section[class*='ta-results']");
   await dyanamic_dd.waitFor();

   const options_count = await dyanamic_dd.locator("button").count();
   console.log(options_count);

   for(var j=0; j < options_count; j++)
   {
    const txt = await dyanamic_dd.locator("button").nth(j).textContent();
    if(txt.trim() == "India")
    {
        await dyanamic_dd.locator("button").nth(j).click();
        break;
    }
   }

   await page.locator("div[class='field small'] input[class='input txt']").fill("123");
   await page.locator("div[class='field'] input[class='input txt']").fill("john");

   await expect(page.locator("div[class*='user__name '] label")).toHaveText("john.cena@gmail.com");
   
   await page.locator("a[class*='submit']").click();

   await expect(page.locator("h1[class*='hero']")).toHaveText(" Thankyou for the order. ")
   const orderid = await page.locator("label[class*='ng-star']").textContent();
   const new_orderid= orderid.replace(/\|/g, '').trim()
   console.log(new_orderid);

   await page.locator("button[routerlink*='myorders']").click();

   await page.locator("tbody tr").first().waitFor();

   const rows=page.locator("tbody tr");
   const rows_count=await rows.count();
   console.log(rows_count);

   for(var r=0; r < rows_count; r++)
   {
    const ordertext=await rows.locator("th").nth(r).textContent();
    if(ordertext===new_orderid)
    {
        await rows.locator("td button").nth(r).first().click();
        break;
    }
   }

   const order_details = await page.locator("div[class*='col-text']").textContent();
   await expect(order_details.includes(new_orderid)).toBeTruthy();

});