const {Loginpage} = require("./Loginpage.spec");
const {DashboardPage} = require("./DashboardPage.spec");
const { CartPage } = require("./CartPage.spec");
const { OrderInformationPage } = require("./OrderInformationPage.spec");

class POManager{


    constructor(page)
    {
        this.page=page;
        this.loginpage = new Loginpage(page);
        this.dashboardpage = new DashboardPage(page);
        this.cartpage = new CartPage(page);
        this.orderinfo = new OrderInformationPage(page);
    }

    GetLoginPage()
    {
        return this.loginpage;
    }

    GetDashboardPage()
    {
        return this.dashboardpage;
    }

    GetCartPage()
    {
        return this.cartpage;
    }

    GetOrderInfoPage()
    {
        return this.orderinfo;
    }
}

module.exports={POManager}