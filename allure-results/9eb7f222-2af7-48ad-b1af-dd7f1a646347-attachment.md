# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Buildinfixtures.spec.js >> Browser
- Location: tests\Buildinfixtures.spec.js:30:6

# Error details

```
TypeError: browser.context is not a function
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test("Context fixture",async({context})=>{
  4  | 
  5  |    //context fixture opens browser in multiple tabs
  6  |     const page1 =await context.newPage()
  7  |     await page1.goto("https://www.google.com")
  8  | 
  9  | 
  10 |     const page2 =await context.newPage()
  11 |     await page2.goto("https://www.saucedemo.com/")
  12 | 
  13 | })
  14 | 
  15 | test("Browser name",async({browserName})=>{
  16 | 
  17 |     if(browserName='chromium'){
  18 |         console.log("Chromium")
  19 |     }
  20 |     if(browserName="firefox"){
  21 |         console.log("Firefox")
  22 |     }
  23 | 
  24 |     else{
  25 |         console.log("webkit")
  26 |     }
  27 | 
  28 | })
  29 | 
  30 | test.only("Browser",async({browser})=>{
  31 | 
> 32 |    const context1= await browser.context()
     |                                  ^ TypeError: browser.context is not a function
  33 |    const page1=await context1.newPage()
  34 | 
  35 |    await page1.goto("https://www.google.com")
  36 | 
  37 | 
  38 |    const context2= await browser.context()
  39 |    const page2=await context1.newPage()
  40 | 
  41 |    await page2.goto("https://www.saucedemo.com/")
  42 | 
  43 | 
  44 | })
  45 | 
  46 | 
```