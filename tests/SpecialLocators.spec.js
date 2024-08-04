const {test, expect} = require('@playwright/test');


test("playwright special locators", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").check();

    await page.getByLabel("Employed").click();

    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("Johncena123!");

    await page.getByRole("button", {value: 'Submit'}).click();

    expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();

    await page.getByRole("link", {name: 'Shop'}).click();

    page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();



});