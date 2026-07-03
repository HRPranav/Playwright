# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODitemlistingcoupon.spec.js >> Item listing screen
- Location: tests\BYODitemlistingcoupon.spec.js:45:5

# Error details

```
"beforeAll" hook timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | import { test, expect,chromium } from '@playwright/test';
  2  | import { Byodhomepage } from '../BYODPages/Byodhomepage';
  3  | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  4  | import { Byodcartpage } from '../BYODPages/Byodcartpage';
  5  | import { Byoditemlistingpage } from '../BYODPages/Byoditemlistingpage';
  6  | 
  7  | test.describe.configure({mode:'serial'})
  8  | 
  9  | let page;
  10 | let context;
  11 | 
> 12 | test.beforeAll(async({browser})=>{
     |      ^ "beforeAll" hook timeout of 30000ms exceeded.
  13 | 
  14 |     context= await browser.newContext()
  15 |     page= await context.newPage()
  16 | 
  17 |     await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC')
  18 | 
  19 |     const login =new Byodloginpage(page);
  20 | 
  21 |      //Acct no login implementation
  22 |       await page.waitForTimeout(10000)
  23 |       await login.couponcodelogin('PBfbqah3zTAF')
  24 |       await page.waitForTimeout(1000)
  25 |       await login.signByod()
  26 |   
  27 |       await page.waitForTimeout(10000)
  28 | 
  29 | 
  30 |       
  31 | })
  32 | 
  33 | //Enable only if navigate to product listing screen in backoffice is set false
  34 | test.skip("Homepage actions",async({})=>{
  35 | 
  36 |     //home page 
  37 | 
  38 |     const home=new Byodhomepage(page);
  39 |     await page.waitForTimeout(3000)
  40 |     home.onclickclothesandshoes()
  41 |     await page.waitForTimeout(5000)
  42 | 
  43 | })
  44 | 
  45 | test("Item listing screen",async({})=>{
  46 | 
  47 | 
  48 |     //item listing screen
  49 | 
  50 |     const item= new Byoditemlistingpage(page);
  51 |     await page.waitForTimeout(2000)
  52 |     await expect(page.locator("//span[@class='categTitle']")).toBeVisible()
  53 |     await page.getByRole('button', { name: 'Select' }).first().click();
  54 |     await page.waitForTimeout(2000)
  55 |     await page.getByRole('button', { name: 'Yes' }).click();
  56 |    // await item.addcartlogobutton()
  57 |     
  58 | })
```