import { test,expect,chromium } from '@playwright/test'

// test('Pages',async()=>{

//     const browser=await chromium.launch()
//     const context=await browser.newContext()

//     const page1=await context.newPage()
//     const page2=await context.newPage()

//     const allpages=context.pages()
//     console.log("No of pages created:",allpages.length)

//     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await expect(page1).toHaveTitle('OrangeHRM')

//     await page1.waitForTimeout(5000)

//     await page2.goto("https://www.orangehrm.com/")

//     await expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

//     await page2.waitForTimeout(5000)
// })

test('Pages',async()=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allpages=context.pages()
    console.log("No of pages created:",allpages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page1).toHaveTitle('OrangeHRM')

    const pagepromise=context.waitForEvent('page')

    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newpage=await pagepromise

    await expect(newpage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")

    await page1.waitForTimeout(5000)
    await newpage.waitForTimeout(5000)

    await browser.close()
})