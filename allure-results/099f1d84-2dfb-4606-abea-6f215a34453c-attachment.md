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
          - link "QR Scan" [ref=e27] [cursor=pointer]:
            - /url: /qrscan
            - generic [ref=e28]: 
            - text: QR Scan
          - generic "Categories" [ref=e29] [cursor=pointer]:
            - generic [ref=e30]: 
          - text: 
          - generic "Points Balance" [ref=e31] [cursor=pointer]:
            - generic [ref=e32]: 
          - generic "Tender Balances" [ref=e33] [cursor=pointer]:
            - generic [ref=e34]: 
          - generic "Cart" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]:
              - generic [ref=e37]: 
              - generic [ref=e38]: "31"
          - generic "User Profile" [ref=e39] [cursor=pointer]:
            - figure [ref=e40]
      - text: 
    - generic [ref=e42]:
      - text: 
      - generic [ref=e43]:
        - text:  
        - list [ref=e44]:
          - listitem [ref=e45] [cursor=pointer]:
            - generic [ref=e46]: All Categories
          - listitem [ref=e47] [cursor=pointer]:
            - generic [ref=e48]: Life Style
          - listitem [ref=e49] [cursor=pointer]:
            - generic [ref=e50]: Lifestyle
          - listitem [ref=e51] [cursor=pointer]:
            - generic [ref=e52]: Sports & Outdoors
        - text:  
    - generic [ref=e53]:
      - generic [ref=e54]:
        - figure [ref=e55]
        - generic [ref=e56]: Joseph, You have $3,141.85 out of $3,433.53 to redeem for this transaction.
        - generic [ref=e58]: 
      - text: 
    - generic [ref=e61]:
      - generic [ref=e63]:
        - img [ref=e64]
        - text: 
      - generic [ref=e65]:
        - heading "Reward Categories" [level=2] [ref=e67]
        - generic [ref=e69]:
          - generic [ref=e70] [cursor=pointer]:
            - figure [ref=e71]:
              - img "All Categories"
            - generic [ref=e72]: All Categories
          - generic [ref=e73] [cursor=pointer]:
            - figure [ref=e74]:
              - img "Life Style" [ref=e75]
            - generic [ref=e76]: Life Style
          - generic [ref=e77] [cursor=pointer]:
            - figure [ref=e78]:
              - img "Lifestyle" [ref=e79]
            - generic [ref=e80]: Lifestyle
          - generic [ref=e81] [cursor=pointer]:
            - figure [ref=e82]:
              - img "Sports & Outdoors" [ref=e83]
            - generic [ref=e84]: Sports & Outdoors
      - contentinfo [ref=e85]:
        - generic [ref=e88]: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
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
  51 |     await item.addcartlogobutton()
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