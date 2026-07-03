import { test, expect } from '@playwright/test';

test("soft assertion",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register") 

   //Hard assertion(if any 1 assertion gets failed the rest of the code will not be executed)
    // await expect(page).toHaveTitle("nopCommerce demo store. Register")
    // await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    // await expect(page.locator(".ico-register")).toBeVisible()

    //Soft assertion(if any 1 assertion gets failed it will not impact any other assertions in executing)

    await expect.soft(page).toHaveTitle("nopCommerce demo11 store. Register")
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect.soft(page.locator(".ico-register")).toBeVisible()

})