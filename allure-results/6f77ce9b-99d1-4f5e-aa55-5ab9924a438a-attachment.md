# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Byoditemlisting.spec.js >> Pricefilter selection
- Location: tests\Byoditemlisting.spec.js:65:5

# Error details

```
TypeError: item.pricefilter1 is not a function
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
            - generic [ref=e36]:
              - generic [ref=e37]: 
              - generic [ref=e38]: "42"
          - generic "User Profile" [ref=e39] [cursor=pointer]:
            - figure [ref=e40]
      - text: 
    - generic:
      - generic:
        - text: 
        - generic:    
    - generic [ref=e41]:
      - generic [ref=e42]:
        - figure [ref=e43]
        - generic [ref=e44]: Joseph, You have $3,062.67 out of $3,433.53 to redeem for this transaction.
        - generic [ref=e46]: 
      - text: 
    - generic [ref=e49]:
      - list [ref=e50]:
        - listitem [ref=e51] [cursor=pointer]:
          - generic [ref=e52]: All
        - listitem [ref=e53] [cursor=pointer]:
          - generic [ref=e54]: Life Style
        - listitem [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: Lifestyle
        - listitem [ref=e57] [cursor=pointer]:
          - generic [ref=e58]: Sports & Outdoors
      - generic [ref=e59]:
        - heading "All Categories - 1 Item" [level=3] [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]: "Sort by:"
          - generic [ref=e64] [cursor=pointer]:
            - generic [ref=e65]: Price High to Low
            - generic [ref=e66]: 
        - generic [ref=e69]:
          - generic [ref=e70]:
            - heading "Filter" [level=2] [ref=e71]
            - text: 
          - generic [ref=e73]:
            - heading "Price" [level=3] [ref=e74]
            - list [ref=e76]:
              - listitem [ref=e77]:
                - generic [ref=e80] [cursor=pointer]:
                  - generic [ref=e81]:
                    - checkbox "$1.00 - $100.00" [ref=e82]
                    - generic:
                      - img
                  - generic [ref=e83]: $1.00 - $100.00
              - listitem [ref=e84]:
                - generic [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - checkbox "$100.00 - $500.00" [checked] [ref=e89]
                    - generic:
                      - img
                  - generic [ref=e90]: $100.00 - $500.00
              - listitem [ref=e91]:
                - generic [ref=e94] [cursor=pointer]:
                  - generic [ref=e95]:
                    - checkbox "$500.00 - $2,000.00" [checked] [ref=e96]
                    - generic:
                      - img
                  - generic [ref=e97]: $500.00 - $2,000.00
              - listitem [ref=e98]:
                - generic [ref=e101] [cursor=pointer]:
                  - generic [ref=e102]:
                    - checkbox "$2,000.00 - $5,000.00" [checked] [active] [ref=e103]
                    - generic:
                      - img
                  - generic [ref=e104]: $2,000.00 - $5,000.00
              - listitem [ref=e105]:
                - generic [ref=e108] [cursor=pointer]:
                  - generic [ref=e109]:
                    - checkbox "$5,000.00 & Above" [ref=e110]
                    - generic:
                      - img
                  - generic [ref=e111]: $5,000.00 & Above
              - listitem [ref=e112]:
                - generic [ref=e115] [cursor=pointer]:
                  - generic [ref=e116]:
                    - checkbox "$1.00 - My Current Balance" [ref=e117]
                    - generic:
                      - img
                  - generic [ref=e118]: $1.00 - My Current Balance
          - button "Clear All" [ref=e119] [cursor=pointer]
        - generic [ref=e124] [cursor=pointer]:
          - figure [ref=e125]:
            - img "JVC - Open-Ear Headphones HANP1TB - Black" [ref=e126]
          - heading "JVC - Open-Ear Headphones HANP1TB - Black" [level=2] [ref=e127]
          - strong [ref=e128]:
            - generic [ref=e129]: $155.99
          - strong
          - button "Add to cart Go to Cart    " [ref=e131]:
            - generic [ref=e132]: Add to cart
            - generic [ref=e133]:
              - generic [ref=e134]: Go to Cart
              - generic [ref=e135]:
                - generic [ref=e136]: 
                - generic [ref=e137]: 
                - generic [ref=e138]: 
                - generic [ref=e139]: 
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
  5  | import { Byoditemlistingpage } from '../BYODPages/Byoditemlistingpage';
  6  | 
  7  | 
  8  | test.describe.configure({ mode: 'serial' });
  9  | let page;
  10 | let context;
  11 | 
  12 | test.beforeAll(async ({browser}) => {
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
  51 |    // await item.addcartlogobutton()
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
  69 |     await expect(page.locator('//footer[@class="filter-footer"]/button[1]')).toHaveText('Clear All')
> 70 |     await item.pricefilter1()
     |                ^ TypeError: item.pricefilter1 is not a function
  71 |     await expect(page.locator('//footer[@class="filter-footer"]/button[1]')).toHaveText('Clear All')
  72 |     await item.pricefilter2()
  73 |     await expect(page.locator('//footer[@class="filter-footer"]/button[1]')).toHaveText('Clear All')
  74 |     await item.pricefilter3()
  75 |     await expect(page.locator('//footer[@class="filter-footer"]/button[1]')).toHaveText('Clear All')
  76 |     await item.pricefilter4()
  77 |     await expect(page.locator('//footer[@class="filter-footer"]/button[1]')).toHaveText('Clear All')
  78 |     await item.pricefilter5()
  79 | })
```