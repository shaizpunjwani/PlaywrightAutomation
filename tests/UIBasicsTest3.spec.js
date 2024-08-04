const {test, expect} = require('@playwright/test');
const { Console } = require('console');


test("handling dropdownd and radio buttons", async({page})=>{

    const userName=page.locator("input[id='username']");
    const signIn=page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshetty");
    await page.locator("input#password").fill("learning")
    //handling dropdowns
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");

    // handling radio buttons
    await page.locator("input[value='user']").click();

    await page.locator("#okayBtn").click();

    //asserting the clicked radio button
    await expect(page.locator("input[value='user']")).toBeChecked();
    console.log(await page.locator("input[value='user']").isChecked());

    // handling checkbox
    await page.locator("#terms").check();

    //asserting checkbox (checked)
    console.log(await page.locator("#terms").isChecked());
    expect(await page.locator("#terms").isChecked()).toBeTruthy();
    await expect(page.locator("#terms")).toBeChecked();

    //asserting checkbox (unchecked)

    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    //asserting the tag attributes
    expect(page.locator("a[href*='documents-request']")).toHaveAttribute("class", "blinkingText");


});


test("handling child window", async({browser})=>{

    const context= await browser.newContext();
    const page= await context.newPage();

    const userName=page.locator("input[id='username']");


    const documentlink=page.locator("a[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"), //listen for new page
            documentlink.click(),
            //promise is either pending,rejected,fulfilled
        ])
    
        const text = await newPage.locator("a[href*='mentor@rahul']").textContent();
        const domain = text.split("@")[1]
        console.log(domain);

        await userName.fill(domain);
        await page.pause();
        

});