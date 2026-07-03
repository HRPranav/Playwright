# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODLogin.spec.js >> Byod login Acct: 500009
- Location: tests\BYODLogin.spec.js:54:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//span[contains(text(),\'Something went wrong. Please contact our customer \')]')
Expected: "Something went wrong. Please contact our customer support executives at checkout counters for assistance."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//span[contains(text(),\'Something went wrong. Please contact our customer \')]')

```

```yaml
- banner:
  - text: 
  - link:
    - /url: /home?DEVICEID=INT
    - img
  - combobox "Search"
  - button ""
  - text:    
  - figure
- list:
  - listitem: All Categories
  - listitem: Clothes, Shoes & Watches
  - listitem: Lifestyle
  - listitem: Sports & Outdoors
- figure
- text: Joseph, You have $ 2,000 to redeem for this transaction. 
- img
- heading "Welcome, Joseph" [level=1]
- paragraph:
  - text: You can redeem
  - strong: $ 2,000
- list:
  - listitem:
    - button "1"
  - listitem:
    - button "2"
  - listitem:
    - button "3"
  - listitem:
    - button "4"
- heading "Reward Categories" [level=2]
- figure:
  - img "All Categories"
- text: All Categories
- figure:
  - img "Clothes, Shoes & Watches"
- text: Clothes, Shoes & Watches
- figure:
  - img "Lifestyle"
- text: Lifestyle
- figure:
  - img "Sports & Outdoors"
- text: Sports & Outdoors
- contentinfo: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  3   | import { readCSV } from '../utils/Csvreader';
  4   | 
  5   | const coupons =require('c:/playwright/tests/Testdatafolder/Couponcodedata.json')
  6   | 
  7   | const logindata=readCSV('c:/playwright/tests/Testdatafolder/Logindata.csv')
  8   | 
  9   | 
  10  | test.describe.configure({ mode: 'serial' });
  11  | 
  12  | //  Coupon code login flow using Data set
  13  | /*coupons.forEach((data)=>{
  14  | 
  15  |     // if(data.run==false){
  16  |     //     console.log("Coupon code already used")
  17  |     //     //return
  18  |     // }
  19  | 
  20  |     test(`BYOD Login using coupons code ${data.couponcode}`,async ({page})=>{
  21  | 
  22  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  23  | 
  24  |     const title= await page.title()
  25  | 
  26  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  27  | 
  28  |     const login =new Byodloginpage(page);
  29  |     //Coupon code 
  30  | 
  31  |       await login.couponcodelogin(data.couponcode)
  32  |       await page.waitForTimeout(3000)
  33  |       await login.signByod()
  34  |       await page.waitForTimeout(7000)
  35  | 
  36  |       if(data.login==true)
  37  |        {
  38  |           await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
  39  |        }
  40  | 
  41  |        else{
  42  |         await expect(login.couponcode_Genericerror()).toHaveText('Patron ID Already Used.')
  43  |        }
  44  | 
  45  | 
  46  |      })
  47  | }) */
  48  | 
  49  | 
  50  | 
  51  | 
  52  | logindata.forEach((acct)=>{
  53  | 
  54  |     test(`Byod login Acct: ${acct.Acctno}`,async ({page})=>{
  55  |         
  56  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  57  | 
  58  |     const title= await page.title()
  59  | 
  60  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  61  | 
  62  |      const login =new Byodloginpage(page);
  63  | 
  64  |      login.AcctnoLogin(acct.Acctno,acct.pin)
  65  | 
  66  |      await page.waitForTimeout(1000)
  67  |      await login.signByod()
  68  |      await page.waitForTimeout(7000)
  69  | 
  70  |      if(acct.login=="fail"){
  71  |     
> 72  |        await expect(page.locator("//span[contains(text(),'Something went wrong. Please contact our customer ')]")).toHaveText("Something went wrong. Please contact our customer support executives at checkout counters for assistance.")
      |                                                                                                                    ^ Error: expect(locator).toHaveText(expected) failed
  73  | 
  74  |      }
  75  |      else{
  76  |         await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
  77  |      }
  78  | 
  79  | 
  80  |     })
  81  |     
  82  |     
  83  | 
  84  | })
  85  | 
  86  | /*test("BYOD Login using acct and phone numbers",async ({page})=>{
  87  | 
  88  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  89  | 
  90  |     const title= await page.title()
  91  | 
  92  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  93  | 
  94  |     const login =new Byodloginpage(page);
  95  |    
  96  |     //Acct no login implementation
  97  |     await login.AcctnoLogin('500002','1285')
  98  |     await page.waitForTimeout(1000)
  99  |     await login.signByod()
  100 | 
  101 |     await page.waitForTimeout(10000)
  102 | 
  103 |     //Phone no login implementation
  104 |     await login.phonenologin('6361997213','1285')
  105 |     await page.waitForTimeout(1000)
  106 |     await login.signByod()
  107 | 
  108 |     await page.waitForTimeout(10000)
  109 | })*/
  110 | 
  111 | // test.only("BYOD Login using coupon code",async ({page})=>{
  112 | 
  113 | //     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  114 | 
  115 | //     const title= await page.title()
  116 | 
  117 | //     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  118 | 
  119 | //     const login =new Byodloginpage(page);
  120 | //     //Coupon code 
  121 | 
  122 | //     coupons.forEach((data)=>{
  123 | 
  124 | //       await login.couponcodelogin(i.couponcode)
  125 | //       await page.waitForTimeout(3000)
  126 | //       await login.signByod()
  127 | //       await page.waitForTimeout(10000)
  128 | 
  129 | //     })
  130 | 
  131 |      
  132 | 
  133 |       
  134 |     
  135 |     
  136 |     // await page.waitForTimeout(3000)
  137 |     // await login.signByod()
  138 | 
  139 |     // await page.waitForTimeout(10000)
  140 | 
  141 |     
  142 | 
  143 |     
  144 | 
  145 | 
  146 | 
  147 |     // await page.fill('#mat-input-1','500002')
  148 | 
  149 |     // await page.fill('#mat-input-0','1285')
  150 | 
  151 |     // await page.click('//div[@class="loginAction_wrap ng-star-inserted"]//button')
  152 | 
  153 |     // await page.waitForTimeout(10000)
  154 | 
  155 | 
  156 | //})
  157 | 
  158 | 
  159 | //test.afterall("Logout",()=>{
  160 | 
  161 | //})
  162 | 
  163 | //test("Landing screen",async ({page})=>{
  164 | 
  165 | 
  166 |     
  167 | 
  168 | 
  169 | 
  170 | //})
```