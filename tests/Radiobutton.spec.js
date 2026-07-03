import { test, expect } from '@playwright/test';

test("Assertions",async ({page})=>{

   await page.goto('https://demo.nopcommerce.com/register')


   //radio button way 1
//    const male=await page.locator('#gender-male')
//    await male.click()
//    await expect(male).toBeChecked()

    //radio button way 2

   await page.check('#gender-male')

   await expect(page.locator('#gender-male')).toBeChecked()
   //ischecked will return true if the radio button is checked else false
   await expect(await page.locator('#gender-male').isChecked()).toBeTruthy()

   
   //ischecked will return true if the radio button is checked else false
   await expect.soft(await page.locator('#gender-female').isChecked()).toBeFalsy()

   await page.waitForTimeout(8000)

 
})