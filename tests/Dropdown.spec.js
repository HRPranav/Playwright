import { test, expect } from '@playwright/test';

test("checkbox",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

   await page.locator('#country').selectOption({label:'Canada'})  //by label
   await page.locator('#country').selectOption('germany')   //visible text
    await page.locator('#country').selectOption({value:'france'})   //visible text
    await page.locator('#country').selectOption({index:6})   //index
    await page.selectOption('#country','Australia') //by text
   await page.waitForTimeout(3000)

   //assertions 
   //check no of options in the dropdown --approach1 

//    const options=await page.locator('#country option')
//    await expect(options).toHaveCount(10)

   //check no of options in the dropdown --approach2
  const options= await page.$$('#country option')
   console.log('No of options:', options.length)

   await expect(options.length).toBe(10)

   //To check particular value in the dropdown

//    const m=await page.locator('#country').textContent()

//    await expect(m.includes('France')).toBeTruthy()

   //to check particular value using loop

   const q=await page.$$('#country')

   let status=false

   for(const i of q){

    console.log(await i.textContent())
    const g= await i.textContent()
    if(g.includes("France")){
        status=true
        break;
    }
   }
   expect(status).toBeTruthy()





})