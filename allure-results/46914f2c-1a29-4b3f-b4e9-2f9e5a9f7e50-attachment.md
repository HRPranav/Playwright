# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.js >> Element Screenshots
- Location: tests\screenshots.spec.js:21:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.demoblaze.com/index.html#", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Screenshots",async ({page})=>{
  4  | 
  5  |    await page.goto('https://www.demoblaze.com/index.html#')
  6  | 
  7  | await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'homepage.png'});
  8  | 
  9  |  
  10 | })
  11 | 
  12 | test("full Screenshots",async ({page})=>{
  13 | 
  14 |    await page.goto('https://www.demoblaze.com/index.html#')
  15 |    await page.waitForTimeout(5000)
  16 | 
  17 |    await page.screenshot({path:  'tests/screenshots/' + Date.now() + 'fullpage.png',fullPage:true})
  18 |  
  19 | })
  20 | 
  21 | test.only("Element Screenshots",async ({page})=>{
  22 | 
> 23 |    await page.goto('https://www.demoblaze.com/index.html#')
     |               ^ Error: page.goto: Target page, context or browser has been closed
  24 | 
  25 |    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png'})
  26 |  
  27 | })
```