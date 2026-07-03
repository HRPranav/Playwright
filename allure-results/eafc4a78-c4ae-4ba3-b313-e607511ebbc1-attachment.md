# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODLogin.spec.js >> BYOD Login
- Location: tests\BYODLogin.spec.js:5:5

# Error details

```
TypeError: login.signin is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - figure [ref=e6]
    - generic [ref=e7]:
      - generic [ref=e9]:
        - figure:
          - img
        - generic [ref=e10]:
          - heading "Sign in to continue" [level=1] [ref=e11]
          - generic [ref=e12]:
            - text: 
            - generic [ref=e13]:
              - generic [ref=e14]: Account Number *
              - textbox [ref=e19]: "500002"
            - generic [ref=e20]:
              - generic [ref=e21]: PIN *
              - generic [ref=e25]:
                - textbox [active] [ref=e26]: "1285"
                - generic [ref=e27]: 
            - button "Sign In" [ref=e29] [cursor=pointer]
      - paragraph [ref=e30]: © 2026 2024 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
  - text: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Byodloginpage } from '../BYODPages/ByodLoginpage';
  3  | 
  4  | 
  5  | test("BYOD Login",async ({page})=>{
  6  | 
  7  |     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")
  8  | 
  9  |     const title= await page.title()
  10 | 
  11 |     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })
  12 | 
  13 |     const login =new Byodloginpage(page);
  14 | 
  15 |     await login.AcctnoLogin('500002','1285')
> 16 |     await login.signin()
     |                 ^ TypeError: login.signin is not a function
  17 | 
  18 |     
  19 | 
  20 |     
  21 | 
  22 | 
  23 | 
  24 |     // await page.fill('#mat-input-1','500002')
  25 | 
  26 |     // await page.fill('#mat-input-0','1285')
  27 | 
  28 |     // await page.click('//div[@class="loginAction_wrap ng-star-inserted"]//button')
  29 | 
  30 |     // await page.waitForTimeout(10000)
  31 | 
  32 | 
  33 | })
  34 | 
  35 | 
  36 | //test.afterall("Logout",()=>{
  37 | 
  38 | //})
  39 | 
  40 | //test("Landing screen",async ({page})=>{
  41 | 
  42 | 
  43 |     
  44 | 
  45 | 
  46 | 
  47 | //})
```