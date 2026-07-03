# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitesting.spec.js >> Get call
- Location: tests\Apitesting.spec.js:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect,request as playwrightRequest } from '@playwright/test';
  2  | 
  3  | test("Get call",async ({request})=>{
  4  | 
  5  | 
  6  |   const response=  await request.get('https://staging.sgpowerloyalty.com:2053/api/patron/GetAllProperties')
  7  |   console.log(await response.json())
> 8  |   await expect(response.status()).toBe(200)
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  9  | 
  10 | })
  11 | 
```