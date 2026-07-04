import { test, expect,chromium } from '@playwright/test';
import { Byodhomepage } from '../BYODPages/Byodhomepage';
import { Byodloginpage } from '../BYODPages/ByodLoginpage';
import { Byodcartpage } from '../BYODPages/Byodcartpage';
import { Byoditemlistingpage } from '../BYODPages/Byoditemlistingpage';

test.describe.configure({mode:'serial'})

let page;
let context;

test.beforeAll(async({browser})=>{

    context= await browser.newContext()
    page= await context.newPage()

    await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC')

    const login =new Byodloginpage(page);

     //Acct no login implementation
      await page.waitForTimeout(10000)
      await login.couponcodelogin('PBfbqah3zTAF')
      await page.waitForTimeout(1000)
      await login.signByod()
  
      await page.waitForTimeout(10000)


      
})

//Enable only if navigate to product listing screen in backoffice is set false
// test("Homepage actions",async({})=>{

//     //home page 

//     const home=new Byodhomepage(page);
//     await page.waitForTimeout(3000)
//     home.onclickclothesandshoes()
//     await page.waitForTimeout(5000)

// })

test("Item listing screen",async({})=>{


    //item listing screen

    const item= new Byoditemlistingpage(page);
    await page.waitForTimeout(2000)
    await expect(page.getByPlaceholder('Search')).toBeVisible()
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Select' }).first().click();
    await page.waitForTimeout(2000)
   const yesButton = page.getByRole('button', { name: 'Yes' });

    if (await yesButton.isVisible()) 
    {
    await yesButton.click();
    await page.waitForTimeout(4000)
    } 
    else 
    {
    console.log('Button not visible');
    }
   //
})