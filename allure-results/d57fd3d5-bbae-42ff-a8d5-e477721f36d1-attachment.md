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
        - link [ref=e10] [cursor=pointer]:
          - /url: /home?DEVICEID=INT
          - img [ref=e11]
      - generic [ref=e12]:
        - generic [ref=e15]:
          - text: 
          - generic [ref=e17]:
            - text: 
            - generic [ref=e21]:
              - combobox "Search" [ref=e22]
              - button "" [ref=e24] [cursor=pointer]
        - generic [ref=e25]:
          - text: 
          - generic "Categories" [ref=e26] [cursor=pointer]:
            - generic [ref=e27]: 
          - text: 
          - generic "Points Balance" [ref=e28] [cursor=pointer]:
            - generic [ref=e29]: 
          - generic "Tender Balances" [ref=e30] [cursor=pointer]:
            - generic [ref=e31]: 
          - generic "Cart" [ref=e32] [cursor=pointer]:
            - generic [ref=e34]: 
          - generic "User Profile" [ref=e35] [cursor=pointer]:
            - figure [ref=e36]
      - text: 
    - generic [ref=e38]:
      - text: 
      - generic [ref=e39]:
        - text:  
        - list [ref=e40]:
          - listitem [ref=e41] [cursor=pointer]:
            - generic [ref=e42]: All Categories
          - listitem [ref=e43] [cursor=pointer]:
            - generic [ref=e44]: Clothes, Shoes & Watches
          - listitem [ref=e45] [cursor=pointer]:
            - generic [ref=e46]: Lifestyle
          - listitem [ref=e47] [cursor=pointer]:
            - generic [ref=e48]: Sports & Outdoors
        - text:  
    - generic [ref=e49]:
      - generic [ref=e50]:
        - figure [ref=e51]
        - generic [ref=e52]: Joseph, You have $ 7,022 to redeem for this transaction.
        - generic [ref=e54]: 
      - text: 
    - generic [ref=e57]:
      - generic [ref=e59]:
        - img [ref=e60]
        - text: 
      - generic [ref=e61]:
        - heading "Reward Categories" [level=2] [ref=e63]
        - generic [ref=e65]:
          - generic [ref=e66] [cursor=pointer]:
            - figure [ref=e67]:
              - img "All Categories"
            - generic [ref=e68]: All Categories
          - generic [ref=e69] [cursor=pointer]:
            - figure [ref=e70]:
              - img "Clothes, Shoes & Watches" [ref=e71]
            - generic [ref=e72]: Clothes, Shoes & Watches
          - generic [ref=e73] [cursor=pointer]:
            - figure [ref=e74]:
              - img "Lifestyle" [ref=e75]
            - generic [ref=e76]: Lifestyle
          - generic [ref=e77] [cursor=pointer]:
            - figure [ref=e78]:
              - img "Sports & Outdoors"
            - generic [ref=e79]: Sports & Outdoors
      - contentinfo [ref=e80]:
        - generic [ref=e83]: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
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
  61 |     const total=await page.$$('.sortDropdown')
  62 | 
  63 |     console.log(total.length)
  64 | 
  65 |     for(const i of total){
  66 |        
  67 |         console.log(i.textContent())
  68 |         const z= await i.textContent()
  69 | 
  70 |         if(z.includes('Price High to Low'))
  71 |         {
  72 |             await i.click()
  73 |             await page.waitForTimeout(10000)
  74 |         }
  75 |     }
  76 | 
  77 | })
```