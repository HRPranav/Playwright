# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Byodaddresspage.spec.js >> Homepage actions
- Location: tests\Byodaddresspage.spec.js:38:5

# Error details

```
"beforeAll" hook timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - figure [ref=e6]
    - generic [ref=e7]:
      - generic [ref=e9]:
        - figure [ref=e10]:
          - img [ref=e11]
        - generic [ref=e12]:
          - heading "Sign in to continue" [level=1] [ref=e13]
          - generic [ref=e14]:
            - text: 
            - generic [ref=e15]:
              - generic [ref=e16]: Account Number *
              - textbox [ref=e21]
            - generic [ref=e23] [cursor=pointer]: Use Phone Number
            - generic [ref=e24]:
              - generic [ref=e25]: PIN *
              - generic [ref=e29]:
                - textbox [ref=e30]
                - generic [ref=e31]: 
            - generic [ref=e32]:
              - button "Sign In"
      - paragraph [ref=e33]: © 2026 2024 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
  - text: 
```

# Test source

```ts
  1   | import {test,expect,chromium} from "@playwright/test"
  2   | import { Byodloginpage } from "../BYODPages/ByodLoginpage"
  3   | import { Byodhomepage } from "../BYODPages/Byodhomepage"
  4   | import { Byoditemlistingpage } from "../BYODPages/Byoditemlistingpage"
  5   | import { Byodcartpage } from "../BYODPages/Byodcartpage"
  6   | import { Byodaddresspage } from "../BYODPages/Byodaddresspage"
  7   | import { readCSV } from "../utils/Csvreader"
  8   | 
  9   | const addressdata= readCSV('c:/playwright/tests/Testdatafolder/Addressdata.csv')
  10  | 
  11  | 
  12  | 
  13  | test.describe.configure({ mode: 'serial' });
  14  | 
  15  | let page;
  16  | let context;
  17  | 
> 18  | test.beforeAll(async({browser})=>{
      |      ^ "beforeAll" hook timeout of 30000ms exceeded.
  19  | 
  20  |     context= await browser.newContext()
  21  |     page= await context.newPage()
  22  | 
  23  |     await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');
  24  | 
  25  |     const login =new Byodloginpage(page);
  26  | 
  27  |      //Acct no login implementation
  28  |       await page.waitForTimeout(10000)
  29  |       await login.AcctnoLogin('500002','1285')
  30  |       await page.waitForTimeout(1000)
  31  |       await login.signByod()
  32  |   
  33  |       await page.waitForTimeout(10000)
  34  | 
  35  | 
  36  | })
  37  | 
  38  | test("Homepage actions",async({})=>{
  39  | 
  40  |     //home page 
  41  | 
  42  |     const home=new Byodhomepage(page);
  43  |     await page.waitForTimeout(3000)
  44  |     home.onclickAllcategories()
  45  |     await page.waitForTimeout(5000)
  46  | 
  47  | })
  48  | 
  49  | test("Item listing screen",async({})=>{
  50  | 
  51  | 
  52  |     //item listing screen
  53  | 
  54  |     const item= new Byoditemlistingpage(page);
  55  |     await page.waitForTimeout(2000)
  56  |     await item.addcartbutton()
  57  |     await page.waitForTimeout(2000)
  58  |     await item.addcartlogobutton()
  59  |     
  60  | })
  61  | 
  62  | test("proceed to checkout in cart screen",async()=>{
  63  | 
  64  |     const cart=new Byodcartpage(page)
  65  |     await page.waitForTimeout(2000)
  66  |     await cart.checkoutbutton()
  67  |     await page.waitForTimeout(10000)
  68  | })
  69  | 
  70  | 
  71  | 
  72  | 
  73  | // addressdata.forEach((data,index)=>{
  74  | 
  75  | //     console.log("Keys:", Object.keys(data));
  76  | 
  77  | //     test(`address ${data.Firstname || 'missing'} ${index} `,async()=>{
  78  | 
  79  | //     const address=new Byodaddresspage(page)
  80  | 
  81  | //     await address.firstname1(data.Firstname)
  82  | 
  83  | //     await page.waitForTimeout(3000)
  84  | 
  85  | //     })
  86  | 
  87  | // })
  88  | 
  89  | 
  90  | const cleanData = addressdata.map(row => {
  91  |   const newRow = {};
  92  |   for (const key in row) {
  93  |     newRow[key.trim()] = typeof row[key] === 'string'
  94  |       ? row[key].trim()
  95  |       : row[key];
  96  |   }
  97  |   return newRow;
  98  | });
  99  | 
  100 | cleanData.forEach((data, index) => {
  101 |   console.log("Keys:", Object.keys(data));
  102 |   test(`address ${data.Firstname || 'missing'} ${index}`, async ({ }) => {
  103 |     const address = new Byodaddresspage(page);
  104 |     await address.firstname1(data.Firstname);
  105 |     await page.waitForTimeout(1000)
  106 |     await address.lastname1(data.Lastname)
  107 |     await page.waitForTimeout(1000)
  108 |     await address.phonemo(data.Mobile)
  109 |     await page.waitForTimeout(1000)
  110 |     await address.Email1(data.email)
  111 |     await page.waitForTimeout(1000)
  112 |     await address.address_1(data.address1)
  113 |     await page.waitForTimeout(1000)
  114 |     await address.address_2(data.address2)
  115 |     await page.waitForTimeout(1000)
  116 |     await address.city_1(data.city)
  117 |     await page.waitForTimeout(1000)
  118 |     await address.zip_1(data.zipcode)
```