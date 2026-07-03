# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODLogin.spec.js >> Byod login Acct 500002
- Location: tests\BYODLogin.spec.js:54:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//figure[@id=\'profileIconImg\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//figure[@id=\'profileIconImg\']')

```

```yaml
- figure
- figure:
  - img
- heading [level=1]
- text: "*"
- textbox: "500002"
- text: "*"
- textbox: "1285"
- text: 
- button
- paragraph: © 2026 2024 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
- img
- text: Just a few seconds...
```

```
Error: page.waitForTimeout: Test ended.
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
  9   | test.describe.configure({ mode: 'serial' });
  10  | 
  11  | //  Coupon code login flow using Data set
  12  | /*coupons.forEach((data)=>{
  13  | 
  14  |     // if(data.run==false){
  15  |     //     console.log("Coupon code already used")
  16  |     //     //return
  17  |     // }
  18  | 
  19  |     test(`BYOD Login using coupons code ${data.couponcode}`,async ({page})=>{
  20  | 
  21  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  22  | 
  23  |     const title= await page.title()
  24  | 
  25  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  26  | 
  27  |     const login =new Byodloginpage(page);
  28  |     //Coupon code 
  29  | 
  30  |       await login.couponcodelogin(data.couponcode)
  31  |       await page.waitForTimeout(3000)
  32  |       await login.signByod()
  33  |       await page.waitForTimeout(7000)
  34  | 
  35  |       if(data.login==true)
  36  |        {
  37  |           await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
  38  |        }
  39  | 
  40  |        else{
  41  |         await expect(login.couponcode_Genericerror()).toHaveText('Patron ID Already Used.')
  42  |        }
  43  | 
  44  | 
  45  |      })
  46  | }) */
  47  | 
  48  | 
  49  | 
  50  | //Byod login using acct no
  51  | 
  52  | logindata.forEach((acct)=>{
  53  | 
  54  |     test(`Byod login Acct ${acct.Acctno}`,async ({page})=>{
  55  |         
  56  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  57  | 
  58  |     const title= await page.title()
  59  | 
  60  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  61  | 
  62  |      const login =new Byodloginpage(page);
  63  | 
  64  |      test.step("Login with Acct number",async()=>{
  65  |            
  66  |         login.AcctnoLogin(acct.Acctno,acct.pin)
  67  |         await page.waitForTimeout(1000)
  68  |      })
  69  | 
  70  |      
  71  |     test.step("Login with Acct number",async()=>{
  72  |         await login.signByod()
> 73  |         await page.waitForTimeout(7000)
      |                    ^ Error: page.waitForTimeout: Test ended.
  74  | 
  75  |     })
  76  |      
  77  |     
  78  | 
  79  |     if(acct.login=="fail"){
  80  |     
  81  |        await expect(page.locator("//span[contains(text(),'Something went wrong. Please contact our customer ')]")).toHaveText("Something went wrong. Please contact our customer support executives at checkout counters for assistance.")
  82  | 
  83  |      }
  84  |      else{
  85  |         await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
  86  |      }
  87  |      
  88  |      
  89  |     })
  90  |     
  91  | })
  92  | 
  93  | /*test("BYOD Login using acct and phone numbers",async ({page})=>{
  94  | 
  95  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  96  | 
  97  |     const title= await page.title()
  98  | 
  99  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  100 | 
  101 |     const login =new Byodloginpage(page);
  102 |    
  103 |     //Acct no login implementation
  104 |     await login.AcctnoLogin('500002','1285')
  105 |     await page.waitForTimeout(1000)
  106 |     await login.signByod()
  107 | 
  108 |     await page.waitForTimeout(10000)
  109 | 
  110 |     //Phone no login implementation
  111 |     await login.phonenologin('6361997213','1285')
  112 |     await page.waitForTimeout(1000)
  113 |     await login.signByod()
  114 | 
  115 |     await page.waitForTimeout(10000)
  116 | })*/
  117 | 
  118 | // test.only("BYOD Login using coupon code",async ({page})=>{
  119 | 
  120 | //     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  121 | 
  122 | //     const title= await page.title()
  123 | 
  124 | //     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  125 | 
  126 | //     const login =new Byodloginpage(page);
  127 | //     //Coupon code 
  128 | 
  129 | //     coupons.forEach((data)=>{
  130 | 
  131 | //       await login.couponcodelogin(i.couponcode)
  132 | //       await page.waitForTimeout(3000)
  133 | //       await login.signByod()
  134 | //       await page.waitForTimeout(10000)
  135 | 
  136 | //     })
  137 | 
  138 |      
  139 | 
  140 |       
  141 |     
  142 |     
  143 |     // await page.waitForTimeout(3000)
  144 |     // await login.signByod()
  145 | 
  146 |     // await page.waitForTimeout(10000)
  147 | 
  148 |     
  149 | 
  150 |     
  151 | 
  152 | 
  153 | 
  154 |     // await page.fill('#mat-input-1','500002')
  155 | 
  156 |     // await page.fill('#mat-input-0','1285')
  157 | 
  158 |     // await page.click('//div[@class="loginAction_wrap ng-star-inserted"]//button')
  159 | 
  160 |     // await page.waitForTimeout(10000)
  161 | 
  162 | 
  163 | //})
  164 | 
  165 | 
  166 | //test.afterall("Logout",()=>{
  167 | 
  168 | //})
  169 | 
  170 | //test("Landing screen",async ({page})=>{
  171 | 
  172 | 
  173 |     
```