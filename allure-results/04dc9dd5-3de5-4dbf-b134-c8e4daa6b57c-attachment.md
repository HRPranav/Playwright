# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Byoditemlisting.spec.js >> Homepage actions
- Location: tests\Byoditemlisting.spec.js:31:5

# Error details

```
"beforeAll" hook timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - img
```

# Test source

```ts
  1  | import { test, expect,chromium } from '@playwright/test';
  2  | import { Byodhomepage } from '../BYODPages/Byodhomepage';
  3  | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  4  | import { Byodcartpage } from '../BYODPages/Byodcartpage';
  5  | import { Byoditemlistingpage } from '../BYODPages/Byoditemlistingpage';
  6  | 
  7  | 
  8  | test.describe.configure({ mode: 'serial' });
  9  | let page;
  10 | let context;
  11 | 
> 12 | test.beforeAll(async ({browser}) => {
     |      ^ "beforeAll" hook timeout of 30000ms exceeded.
  13 |   
  14 |   context = await browser.newContext();
  15 |   page = await context.newPage();
  16 |   
  17 | 
  18 |   await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');
  19 | 
  20 |   const login =new Byodloginpage(page);
  21 |      
  22 |       //Acct no login implementation
  23 |       await page.waitForTimeout(10000)
  24 |       await login.AcctnoLogin('500002','1285')
  25 |       await page.waitForTimeout(1000)
  26 |       await login.signByod()
  27 |   
  28 |       await page.waitForTimeout(10000)
  29 | });
  30 | 
  31 | test("Homepage actions",async({})=>{
  32 | 
  33 |     //home page 
  34 | 
  35 |     const home=new Byodhomepage(page);
  36 |     await page.waitForTimeout(3000)
  37 |     home.onclickAllcategories()
  38 |     await page.waitForTimeout(5000)
  39 | 
  40 | })
  41 | 
  42 | test("Item listing screen",async({})=>{
  43 | 
  44 | 
  45 |     //item listing screen
  46 | 
  47 |     const item= new Byoditemlistingpage(page);
  48 |     await page.waitForTimeout(2000)
  49 |     await item.addcartbutton()
  50 |     await page.waitForTimeout(2000)
  51 |     //await item.addcartlogobutton()
  52 |     
  53 | })
  54 | 
  55 | test("sorticon and price sorting",async()=>{
  56 | 
  57 |     const item= new Byoditemlistingpage(page);
  58 |     await item.onclicksorticon()
  59 |     await page.waitForTimeout(3000)
  60 |     await item.onselectionofsort()
  61 |     await page.waitForTimeout(3000)
  62 | 
  63 | })
  64 | 
  65 | test("Pricefilter selection",async()=>{
  66 | 
  67 |     const item= new Byoditemlistingpage(page);
  68 |     await item.pricefilter()
  69 | })
```