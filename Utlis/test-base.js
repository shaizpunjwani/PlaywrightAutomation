const base = require('@playwright/test');


exports.customtest = base.test.extend(
    {
        TestData :  {
            email: "john.cena@gmail.com",
            pwd: "Johncena123!",
            prodname: "IPHONE 13 PRO"
        }
    }
)
