import { test, expect } from '@playwright/test';

test("Assertions",async ({page})=>{

   await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const q=page.locator('//div[@class="header-links"]//li[1]//a')

    await expect(q).toBeVisible()

   const searchbox=await page.locator('#small-searchterms')
   await expect(searchbox).toBeEnabled()

  //Handling radio button
   const male=await page.locator('#gender-male')
   await male.click()
   await expect(male).toBeChecked()
 
   
   //checkbox
   const checkbox=await page.locator('#NewsLetterSubscriptions_0__IsActive')
   await checkbox.check()
   await expect(checkbox).toBeChecked()

   //element has attribute
   
   const attribute=await page.locator('#register-button')
   await expect(attribute).toHaveAttribute('type','submit')
   
   //to check the particular text
   
   const pt=await page.locator('.page-title h1')
   await expect(pt).toHaveText('Register') //need to pass full value

   //to check the text partially

   const px=await page.locator('.page-title h1')
   await expect(px).toContainText('Reg')   //need to pass partial value

   //to count
//    const count=await page.$$('img')
//    //await expect(count).toHaveCount(10)

//    for(var s in count)
//    {
//     const textcontent= await s.textContent();
//     console.log(textcontent)
//    }

})