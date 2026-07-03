# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODLogin.spec.js >> BYOD Login using coupons code PBfrE4BaYNYN
- Location: tests\BYODLogin.spec.js:15:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//figure[@id=\'profileIconImg\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for locator('//figure[@id=\'profileIconImg\']')

```

```yaml
- figure
- figure:
  - img
- heading "Shopping Event" [level=1]
- text: Patron ID Already Used. Patron ID *
- textbox: PBfrE4BaYNYN
- text: 
- paragraph: On behalf of our entire leadership team, thank you for your ongoing service, support and contributions. This is the perfect occasion to reflect on your past achievements and take pride in knowing that you are a valued member in our organization.
- paragraph: We are grateful to have you as part of our team and appreciate your years of dedicated service. You have our very
- heading "best wishes" [level=3]
- text: for continued success with Light & Wonder!
- paragraph
- button "Continue"
- paragraph: Gambling Problem? Call 1-800-522-4700
- paragraph: © 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  3   | 
  4   | const coupons =require('c:/playwright/tests/Testdatafolder/Couponcodedata.json')
  5   | 
  6   | test.describe.configure({ mode: 'serial' });
  7   | 
  8   | coupons.forEach((data)=>{
  9   | 
  10  |     if(data.run==false){
  11  |         console.log("Coupon code already used")
  12  |         //return
  13  |     }
  14  | 
  15  |     test(`BYOD Login using coupons code ${data.couponcode}`,async ({page})=>{
  16  | 
  17  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  18  | 
  19  |     const title= await page.title()
  20  | 
  21  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  22  | 
  23  |     const login =new Byodloginpage(page);
  24  |     //Coupon code 
  25  | 
  26  |       await login.couponcodelogin(data.couponcode)
  27  |       await page.waitForTimeout(3000)
  28  |       await login.signByod()
  29  |       await page.waitForTimeout(7000)
  30  | 
  31  |       if(data.login==true)
  32  |        {
> 33  |           await expect.soft(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
      |                                                                             ^ Error: expect(locator).toBeVisible() failed
  34  |        }
  35  | 
  36  |        else{
  37  |         await expect(page.locator("//div[@class='genericErrors']")).toHaveText('Patron ID Already Used.')
  38  |        }
  39  | 
  40  | 
  41  |      })
  42  | })
  43  | 
  44  | 
  45  | /*test("BYOD Login using acct and phone numbers",async ({page})=>{
  46  | 
  47  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  48  | 
  49  |     const title= await page.title()
  50  | 
  51  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  52  | 
  53  |     const login =new Byodloginpage(page);
  54  |    
  55  |     //Acct no login implementation
  56  |     await login.AcctnoLogin('500002','1285')
  57  |     await page.waitForTimeout(1000)
  58  |     await login.signByod()
  59  | 
  60  |     await page.waitForTimeout(10000)
  61  | 
  62  |     //Phone no login implementation
  63  |     await login.phonenologin('6361997213','1285')
  64  |     await page.waitForTimeout(1000)
  65  |     await login.signByod()
  66  | 
  67  |     await page.waitForTimeout(10000)
  68  | })*/
  69  | 
  70  | // test.only("BYOD Login using coupon code",async ({page})=>{
  71  | 
  72  | //     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  73  | 
  74  | //     const title= await page.title()
  75  | 
  76  | //     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  77  | 
  78  | //     const login =new Byodloginpage(page);
  79  | //     //Coupon code 
  80  | 
  81  | //     coupons.forEach((data)=>{
  82  | 
  83  | //       await login.couponcodelogin(i.couponcode)
  84  | //       await page.waitForTimeout(3000)
  85  | //       await login.signByod()
  86  | //       await page.waitForTimeout(10000)
  87  | 
  88  | //     })
  89  | 
  90  |      
  91  | 
  92  |       
  93  |     
  94  |     
  95  |     // await page.waitForTimeout(3000)
  96  |     // await login.signByod()
  97  | 
  98  |     // await page.waitForTimeout(10000)
  99  | 
  100 |     
  101 | 
  102 |     
  103 | 
  104 | 
  105 | 
  106 |     // await page.fill('#mat-input-1','500002')
  107 | 
  108 |     // await page.fill('#mat-input-0','1285')
  109 | 
  110 |     // await page.click('//div[@class="loginAction_wrap ng-star-inserted"]//button')
  111 | 
  112 |     // await page.waitForTimeout(10000)
  113 | 
  114 | 
  115 | //})
  116 | 
  117 | 
  118 | //test.afterall("Logout",()=>{
  119 | 
  120 | //})
  121 | 
  122 | //test("Landing screen",async ({page})=>{
  123 | 
  124 | 
  125 |     
  126 | 
  127 | 
  128 | 
  129 | //})
```