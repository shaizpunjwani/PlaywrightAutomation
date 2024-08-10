const {test, expect} = require('@playwright/test');

test("working with alert popups", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    page.on('dialog', dialog => dialog.accept());
    page.on('dialog', dialog => console.log(dialog.message()));

    await page.locator("input[id='confirmbtn']").click();

    // page.on('dialog', dialog => dialog.dismiss());

    await page.locator("#mousehover").hover();




});