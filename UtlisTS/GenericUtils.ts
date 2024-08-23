import { Locator } from "@playwright/test";

export async function Enter_Values(locator:Locator, value:string)
{
    await locator.fill(value);

}

module.exports={
    Enter_Values
}