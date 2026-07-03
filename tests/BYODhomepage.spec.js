import { test, expect,chromium } from '@playwright/test';
import { Byodhomepage } from '../BYODPages/Byodhomepage';
import { Byodloginpage } from '../BYODPages/ByodLoginpage';
import { Byodcartpage } from '../BYODPages/Byodcartpage';

let page;
let context;

test.beforeAll(async ({browser}) => {
  
  context = await browser.newContext();
  page = await context.newPage();
  

  await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');

  const login =new Byodloginpage(page);
  const home=new Byodhomepage(page);
     
      //Acct no login implementation
      await page.waitForTimeout(3000)
      await login.AcctnoLogin('500002','1285')
      await page.waitForTimeout(1000)
      await login.signByod()

     await expect(page.locator(home.carticon)).toBeVisible({timeout:10000})
     // await page.waitForTimeout(10000)
});

test.skip("Homepage actions",async({})=>{

    //home page 

    const home=new Byodhomepage(page);
    await page.waitForTimeout(3000)
    home.onclickclothesandshoes()
    await page.waitForTimeout(5000)

})

test.only("Homepage searchtile actions",async({})=>{

    //home page 

    const home=new Byodhomepage(page);
    await page.waitForTimeout(3000)
    //home.tilesearchbox()
  
    //await page.locator("//span[@class='icon-search']").click()
    await page.getByPlaceholder('Search').fill('gift');
    await page.waitForSelector("(//span[@class='mat-option-text'])[2]")

    const x=await page.$$("(//span[@class='mat-option-text'])[2]")

    for(let m of x){
        const r=await m.textContent()

        if(r.includes("Lipton Peach Iced Tea, 16.9 Fl Oz Bottles (Pack of 12) ")){
           await m.click()
            console.log("gift item found")
        }
    }

    await page.waitForTimeout(5000)

    await page.click("(//i[@class='icon-home'])[1]")

})

test("Click action usermenu",async({})=>{

    const home=new Byodhomepage(page);
    
    await home.tileusermenu()
    await page.waitForTimeout(3000)


})

test.skip("shopping cart quantity selection",async({})=>{
      
    const cart = new Byodcartpage(page);
    await cart.quantityclick();
})


