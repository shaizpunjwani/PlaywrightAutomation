const {test, expect} = require('@playwright/test');

// test("Test using browser context fixture", async ({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     console.log(await page.title());
// })

// test.only("Test using page fixture", async ({page})=>{

//     await page.goto("https://www.google.com/");
//     await expect(page).toHaveTitle("Google");
// })

test("@Web Sign in to website", async({page})=>{
    const userName=page.locator("input[id='username']");
    const signIn=page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshetty");
    await page.locator("input#password").fill("learning")
    await signIn.click();
    console.log(await page.locator("div[style='display: block;']").textContent())

    await expect(page.locator("div[style='display: block;']")).toContainText("Incorrect");

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    // console.log(await page.locator(".card-body a").first().textContent());
    // console.log(await page.locator(".card-body a").nth(0).textContent());

    const products= await page.locator(".card-body a").allTextContents();
    console.log(products);



})