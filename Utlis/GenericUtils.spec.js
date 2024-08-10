async function Enter_Values(locator, value)
{
    await locator.fill(value);

}

module.exports={
    Enter_Values
}