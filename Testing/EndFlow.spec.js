const {test, expect} = require('@playwright/test');
const { Loginpage } = require('../PageObjects/Loginpage.spec');
const { DashboardPage } = require('../PageObjects/DashboardPage.spec');
// import { Loginpage } from '../PageObjects/Loginpage.spec';


test("end to end flow of adding items to cart", async({page})=>{


    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForLoadState("domcontentloaded");
    const loginpage=new Loginpage(page);

    await loginpage.Login("john.cena@gmail.com", "Johncena123!");

    page=loginpage.get_page();

    const dashboardpage=new DashboardPage(page);

    await dashboardpage.Search_Add_Products("IPHONE 13 PRO");
    await dashboardpage.Navigate_Cart();

    
    //await products.locator("b").first().waitFor();
});