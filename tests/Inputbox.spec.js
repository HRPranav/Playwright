import { test, expect } from '@playwright/test';

test("Assertions",async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    //input box

    await expect(page.locator("//input[@id='FirstName']")).toBeVisible()
    await expect(page.locator("//input[@id='FirstName']")).toBeEnabled()
    await expect(page.locator("//input[@id='FirstName']")).toBeEmpty()
    await expect(page.locator("//input[@id='FirstNam']")).toBeEditable()

    
    await page.fill("//input[@id='FirstName']", "abcd");
    await expect(page.locator("//input[@id='FirstName']")).toHaveValue("abcd");



    await page.waitForTimeout(10000)
})