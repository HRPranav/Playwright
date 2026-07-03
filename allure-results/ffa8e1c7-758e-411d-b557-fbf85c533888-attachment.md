# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitesting.spec.js >> post call
- Location: tests\Apitesting.spec.js:19:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 200
```

# Test source

```ts
  1  | import { test, expect,request as playwrightRequest } from '@playwright/test';
  2  | 
  3  | test("Get call",async ({request})=>{
  4  | 
  5  |   const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEyMC4wLCJVc2VyTmFtZSI6ImFub255bW91cyIsIkV4cGlyYXRpb25EYXRlIjoiMjAyNi0wNi0wNlQwMjo0MjoyOC4yNTM3MDAyKzAwOjAwIiwiQ3JlYXRpb25EYXRlIjoiMjAyNi0wNS0yN1QwOToyMjoyOC4yNTM3MDAyKzAwOjAwIiwiRGV2aWNlSWQiOjQuMCwiUmV0YWlsZXJJZCI6NDYuMCwiUGVybWlzc2lvbk5hbWUiOiJOb25lIn0.f0H87QK4d_FJUBLQxxb2b4gVew7d5krvEDilPZ2a-jM'
  6  | 
  7  | 
  8  |   const response=  await request.get('https://dummy.restapiexample.com/api/v1/employees/')
  9  | 
  10 |   // Headers:{
  11 |   //   Authorization: `Bearer ${token}`
  12 | 
  13 |   // }
  14 |   console.log(await response.json())
  15 |   await expect(response.status()).toBe(200)
  16 | 
  17 | })
  18 | 
  19 | test.only("post call",async ({request})=>{
  20 | 
  21 |   const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEyMC4wLCJVc2VyTmFtZSI6ImFub255bW91cyIsIkV4cGlyYXRpb25EYXRlIjoiMjAyNi0wNi0wNlQwMjo0MjoyOC4yNTM3MDAyKzAwOjAwIiwiQ3JlYXRpb25EYXRlIjoiMjAyNi0wNS0yN1QwOToyMjoyOC4yNTM3MDAyKzAwOjAwIiwiRGV2aWNlSWQiOjQuMCwiUmV0YWlsZXJJZCI6NDYuMCwiUGVybWlzc2lvbk5hbWUiOiJOb25lIn0.f0H87QK4d_FJUBLQxxb2b4gVew7d5krvEDilPZ2a-jM'
  22 | 
  23 | 
  24 |   const response=  await request.post('https://dummy.restapiexample.com/api/v1/create',{
  25 |     data: {
  26 |       "name":"tt86989",
  27 |       "salary":"123",
  28 |       "age":"23"
  29 |     }
  30 |   })
  31 |   
  32 | 
  33 |   // Headers:{
  34 |   //   Authorization: `Bearer ${token}`
  35 | 
  36 |   // }
  37 |   console.log(await response.json())
> 38 |   await expect(response.status()).toBe(201)
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  39 | 
  40 | })
```