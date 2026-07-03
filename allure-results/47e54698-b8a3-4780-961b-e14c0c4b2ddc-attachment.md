# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitesting.spec.js >> Get call
- Location: tests\Apitesting.spec.js:3:5

# Error details

```
Error: apiRequestContext.get: self-signed certificate in certificate chain
Call log:
  - → GET https://api.restful-api.dev/objects
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Get call",async ({request})=>{
  4  | 
> 5  |   const response=  await request.get('https://api.restful-api.dev/objects')
     |                                  ^ Error: apiRequestContext.get: self-signed certificate in certificate chain
  6  |   console.log(await response.json())
  7  |   await expect(response.status()).toBe(200)
  8  | 
  9  | })
  10 | 
```