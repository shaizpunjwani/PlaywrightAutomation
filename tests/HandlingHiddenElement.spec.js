const {test, expect} = require('@playwright/test');

test("working with hidden elements", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // page.goBack();

    // page.goForward();

    await expect(page.locator("input[id='displayed-text']")).toBeVisible();
    
    await page.locator("input[id='hide-textbox']").click();

    await expect(page.locator("input[id='displayed-text']")).toBeHidden();


});