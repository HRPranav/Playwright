import { test, expect } from '@playwright/test';

test("Assertions",async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    await page.fill('[name="text1"]','Welcome')

    //ctrl+A

    await page.keyboard.press('Control+A')

    //ctrl+c

    await page.keyboard.press('Control+C')

    //Tab in order to paste it to other text box

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

     //ctrl+V

    await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000)

})