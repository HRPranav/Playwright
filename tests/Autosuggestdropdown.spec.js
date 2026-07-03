import { test, expect } from '@playwright/test';

test("Autosuggestdropdown",async ({page})=>{

    await page.goto("https://www.redbus.in/")

    await page.locator("(//input[@id='destinput'])[1]").fill("Jaipur (Rajasthan)")

    await page.waitForSelector("(//div[@aria-label='Mansarovar, Jaipur (Rajasthan)'])[1]")

    const store=await page.$$("(//div[@aria-label='Mansarovar, Jaipur (Rajasthan)'])[1]")
    
    for (const i of store){
        const value=await i.textContent()

        if(value.includes('Mansarovar, Jaipur (Rajasthan)')){

            i.click()

        }
    }
      

    await page.waitForTimeout(4000)


})