import { test as base } from '@playwright/test';

interface TestData {
    email: string;
    pwd: string;
    prodname: string;
}

export const customTest = base.extend<{ TestData: TestData }>({
    TestData: {
        email: "john.cena@gmail.com",
        pwd: "Johncena123!",
        prodname: "IPHONE 13 PRO"
    }
});
