const {test, expect} = require('@playwright/test');
const { count } = require('console');


test("working with calendar", async({page})=>{

    const month="9";
    const date="6";
    const year="2027";

    const expectedList=[month, date, year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator(".react-date-picker__inputGroup").click();

    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator("button[class*='react-calendar__tile']").nth(Number(month)-1).click();
    await page.locator("//abbr[text()="+date+"]").click();

    const calendar=page.locator("div[class='react-date-picker__inputGroup'] input[class*='react-date-picker']");
    const count_elements=await calendar.count();

    console.log(count_elements);

    for(var i=0; i<count_elements; i++)
    {
        expect(calendar.nth(i)).toHaveAttribute("value", expectedList[i]);
    }




});