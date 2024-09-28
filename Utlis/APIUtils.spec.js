class APIUtils
{

    constructor (apiContext, payload_login)
    {
        this.apiContext = apiContext;
        this.payload_login = payload_login;
    }

    async getToken()
    {
        const apiresponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data: this.payload_login
            });
            // expect(apiresponse.ok()).toBeTruthy();
        
            const loginresponsejson = await apiresponse.json();
            const token = loginresponsejson.token;
            console.log(token);
            return token;
    }

    async CreateOrder(payload_order)
    {
        let response = {};
        response.token = await this.getToken();
        const orderresponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: payload_order,
                headers: 
                {
                    'authorization': await this.getToken(),
                    'content-type': 'application/json'
                }
            });
    
        const orderresponsejson = await orderresponse.json();
        const orderid = orderresponsejson.orders[0];
        response.orderid = orderid;
        return response;
    }






}
module.exports = {APIUtils};