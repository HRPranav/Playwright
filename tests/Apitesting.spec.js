import { test, expect,request as playwrightRequest } from '@playwright/test';

test("Get call",async ({request})=>{

  const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEyMC4wLCJVc2VyTmFtZSI6ImFub255bW91cyIsIkV4cGlyYXRpb25EYXRlIjoiMjAyNi0wNi0wNlQwMjo0MjoyOC4yNTM3MDAyKzAwOjAwIiwiQ3JlYXRpb25EYXRlIjoiMjAyNi0wNS0yN1QwOToyMjoyOC4yNTM3MDAyKzAwOjAwIiwiRGV2aWNlSWQiOjQuMCwiUmV0YWlsZXJJZCI6NDYuMCwiUGVybWlzc2lvbk5hbWUiOiJOb25lIn0.f0H87QK4d_FJUBLQxxb2b4gVew7d5krvEDilPZ2a-jM'


  const response=  await request.get('https://dummy.restapiexample.com/api/v1/employees/')

  // Headers:{
  //   Authorization: `Bearer ${token}`

  // }
  console.log(await response.json())
  await expect(response.status()).toBe(200)

})

test("post call",async ({request})=>{

  const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEyMC4wLCJVc2VyTmFtZSI6ImFub255bW91cyIsIkV4cGlyYXRpb25EYXRlIjoiMjAyNi0wNi0wNlQwMjo0MjoyOC4yNTM3MDAyKzAwOjAwIiwiQ3JlYXRpb25EYXRlIjoiMjAyNi0wNS0yN1QwOToyMjoyOC4yNTM3MDAyKzAwOjAwIiwiRGV2aWNlSWQiOjQuMCwiUmV0YWlsZXJJZCI6NDYuMCwiUGVybWlzc2lvbk5hbWUiOiJOb25lIn0.f0H87QK4d_FJUBLQxxb2b4gVew7d5krvEDilPZ2a-jM'


  const response= await request.post('https://dummy.restapiexample.com/api/v1/create',{
    data: {
      "name":"tt86989",
      "salary":"123",
      "age":"23"
    }
  })
  

  // Headers:{
  //   Authorization: `Bearer ${token}`

  // }
  console.log(await response.json())
  await expect(response.ok()).toBeTruthy()

})


test("put call",async ({request})=>{

  const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEyMC4wLCJVc2VyTmFtZSI6ImFub255bW91cyIsIkV4cGlyYXRpb25EYXRlIjoiMjAyNi0wNi0wNlQwMjo0MjoyOC4yNTM3MDAyKzAwOjAwIiwiQ3JlYXRpb25EYXRlIjoiMjAyNi0wNS0yN1QwOToyMjoyOC4yNTM3MDAyKzAwOjAwIiwiRGV2aWNlSWQiOjQuMCwiUmV0YWlsZXJJZCI6NDYuMCwiUGVybWlzc2lvbk5hbWUiOiJOb25lIn0.f0H87QK4d_FJUBLQxxb2b4gVew7d5krvEDilPZ2a-jM'


  const response=  await request.put('https://dummy.restapiexample.com/api/v1/update/1156',{
    data: {
      "name":"new",
      "salary":"10000",
      "age":"25"
    }
  })
  

  // Headers:{
  //   Authorization: `Bearer ${token}`

  // }
  
  await expect(response.ok()).toBeTruthy()

})


test.only("Delete call",async ({request})=>{

  const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEyMC4wLCJVc2VyTmFtZSI6ImFub255bW91cyIsIkV4cGlyYXRpb25EYXRlIjoiMjAyNi0wNi0wNlQwMjo0MjoyOC4yNTM3MDAyKzAwOjAwIiwiQ3JlYXRpb25EYXRlIjoiMjAyNi0wNS0yN1QwOToyMjoyOC4yNTM3MDAyKzAwOjAwIiwiRGV2aWNlSWQiOjQuMCwiUmV0YWlsZXJJZCI6NDYuMCwiUGVybWlzc2lvbk5hbWUiOiJOb25lIn0.f0H87QK4d_FJUBLQxxb2b4gVew7d5krvEDilPZ2a-jM'


  const response=  await request.delete('https://dummy.restapiexample.com/api/v1/delete/1156')
  

  // Headers:{
  //   Authorization: `Bearer ${token}`

  // }
  
  await expect(response.status()).toBe(204)

})