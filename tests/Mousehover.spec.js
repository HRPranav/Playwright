import { test, expect } from '@playwright/test';

test.skip("Mousehover",async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const a= await page.locator("(//button[normalize-space()='Point Me'])[1]")
    const b=await page.locator("(//a[normalize-space()='Laptops'])[1]")

    await a.hover()
    await b.hover()

    await page.waitForTimeout(4000)
});

//button[normalize-space()='Copy Text']

test.skip("Double click",async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const btn= await page.locator("(//button[normalize-space()='Copy Text'])[1]")

    await btn.dblclick()
    
    //validate the copied text
    const q=await page.locator("#field2")
    await expect(q).toHaveValue('Hello World!')

    await page.waitForTimeout(4000)
});

//

test("Right click",async ({page})=>{
   
    await page.goto('https://vinothqaacademy.com/mouse-event/')
    
    const btn= await page.locator("#rightBtn")

    await btn.click({button:'right'})
    
    //validate the copied text
    const q=await page.locator("#rightStatus")
    await expect(q).toHaveText('Menu opened ')

    await page.waitForTimeout(4000)
});