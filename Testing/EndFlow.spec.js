const {test, expect} = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager.spec');

const Testdata = JSON.parse(JSON.stringify(require("../Utlis/Testdata.json")));


test("end to end flow of adding items to cart", async({page})=>{

    const pomanager= new POManager(page);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForLoadState("domcontentloaded");
    const loginpage=pomanager.GetLoginPage();

    await loginpage.Login(Testdata.email, Testdata.pwd);

    const dashboardpage=pomanager.GetDashboardPage()

    await dashboardpage.Search_Add_Products(Testdata.prodname);
    await dashboardpage.Navigate_Cart();

    const cartpage = pomanager.GetCartPage();

    await cartpage.Check_Product_Visibility('IPHONE 13 PRO');
    await cartpage.Navigate_CheckoutPage();

    const orderinfo = pomanager.GetOrderInfoPage();

    await orderinfo.EnterCountry("ind", "India");

    await orderinfo.EnterInfo("123", "john", "john.cena@gmail.com");

    await orderinfo.Click_Submit();

    

    
});