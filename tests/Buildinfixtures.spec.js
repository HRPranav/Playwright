import {test,expect} from '@playwright/test'

test.only("Context fixture",async({context})=>{

   //context fixture opens browser in multiple tabs
    const page1 =await context.newPage()
    await page1.goto("https://www.google.com")


    const page2 =await context.newPage()
    await page2.goto("https://www.saucedemo.com/")

})

test("Browser name",async({browserName})=>{

    if(browserName='chromium'){
        console.log("Chromium")
    }
    if(browserName="firefox"){
        console.log("Firefox")
    }

    else{
        console.log("webkit")
    }

})

test("Browser",async({browser})=>{

   const context1= await browser.newContext()
   const page1=await context1.newPage()

   await page1.goto("https://www.google.com")


   const context2= await browser.newContext()
   const page2=await context1.newPage()

   await page2.goto("https://www.saucedemo.com/")


})

//Characteristics of context and browser fixtures

//context fixture
//The context fixture represents a BrowserContext — an isolated session (like an incognito window)
//No shared cookies, storage, or sessions across tests

//browser fixture
//The browser fixture represents the entire browser instance (like Chromium, Firefox, WebKit).