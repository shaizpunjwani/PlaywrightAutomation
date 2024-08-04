const {test, expect} = require('@playwright/test');


test("solving syncronization issue", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForLoadState("domcontentloaded");

    await page.locator("#userEmail").fill("john.cena@gmail.com");
    await page.locator("input[id='userPassword']").fill("Johncena123!");
    await page.locator("input[type='submit']").click();
    // await page.waitForLoadState("networkidle")
    await page.locator(".card-body b").first().waitFor();
    const prod= await page.locator(".card-body b").allTextContents();
    console.log(prod);

});