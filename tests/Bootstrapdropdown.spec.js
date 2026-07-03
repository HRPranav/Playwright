import { test, expect } from '@playwright/test';

test("Bootstrapdropdown",async ({page})=>{

    await page.goto("https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html")

    const loc=await page.locator('#menu1').click()

    //assertions 
   //check no of options in the dropdown --approach1 

    const count=await page.locator("//div//ul/li[@role='presentation']")

    await expect(count).toHaveCount(5)

    //check no of options in the dropdown --approach2

    const mul=await page.$$("//div//ul/li[@role='presentation']")
    console.log("The length",mul.length)
    await expect(mul.length).toBe(5)
   
   //check the particular options in the dropdown --approach3 for loop

   const loop=await page.$$("//div//ul/li[@role='presentation']")
   let status=false
   for(const w of loop){
    const e=await w.textContent()
    if(e.includes('JavaScript')){
        status=true
        break;
    }
   }
   expect(status).toBeTruthy()


   //performing a select action
   const sel=await page.$$("//div//ul/li[@role='presentation']")
   console.log(sel)

   for(const o of sel){
    const k=await o.textContent()
    console.log(k)
    if(k.includes('JavaScript' || 'HTML')){

        await o.click()
        break
    }

   }

   

    await page.waitForTimeout(4000)


})