class DashboardPage{


    constructor(page)
    {
        this.page=page;
        this.products=page.locator(".card-body");
        this.card=page.locator("button[routerlink*='cart']");
    }

    async Search_Add_Products(phonetitle)
    {

        await this.products.locator("b").first().waitFor();
    
        const count=await this.products.count();
        console.log(count);
        
        for(var i=0; i < count; i++)
        {
           
            const locator = await this.products.locator("b").nth(i);
            var title = await locator.textContent();
            if(title==phonetitle)
            {
                await this.products.locator("text= Add To Cart").nth(i).waitFor();
                const btn= await this.products.locator("text= Add To Cart").nth(i);
                btn.click({ force: true });
            }
        }
    }

    async Navigate_Cart()
    {
        await this.card.click();
    }
}

module.exports={DashboardPage}