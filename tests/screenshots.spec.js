import { test, expect } from '@playwright/test';

test("Screenshots",async ({page})=>{

   await page.goto('https://www.demoblaze.com/index.html#')

await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'homepage.png'});

 
})

test("full Screenshots",async ({page})=>{

   await page.goto('https://www.demoblaze.com/index.html#')
   await page.waitForTimeout(5000)

   await page.screenshot({path:  'tests/screenshots/' + Date.now() + 'fullpage.png',fullPage:true})
 
})

test.only("Element Screenshots",async ({page})=>{

   await page.goto('https://www.demoblaze.com/index.html#')

   await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png'})
 
})