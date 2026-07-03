import { test, expect } from '@playwright/test';

test("Datepicker",async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')

 

    //approach1 direct
     await page.fill('#datepicker','05/12/2029')
    

    //approach2

    const year="2029"
    const month="May"
    const day="17"


    await page.locator('#datepicker').click()

    while(true){

        const currentyear=await page.locator('.ui-datepicker-year').textContent()
        const currentmonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentyear==year &&  currentmonth ==month)
        {
            break;
        }

        await page.locator("//a[@title='Next']").click()
    }
    await page.waitForTimeout(9000)

    //for date selection using loops

    // const date=await page.$$("//a[@class='ui-state-default']")

    // for(const dt of date){
    //     const x=await dt.textContent()
    //     if(x==day){
    //        await dt.click()
    //     }
    // }
//a[@class='ui-state-default'][text()=17]

    //date selection without loop
    const date=await page.locator(`//a[@class='ui-state-default'][text()='${day}']`)

    await date.click()

    await page.waitForTimeout(4000)

})