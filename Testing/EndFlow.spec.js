const {test, expect} = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager.spec');
const {customtest} = require("../Utlis/test-base");

const Testdata = JSON.parse(JSON.stringify(require("../Utlis/Testdata.json")));

for(const data of Testdata)
{

test(`End to End flow testing of product ${data.prodname}`, async({page})=>{

    const pomanager= new POManager(page);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForLoadState("domcontentloaded");
    const loginpage=pomanager.GetLoginPage();

    await loginpage.Login(data.email, data.pwd);

    const dashboardpage=pomanager.GetDashboardPage()

    await dashboardpage.Search_Add_Products(data.prodname);
    await dashboardpage.Navigate_Cart();

    const cartpage = pomanager.GetCartPage();

    await cartpage.Check_Product_Visibility(data.prodname);
    await cartpage.Navigate_CheckoutPage();

    const orderinfo = pomanager.GetOrderInfoPage();

    await orderinfo.EnterCountry("ind", "India");

    await orderinfo.EnterInfo("123", "john", "john.cena@gmail.com");

    await orderinfo.Click_Submit();

    

    
});
};


customtest("Using playwright fixture", async({page, TestData})=>{

    const pomanager= new POManager(page);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.waitForLoadState("domcontentloaded");
    const loginpage=pomanager.GetLoginPage();

    await loginpage.Login(TestData.email, TestData.pwd);

    const dashboardpage=pomanager.GetDashboardPage()

    await dashboardpage.Search_Add_Products(TestData.prodname);
    await dashboardpage.Navigate_Cart();

    const cartpage = pomanager.GetCartPage();

    await cartpage.Check_Product_Visibility(TestData.prodname);
    await cartpage.Navigate_CheckoutPage();
})