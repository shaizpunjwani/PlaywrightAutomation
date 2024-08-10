const {test, expect} = require('@playwright/test');

test("working with alert popups", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const FramesPage = page.frameLocator("iframe[id='courses-iframe']");

    await FramesPage.locator("li a[href*='lifetime-access']:visible").click();

});