# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODLogin.spec.js >> Byod login Acct 500002
- Location: tests\BYODLogin.spec.js:57:9

# Error details

```
Error: locator.fill: value: expected string, got number
```

```
Error: page.waitForTimeout: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - img
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  3   | import { readCSV } from '../utils/Csvreader';
  4   | import { readExcel } from '../utils/Excelreader';
  5   | 
  6   | const coupons =require('c:/playwright/tests/Testdatafolder/Couponcodedata.json')
  7   | 
  8   | const logindata=readCSV('c:/playwright/tests/Testdatafolder/Logindata.csv')
  9   | 
  10  | const userdata=readExcel('c:/playwright/tests/Testdatafolder/Exceldata.xlsx','Sheet1')
  11  | 
  12  | test.describe.configure({ mode: 'serial' });
  13  | 
  14  | //  Coupon code login flow using Data set
  15  | /*coupons.forEach((data)=>{
  16  | 
  17  |     // if(data.run==false){
  18  |     //     console.log("Coupon code already used")
  19  |     //     //return
  20  |     // }
  21  | 
  22  |     test(`BYOD Login using coupons code ${data.couponcode}`,async ({page})=>{
  23  | 
  24  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  25  | 
  26  |     const title= await page.title()
  27  | 
  28  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  29  | 
  30  |     const login =new Byodloginpage(page);
  31  |     //Coupon code 
  32  | 
  33  |       await login.couponcodelogin(data.couponcode)
  34  |       await page.waitForTimeout(3000)
  35  |       await login.signByod()
  36  |       await page.waitForTimeout(7000)
  37  | 
  38  |       if(data.login==true)
  39  |        {
  40  |           await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
  41  |        }
  42  | 
  43  |        else{
  44  |         await expect(login.couponcode_Genericerror()).toHaveText('Patron ID Already Used.')
  45  |        }
  46  | 
  47  | 
  48  |      })
  49  | }) */
  50  | 
  51  | 
  52  | 
  53  | //Byod login using acct no with csv file
  54  | 
  55  | userdata.forEach((acct)=>{
  56  | 
  57  |     test(`Byod login Acct ${acct.Acctno}`,async ({page})=>{
  58  |         
  59  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  60  | 
  61  |     const title= await page.title()
  62  | 
  63  |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  64  | 
  65  |      const login =new Byodloginpage(page);
  66  | 
  67  |      test.step("Login with Acct number",async()=>{
  68  |            
  69  |         login.AcctnoLogin(acct.Acctno,acct.pin)
  70  |         await page.waitForTimeout(1000)
  71  |      })
  72  | 
  73  |      
  74  |     test.step("On click sigin",async()=>{
  75  |         await login.signByod()
  76  |         
  77  | 
  78  |     })
  79  |      
> 80  |     await page.waitForTimeout(10000)
      |                ^ Error: page.waitForTimeout: Test ended.
  81  | 
  82  |     if(acct.login=="fail"){
  83  |     
  84  |        await expect(page.locator("//span[contains(text(),'Something went wrong. Please contact our customer ')]")).toHaveText("Something went wrong. Please contact our customer support executives at checkout counters for assistance.")
  85  | 
  86  |      }
  87  |      else{
  88  |         await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
  89  |      }
  90  |      
  91  |      
  92  |     })
  93  |     
  94  | })
  95  | 
  96  | 
  97  | 
  98  | /*test("BYOD Login using acct and phone numbers",async ({page})=>{
  99  | 
  100 |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  101 | 
  102 |     const title= await page.title()
  103 | 
  104 |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  105 | 
  106 |     const login =new Byodloginpage(page);
  107 |    
  108 |     //Acct no login implementation
  109 |     await login.AcctnoLogin('500002','1285')
  110 |     await page.waitForTimeout(1000)
  111 |     await login.signByod()
  112 | 
  113 |     await page.waitForTimeout(10000)
  114 | 
  115 |     //Phone no login implementation
  116 |     await login.phonenologin('6361997213','1285')
  117 |     await page.waitForTimeout(1000)
  118 |     await login.signByod()
  119 | 
  120 |     await page.waitForTimeout(10000)
  121 | })*/
  122 | 
  123 | // test.only("BYOD Login using coupon code",async ({page})=>{
  124 | 
  125 | //     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")
  126 | 
  127 | //     const title= await page.title()
  128 | 
  129 | //     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  130 | 
  131 | //     const login =new Byodloginpage(page);
  132 | //     //Coupon code 
  133 | 
  134 | //     coupons.forEach((data)=>{
  135 | 
  136 | //       await login.couponcodelogin(i.couponcode)
  137 | //       await page.waitForTimeout(3000)
  138 | //       await login.signByod()
  139 | //       await page.waitForTimeout(10000)
  140 | 
  141 | //     })
  142 | 
  143 |      
  144 | 
  145 |       
  146 |     
  147 |     
  148 |     // await page.waitForTimeout(3000)
  149 |     // await login.signByod()
  150 | 
  151 |     // await page.waitForTimeout(10000)
  152 | 
  153 |     
  154 | 
  155 |     
  156 | 
  157 | 
  158 | 
  159 |     // await page.fill('#mat-input-1','500002')
  160 | 
  161 |     // await page.fill('#mat-input-0','1285')
  162 | 
  163 |     // await page.click('//div[@class="loginAction_wrap ng-star-inserted"]//button')
  164 | 
  165 |     // await page.waitForTimeout(10000)
  166 | 
  167 | 
  168 | //})
  169 | 
  170 | 
  171 | //test.afterall("Logout",()=>{
  172 | 
  173 | //})
  174 | 
  175 | //test("Landing screen",async ({page})=>{
  176 | 
  177 | 
  178 |     
  179 | 
  180 | 
```