import { test, expect } from '@playwright/test';

test("multiselect dropdown",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

   await page.selectOption('#colors',['blue','yellow','white'])


   //assertion to count the no of options
   const options=await page.locator('#colors option')
   await expect(options).toHaveCount(7)
 
   //To count the no of options using js array ($$ will get the eleme in array)

   const opt=await page.$$('#colors option')

   console.log("The total count:",opt.length)

   await expect(opt.length).toBe(7)

   await page.waitForTimeout(4000)

   //to check the particular value using for loop and js array

  const op= await page.$$('#colors option')
  let status =false
  for(const i of op ){

    const u= await i.textContent()
    if(u.includes('White')){
        status=true
        break
    }

  }
  expect(status).toBeTruthy()





})