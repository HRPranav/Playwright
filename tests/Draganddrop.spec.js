import { test, expect } from '@playwright/test';

test("DargandDrop",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const src=await page.locator("//div[@id='draggable']")
    const target= await page.locator("//div[@id='droppable']")

    //approach 1

    // await src.hover()
    // await page.mouse.down()

    // await target.hover()
    // await page.mouse.up()

    // const value=await page.locator('//div[@id="droppable"]/p')

    // await expect(value).toHaveText('Dropped!')
   

    //approach 2

    await src.dragTo(target)

    const value=await page.locator('//div[@id="droppable"]/p')

    await expect(value).toHaveText('Dropped!')

    await page.waitForTimeout(5000)
})
