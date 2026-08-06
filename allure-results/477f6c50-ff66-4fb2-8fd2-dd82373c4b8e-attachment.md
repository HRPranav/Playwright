# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODhomepage.spec.js >> Homepage searchtile actions
- Location: tests\BYODhomepage.spec.js:41:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[@class=\'icon-cart\']')
Expected: visible
Error: strict mode violation: locator('//span[@class=\'icon-cart\']') resolved to 13 elements:
    1) <span class="icon-cart" _ngcontent-hwo-c70=""></span> aka locator('.icon-cart').first()
    2) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka getByRole('button', { name: 'Add to cart Go to Cart    ' }).first()
    3) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka getByRole('button', { name: 'Add to cart Go to Cart    ' }).nth(1)
    4) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka getByRole('button', { name: 'Add to cart Go to Cart    ' }).nth(2)
    5) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka getByRole('button', { name: 'Add to cart Go to Cart    ' }).nth(3)
    6) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka getByRole('button', { name: 'Add to cart Go to Cart    ' }).nth(4)
    7) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka getByRole('button', { name: 'Add to cart Go to Cart    ' }).nth(5)
    8) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka locator('div:nth-child(7) > .dsButton > .BtnAddToCart')
    9) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka locator('div:nth-child(8) > .dsButton > .BtnAddToCart')
    10) <span class="icon-cart" _ngcontent-hwo-c87=""></span> aka locator('div:nth-child(9) > .dsButton > .BtnAddToCart')
    ...

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('//span[@class=\'icon-cart\']')

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
          - /url: /home?category=All%20Categories
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
            - generic [ref=e37]: 
          - generic "User Profile" [ref=e38] [cursor=pointer]:
            - figure [ref=e39]
      - text: 
    - generic:
      - generic:
        - text: 
        - generic:    
    - generic [ref=e40]:
      - generic [ref=e41]:
        - figure [ref=e42]
        - generic [ref=e43]: Joseph, You have $3,400.95 to redeem for this transaction.
        - generic [ref=e45]: 
      - text: 
    - generic [ref=e48]:
      - list [ref=e49]:
        - listitem [ref=e50] [cursor=pointer]:
          - generic [ref=e51]: All
        - listitem [ref=e52] [cursor=pointer]:
          - generic [ref=e53]: Eateries
        - listitem [ref=e54] [cursor=pointer]:
          - generic [ref=e55]: Lifestyle
        - listitem [ref=e56] [cursor=pointer]:
          - generic [ref=e57]: Sports and Outdoors
      - generic [ref=e58]:
        - heading "All Categories - 29 Items" [level=3] [ref=e59]
        - generic [ref=e60]:
          - generic [ref=e61]: "Sort by:"
          - generic [ref=e63] [cursor=pointer]:
            - generic [ref=e64]: Price Low to High
            - generic [ref=e65]: 
        - generic [ref=e68]:
          - generic [ref=e69]:
            - heading "Filter" [level=2] [ref=e70]
            - text: 
          - generic [ref=e72]:
            - heading "Price" [level=3] [ref=e73]
            - list [ref=e75]:
              - listitem [ref=e76]:
                - generic [ref=e79] [cursor=pointer]:
                  - generic [ref=e80]:
                    - checkbox "$1.00 - $100.00" [ref=e81]
                    - generic:
                      - img
                  - generic [ref=e82]: $1.00 - $100.00
              - listitem [ref=e83]:
                - generic [ref=e86] [cursor=pointer]:
                  - generic [ref=e87]:
                    - checkbox "$100.00 - $500.00" [ref=e88]
                    - generic:
                      - img
                  - generic [ref=e89]: $100.00 - $500.00
              - listitem [ref=e90]:
                - generic [ref=e93] [cursor=pointer]:
                  - generic [ref=e94]:
                    - checkbox "$500.00 - $2,000.00" [ref=e95]
                    - generic:
                      - img
                  - generic [ref=e96]: $500.00 - $2,000.00
              - listitem [ref=e97]:
                - generic [ref=e100] [cursor=pointer]:
                  - generic [ref=e101]:
                    - checkbox "$2,000.00 - $5,000.00" [ref=e102]
                    - generic:
                      - img
                  - generic [ref=e103]: $2,000.00 - $5,000.00
              - listitem [ref=e104]:
                - generic [ref=e107] [cursor=pointer]:
                  - generic [ref=e108]:
                    - checkbox "$5,000.00 & Above" [ref=e109]
                    - generic:
                      - img
                  - generic [ref=e110]: $5,000.00 & Above
              - listitem [ref=e111]:
                - generic [ref=e114] [cursor=pointer]:
                  - generic [ref=e115]:
                    - checkbox "$1.00 - My Current Balance" [ref=e116]
                    - generic:
                      - img
                  - generic [ref=e117]: $1.00 - My Current Balance
          - button "Clear All" [ref=e118] [cursor=pointer]
        - generic [ref=e122]:
          - generic [ref=e123] [cursor=pointer]:
            - figure [ref=e124]:
              - img "V8 +ENERGY Strawberry Banana Energy Drink, Made with"
            - heading "V8 +ENERGY Strawberry Banana Energy Drink, Made with" [level=2] [ref=e125]
            - strong [ref=e126]:
              - generic [ref=e127]: $7.05
            - strong
            - button "Add to cart Go to Cart    " [ref=e129]:
              - generic [ref=e130]: Add to cart
              - generic [ref=e131]:
                - generic [ref=e132]: Go to Cart
                - generic [ref=e133]:
                  - generic [ref=e134]: 
                  - generic [ref=e135]: 
                  - generic [ref=e136]: 
                  - generic [ref=e137]: 
          - generic [ref=e138] [cursor=pointer]:
            - figure [ref=e139]:
              - img "Snack Pack Chocolate and Vanilla Pudding Cups Family"
            - heading "Snack Pack Chocolate and Vanilla Pudding Cups Family" [level=2] [ref=e140]
            - strong [ref=e141]:
              - generic [ref=e142]: $8.66
            - strong
            - button "Add to cart Go to Cart    " [ref=e144]:
              - generic [ref=e145]: Add to cart
              - generic [ref=e146]:
                - generic [ref=e147]: Go to Cart
                - generic [ref=e148]:
                  - generic [ref=e149]: 
                  - generic [ref=e150]: 
                  - generic [ref=e151]: 
                  - generic [ref=e152]: 
          - generic [ref=e153] [cursor=pointer]:
            - figure [ref=e154]:
              - img "Pop-Tarts Toaster Pastries, Breakfast Foods, Kids"
            - heading "Pop-Tarts Toaster Pastries, Breakfast Foods, Kids" [level=2] [ref=e155]
            - strong [ref=e156]:
              - generic [ref=e157]: $8.69
            - strong
            - button "Add to cart Go to Cart    " [ref=e159]:
              - generic [ref=e160]: Add to cart
              - generic [ref=e161]:
                - generic [ref=e162]: Go to Cart
                - generic [ref=e163]:
                  - generic [ref=e164]: 
                  - generic [ref=e165]: 
                  - generic [ref=e166]: 
                  - generic [ref=e167]: 
          - generic [ref=e168] [cursor=pointer]:
            - figure [ref=e169]:
              - img "Rice Krispies Treats Crispy Marshmallow Squares, Kids"
            - heading "Rice Krispies Treats Crispy Marshmallow Squares, Kids" [level=2] [ref=e170]
            - strong [ref=e171]:
              - generic [ref=e172]: $9.35
            - strong
            - button "Add to cart Go to Cart    " [ref=e174]:
              - generic [ref=e175]: Add to cart
              - generic [ref=e176]:
                - generic [ref=e177]: Go to Cart
                - generic [ref=e178]:
                  - generic [ref=e179]: 
                  - generic [ref=e180]: 
                  - generic [ref=e181]: 
                  - generic [ref=e182]: 
          - generic [ref=e183] [cursor=pointer]:
            - figure [ref=e184]:
              - img "Lipton Peach Iced Tea, 16.9 Fl Oz Bottles (Pack of 12)"
            - heading "Lipton Peach Iced Tea, 16.9 Fl Oz Bottles (Pack of 12)" [level=2] [ref=e185]
            - strong [ref=e186]:
              - generic [ref=e187]: $9.45
            - strong
            - button "Add to cart Go to Cart    " [ref=e189]:
              - generic [ref=e190]: Add to cart
              - generic [ref=e191]:
                - generic [ref=e192]: Go to Cart
                - generic [ref=e193]:
                  - generic [ref=e194]: 
                  - generic [ref=e195]: 
                  - generic [ref=e196]: 
                  - generic [ref=e197]: 
          - generic [ref=e198] [cursor=pointer]:
            - figure [ref=e199]:
              - img "Gatorade Thirst Quencher, Glacier Freeze, 12 Fl Oz"
            - heading "Gatorade Thirst Quencher, Glacier Freeze, 12 Fl Oz" [level=2] [ref=e200]
            - strong [ref=e201]:
              - generic [ref=e202]: $9.74
            - strong
            - button "Add to cart Go to Cart    " [ref=e204]:
              - generic [ref=e205]: Add to cart
              - generic [ref=e206]:
                - generic [ref=e207]: Go to Cart
                - generic [ref=e208]:
                  - generic [ref=e209]: 
                  - generic [ref=e210]: 
                  - generic [ref=e211]: 
                  - generic [ref=e212]: 
          - generic [ref=e213] [cursor=pointer]:
            - figure [ref=e214]:
              - img "Kool-Aid Jammers Drink, 30 Pouches, for School Lunches"
            - heading "Kool-Aid Jammers Drink, 30 Pouches, for School Lunches" [level=2] [ref=e215]
            - strong [ref=e216]:
              - generic [ref=e217]: $10.53
            - strong
            - button "Add to cart Go to Cart    " [ref=e219]:
              - generic [ref=e220]: Add to cart
              - generic [ref=e221]:
                - generic [ref=e222]: Go to Cart
                - generic [ref=e223]:
                  - generic [ref=e224]: 
                  - generic [ref=e225]: 
                  - generic [ref=e226]: 
                  - generic [ref=e227]: 
          - generic [ref=e228] [cursor=pointer]:
            - figure [ref=e229]:
              - img "Canada Dry Zero Sugar Cherry Gingerale Fruit Splash"
            - heading "Canada Dry Zero Sugar Cherry Gingerale Fruit Splash" [level=2] [ref=e230]
            - strong [ref=e231]:
              - generic [ref=e232]: $10.95
            - strong
            - button "Add to cart Go to Cart    " [ref=e234]:
              - generic [ref=e235]: Add to cart
              - generic [ref=e236]:
                - generic [ref=e237]: Go to Cart
                - generic [ref=e238]:
                  - generic [ref=e239]: 
                  - generic [ref=e240]: 
                  - generic [ref=e241]: 
                  - generic [ref=e242]: 
          - generic [ref=e243] [cursor=pointer]:
            - figure [ref=e244]:
              - img "Canada Dry Cherry Gingerale Fruit Splash 12oz, Pack of"
            - heading "Canada Dry Cherry Gingerale Fruit Splash 12oz, Pack of" [level=2] [ref=e245]
            - strong [ref=e246]:
              - generic [ref=e247]: $11.21
            - strong
            - button "Add to cart Go to Cart    " [ref=e249]:
              - generic [ref=e250]: Add to cart
              - generic [ref=e251]:
                - generic [ref=e252]: Go to Cart
                - generic [ref=e253]:
                  - generic [ref=e254]: 
                  - generic [ref=e255]: 
                  - generic [ref=e256]: 
                  - generic [ref=e257]: 
          - generic [ref=e258] [cursor=pointer]:
            - figure [ref=e259]:
              - img "Ritz, Fresh Stacks Original Crackers, Party Size, 23.7"
            - heading "Ritz, Fresh Stacks Original Crackers, Party Size, 23.7" [level=2] [ref=e260]
            - strong [ref=e261]:
              - generic [ref=e262]: $11.27
            - strong
            - button "Add to cart Go to Cart    " [ref=e264]:
              - generic [ref=e265]: Add to cart
              - generic [ref=e266]:
                - generic [ref=e267]: Go to Cart
                - generic [ref=e268]:
                  - generic [ref=e269]: 
                  - generic [ref=e270]: 
                  - generic [ref=e271]: 
                  - generic [ref=e272]: 
          - generic [ref=e273] [cursor=pointer]:
            - figure [ref=e274]:
              - img "Kraft Easy Mac and Cheese, 18 Packets, for Easy Dinner"
            - heading "Kraft Easy Mac and Cheese, 18 Packets, for Easy Dinner" [level=2] [ref=e275]
            - strong [ref=e276]:
              - generic [ref=e277]: $11.92
            - strong
            - button "Add to cart Go to Cart    " [ref=e279]:
              - generic [ref=e280]: Add to cart
              - generic [ref=e281]:
                - generic [ref=e282]: Go to Cart
                - generic [ref=e283]:
                  - generic [ref=e284]: 
                  - generic [ref=e285]: 
                  - generic [ref=e286]: 
                  - generic [ref=e287]: 
          - generic [ref=e288] [cursor=pointer]:
            - figure [ref=e289]:
              - img "Swanson White Premium Chunk Chicken Breast with Rib"
            - heading "Swanson White Premium Chunk Chicken Breast with Rib" [level=2] [ref=e290]
            - strong [ref=e291]:
              - generic [ref=e292]: $13.81
            - strong
            - button "Add to cart Go to Cart    " [ref=e294]:
              - generic [ref=e295]: Add to cart
              - generic [ref=e296]:
                - generic [ref=e297]: Go to Cart
                - generic [ref=e298]:
                  - generic [ref=e299]: 
                  - generic [ref=e300]: 
                  - generic [ref=e301]: 
                  - generic [ref=e302]: 
      - text:   
    - text:      
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
> 26 |      await expect(page.locator(home.carticon)).toBeVisible({timeout:10000})
     |                                                ^ Error: expect(locator).toBeVisible() failed
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
  41 | test.only("Homepage searchtile actions",async({})=>{
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
  70 | test("Click action usermenu",async({})=>{
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
  86 | 
  87 | 
```