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
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e7]:
        - generic "Home" [ref=e8] [cursor=pointer]:
          - generic [ref=e9]: 
        - link:
          - /url: /home?DEVICEID=INT
          - img
      - generic [ref=e10]:
        - generic [ref=e13]:
          - text: 
          - generic [ref=e15]:
            - text: 
            - generic [ref=e19]:
              - combobox "Search" [ref=e20]
              - button "" [ref=e22] [cursor=pointer]
        - generic [ref=e23]:
          - text: 
          - generic "Categories" [ref=e24] [cursor=pointer]:
            - generic [ref=e25]: 
          - text: 
          - generic "Points Balance" [ref=e26] [cursor=pointer]:
            - generic [ref=e27]: 
          - generic "Tender Balances" [ref=e28] [cursor=pointer]:
            - generic [ref=e29]: 
          - generic "Cart" [ref=e30] [cursor=pointer]:
            - generic [ref=e32]: 
          - generic "User Profile" [ref=e33] [cursor=pointer]:
            - figure [ref=e34]
      - text: 
    - generic [ref=e36]:
      - text: 
      - generic [ref=e37]:
        - text:  
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - generic [ref=e40]: All Categories
          - listitem [ref=e41] [cursor=pointer]:
            - generic [ref=e42]: Clothes, Shoes & Watches
          - listitem [ref=e43] [cursor=pointer]:
            - generic [ref=e44]: Lifestyle
          - listitem [ref=e45] [cursor=pointer]:
            - generic [ref=e46]: Sports & Outdoors
        - text:  
    - generic [ref=e47]:
      - generic [ref=e48]:
        - figure [ref=e49]
        - generic [ref=e50]: Joseph, You have $ 7,022 to redeem for this transaction.
        - generic [ref=e52]: 
      - text: 
    - generic [ref=e55]:
      - generic [ref=e57]:
        - img
        - text: 
      - generic [ref=e58]:
        - heading "Reward Categories" [level=2] [ref=e60]
        - generic [ref=e62]:
          - generic [ref=e63] [cursor=pointer]:
            - figure [ref=e64]:
              - img "All Categories"
            - generic [ref=e65]: All Categories
          - generic [ref=e66] [cursor=pointer]:
            - figure [ref=e67]:
              - img "Clothes, Shoes & Watches"
            - generic [ref=e68]: Clothes, Shoes & Watches
          - generic [ref=e69] [cursor=pointer]:
            - figure [ref=e70]:
              - img "Lifestyle"
            - generic [ref=e71]: Lifestyle
          - generic [ref=e72] [cursor=pointer]:
            - figure [ref=e73]:
              - img "Sports & Outdoors"
            - generic [ref=e74]: Sports & Outdoors
      - contentinfo [ref=e75]:
        - generic [ref=e78]: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
    - text:      
  - text: 
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
  55 | test("sorticon",async()=>{
  56 | 
  57 |     const item= new Byoditemlistingpage(page);
  58 |     await item.onclicksorticon()
  59 |     await page.waitForTimeout(3000)
  60 | 
  61 |     
  62 | 
  63 |     
  64 | 
  65 |     
  66 | 
  67 | })
```