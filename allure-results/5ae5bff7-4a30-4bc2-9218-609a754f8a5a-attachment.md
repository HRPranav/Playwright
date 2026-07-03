# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Byodaddresspage.spec.js >> Homepage actions
- Location: tests\Byodaddresspage.spec.js:33:5

# Error details

```
TypeError: page.goto is not a function
```

# Test source

```ts
  1  | import {test,expect,chromium} from "@playwright/test"
  2  | import { Byodloginpage } from "../BYODPages/ByodLoginpage"
  3  | import { Byodhomepage } from "../BYODPages/Byodhomepage"
  4  | import { Byoditemlistingpage } from "../BYODPages/Byoditemlistingpage"
  5  | import { Byodcartpage } from "../BYODPages/Byodcartpage"
  6  | import { Byodaddresspage } from "../BYODPages/Byodaddresspage"
  7  | 
  8  | test.describe.configure({ mode: 'serial' });
  9  | 
  10 | let page;
  11 | let context;
  12 | 
  13 | test.beforeAll("Login",async({browser})=>{
  14 | 
  15 |     context=await browser.newContext()
  16 |     page=context.newPage()
  17 | 
> 18 |     await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');
     |                ^ TypeError: page.goto is not a function
  19 | 
  20 |     const login =new Byodloginpage(page);
  21 | 
  22 |      //Acct no login implementation
  23 |       await page.waitForTimeout(10000)
  24 |       await login.AcctnoLogin('500002','1285')
  25 |       await page.waitForTimeout(1000)
  26 |       await login.signByod()
  27 |   
  28 |       await page.waitForTimeout(10000)
  29 | 
  30 | 
  31 | })
  32 | 
  33 | test("Homepage actions",async({})=>{
  34 | 
  35 |     //home page 
  36 | 
  37 |     const home=new Byodhomepage(page);
  38 |     await page.waitForTimeout(3000)
  39 |     home.onclickAllcategories()
  40 |     await page.waitForTimeout(5000)
  41 | 
  42 | })
  43 | 
  44 | test("Item listing screen",async({})=>{
  45 | 
  46 | 
  47 |     //item listing screen
  48 | 
  49 |     const item= new Byoditemlistingpage(page);
  50 |     await page.waitForTimeout(2000)
  51 |     await item.addcartbutton()
  52 |     await page.waitForTimeout(2000)
  53 |     await item.addcartlogobutton()
  54 |     
  55 | })
  56 | 
  57 | test("proceed to checkout in cart screen",async()=>{
  58 | 
  59 |     const cart=new Byodcartpage(page)
  60 |     await page.waitForTimeout(2000)
  61 |     await cart.checkoutbutton()
  62 | })
  63 | 
```