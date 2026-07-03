import { test, expect } from '@playwright/test';

test.skip("Alert",async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Enabling Dialog window handler
    //This method needs to be handled before performing the click action on alert dialog
    page.on("dialog",async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })

    await page.click("//button[@id='alertBtn']")

    await page.waitForTimeout(4000)
});

test.skip("confirm",async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Enabling Dialog window handler
    //This method needs to be handled before performing the click action on alert dialog
    page.on("dialog",async dialog=>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()  //for clicking ok 
        //await dialog.dismiss()  //for clicking cancel

    })

    await page.click("//button[@id='confirmBtn']")

    expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

    const a =await page.locator("//p[@id='demo']").textContent()
    console.log(a)

    await page.waitForTimeout(4000)

});

test("prompt",async ({page})=>{
   
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Enabling Dialog window handler
    //This method needs to be handled before performing the click action on alert dialog
    page.on("dialog",async dialog=>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue('Harry Potter'))
        await dialog.accept('John')  //for clicking ok 
        //await dialog.dismiss()  //for clicking cancel

    })

    await page.click("//button[@id='promptBtn']")

    expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')

    const a =await page.locator("//p[@id='demo']").textContent()
    console.log(a)

    await page.waitForTimeout(4000)

});