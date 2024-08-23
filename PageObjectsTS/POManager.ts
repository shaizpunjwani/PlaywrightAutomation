import {Loginpage} from "./Loginpage"
import {DashboardPage} from "./DashboardPage"
import {CartPage} from "./CartPage"
import {OrderInformationPage} from "./OrderInformationPage"
import { Page } from "@playwright/test"


export class POManager{

    page:Page
    loginpage:Loginpage;
    dashboardpage:DashboardPage;
    cartpage:CartPage;
    orderinfo:OrderInformationPage;

    constructor(page:Page)
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