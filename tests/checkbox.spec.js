import { test, expect } from '@playwright/test';

test("checkbox",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')
 
   // single checkbox selection
   await page.check("//input[@type='checkbox' and @id='sunday']")

   await expect(page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked()
   //ischecked will return true if the radio button is checked else false
   await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy()

   //multiple checkbox selection

   const multiple=["//input[@type='checkbox' and @id='monday']","//input[@type='checkbox' and @id='tuesday']","//input[@type='checkbox' and @id='wednesday']"];

   for(const i of multiple) //checking the elements
   {
       await page.locator(i).check()
   }

   await page.waitForTimeout(3000)

   for(const i of multiple) //unchecking the elements
   {   
      if(await page.locator(i).isChecked())
        {
          await page.locator(i).uncheck()
       }
       
   }

   await page.waitForTimeout(6000)

})