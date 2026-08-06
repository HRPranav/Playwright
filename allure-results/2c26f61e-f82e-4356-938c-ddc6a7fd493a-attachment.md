# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODhomepage.spec.js >> Muliple player balance screen
- Location: tests\BYODhomepage.spec.js:86:5

# Error details

```
TypeError: page.waitForSelector(...).toBeVisible is not a function
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
              - generic [ref=e38]: "1"
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
            - generic [ref=e48]: Eateries
          - listitem [ref=e49] [cursor=pointer]:
            - generic [ref=e50]: Lifestyle
          - listitem [ref=e51] [cursor=pointer]:
            - generic [ref=e52]: Sports and Outdoors
        - text:  
    - generic [ref=e53]:
      - generic [ref=e54]:
        - figure [ref=e55]
        - generic [ref=e56]: Joseph, You have $3,391.60 out of $3,400.95 to redeem for this transaction.
        - generic [ref=e58]: 
      - text: 
    - generic [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e64]:
          - img [ref=e65]
          - generic [ref=e66]:
            - img [ref=e67]
            - generic [ref=e68]:
              - heading "Welcome, Joseph" [level=1] [ref=e69]:
                - generic [ref=e70]: Welcome, Joseph
              - paragraph [ref=e71]:
                - generic [ref=e72]: You can redeem
                - strong [ref=e73]: $3,400.95
              - text: 
          - generic [ref=e74]:
            - img [ref=e75]
            - generic [ref=e77]:
              - generic:
                - generic: PBL_CREDITS
                - strong: 1,500
              - generic:
                - generic: FREE_MONEY
                - strong: 3,400.95
          - img [ref=e78]
          - img [ref=e79]
          - generic [ref=e80]:
            - img [ref=e81]
            - generic [ref=e82]:
              - heading [level=1] [ref=e83]:
                - generic [ref=e84]: Welcome, Joseph
              - paragraph [ref=e85]:
                - generic [ref=e86]: You can redeem
                - strong [ref=e87]: $3,400.95
              - text: 
          - generic [ref=e88]:
            - img [ref=e89]
            - generic [ref=e91]:
              - generic:
                - generic: PBL_CREDITS
                - strong: 1,500
              - generic:
                - generic: FREE_MONEY
                - strong: 3,400.95
          - img [ref=e92]
          - img [ref=e93]
        - list [ref=e94]:
          - listitem [ref=e95] [cursor=pointer]:
            - button "1" [ref=e96]
          - listitem [ref=e97] [cursor=pointer]:
            - button "2" [ref=e98]
          - listitem [ref=e99] [cursor=pointer]:
            - button "3" [ref=e100]
          - listitem [ref=e101] [cursor=pointer]:
            - button "4" [ref=e102]
      - generic [ref=e103]:
        - heading "Reward Categories" [level=2] [ref=e105]
        - generic [ref=e107]:
          - generic [ref=e108] [cursor=pointer]:
            - figure [ref=e109]:
              - img "All Categories" [ref=e110]
            - generic [ref=e111]: All Categories
          - generic [ref=e112] [cursor=pointer]:
            - figure [ref=e113]:
              - img "Eateries" [ref=e114]
            - generic [ref=e115]: Eateries
          - generic [ref=e116] [cursor=pointer]:
            - figure [ref=e117]:
              - img "Lifestyle" [ref=e118]
            - generic [ref=e119]: Lifestyle
          - generic [ref=e120] [cursor=pointer]:
            - figure [ref=e121]:
              - img "Sports and Outdoors" [ref=e122]
            - generic [ref=e123]: Sports and Outdoors
      - contentinfo [ref=e124]:
        - generic [ref=e127]: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
    - text:      
  - generic [ref=e129]:
    - generic [ref=e130]:
      - generic [ref=e131]:
        - heading "Player Balances" [level=2] [ref=e132]
        - generic [ref=e133]: "2"
      - button "" [ref=e134] [cursor=pointer]:
        - generic [ref=e135]: 
    - generic [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e140]:
          - generic [ref=e141]: PBL_CREDITS
          - strong [ref=e142]: 1,500
        - button "View Details" [ref=e143] [cursor=pointer]
      - generic [ref=e144]:
        - generic [ref=e146]:
          - generic [ref=e147]: FREE_MONEY
          - strong [ref=e148]: 3,400.95
        - button "View Details" [ref=e149] [cursor=pointer]
  - text: 
```

# Test source

```ts
  1  | import { test, expect,chromium } from '@playwright/test';
  2  | import { Byodhomepage } from '../BYODPages/Byodhomepage';
  3  | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  4  | import { Byodcartpage } from '../BYODPages/Byodcartpage';
  5  | 
  6  | let page;
  7  | let context;
  8  | 
  9  | test.beforeAll(async ({browser}) => {
  10 |   
  11 |   context = await browser.newContext();
  12 |   page = await context.newPage();
  13 |   
  14 | 
  15 |   await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');
  16 | 
  17 |   const login =new Byodloginpage(page);
  18 |   const home=new Byodhomepage(page);
  19 |      
  20 |       //Acct no login implementation
  21 |       await page.waitForTimeout(3000)
  22 |       await login.AcctnoLogin('500002','1285')
  23 |       await page.waitForTimeout(1000)
  24 |       await login.signByod()
  25 | 
  26 |      await expect(page.locator(home.carticon)).toBeVisible({timeout:10000})
  27 |      // await page.waitForTimeout(10000)
  28 | });
  29 | 
  30 | test.skip("Homepage actions",async({})=>{
  31 | 
  32 |     //home page 
  33 | 
  34 |     const home=new Byodhomepage(page);
  35 |     await page.waitForTimeout(3000)
  36 |     home.onclickclothesandshoes()
  37 |     await page.waitForTimeout(5000)
  38 | 
  39 | })
  40 | 
  41 | test.skip("Homepage searchtile actions",async({})=>{
  42 | 
  43 |     //home page 
  44 | 
  45 |     const home=new Byodhomepage(page);
  46 |     await page.waitForTimeout(3000)
  47 |     //home.tilesearchbox()
  48 |   
  49 |     //await page.locator("//span[@class='icon-search']").click()
  50 |     await page.getByPlaceholder('Search').fill('Canada');
  51 |     await page.waitForSelector("(//span[@class='mat-option-text'])[2]")
  52 | 
  53 |     const x=await page.$$("(//span[@class='mat-option-text'])[2]")
  54 | 
  55 |     for(let m of x){
  56 |         const r=await m.textContent()
  57 | 
  58 |         if(r.includes("Canada Dry Zero Sugar Cherry Gingerale Fruit Splash")){
  59 |            await m.click()
  60 |             console.log("item found")
  61 |         }
  62 |     }
  63 | 
  64 |     await page.waitForTimeout(5000)
  65 | 
  66 |     await page.click("(//i[@class='icon-home'])[1]")
  67 | 
  68 | })
  69 | 
  70 | test.skip("Click action usermenu",async({})=>{
  71 | 
  72 |     const home=new Byodhomepage(page);
  73 |     
  74 |     await home.tileusermenu()
  75 |     await page.waitForTimeout(3000)
  76 | 
  77 | 
  78 | })
  79 | 
  80 | test.skip("shopping cart quantity selection",async({})=>{
  81 |       
  82 |     const cart = new Byodcartpage(page);
  83 |     await cart.quantityclick();
  84 | })
  85 | 
  86 | test("Muliple player balance screen",async({})=>{
  87 | 
  88 |     const home=new Byodhomepage(page);
  89 |     await home.tilemultipleplayerbalicon()
  90 | 
> 91 |     await page.waitForSelector("//div[@class='header-title']/h2/span").toBeVisible({timeout:10000})
     |                                                                        ^ TypeError: page.waitForSelector(...).toBeVisible is not a function
  92 |     await expect(page.locator("//div[@class='header-title']/h2/span")).toHaveText('Player Balances')
  93 |     await page.waitForTimeout(3000)
  94 | 
  95 | })
  96 | 
  97 | 
```