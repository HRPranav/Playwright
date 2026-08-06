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

test.skip("Homepage searchtile actions",async({})=>{

    //home page 

    const home=new Byodhomepage(page);
    await page.waitForTimeout(3000)
    //home.tilesearchbox()
  
    //await page.locator("//span[@class='icon-search']").click()
    await page.getByPlaceholder('Search').fill('Canada');
    await page.waitForSelector("(//span[@class='mat-option-text'])[2]")

    const x=await page.$$("(//span[@class='mat-option-text'])[2]")

    for(let m of x){
        const r=await m.textContent()

        if(r.includes("Canada Dry Zero Sugar Cherry Gingerale Fruit Splash")){
           await m.click()
            console.log("item found")
        }
    }

    await page.waitForTimeout(5000)

    await page.click("(//i[@class='icon-home'])[1]")

})

test.skip("Click action usermenu",async({})=>{

    const home=new Byodhomepage(page);
    
    await home.tileusermenu()
    await page.waitForTimeout(3000)


})

test.skip("shopping cart quantity selection",async({})=>{
      
    const cart = new Byodcartpage(page);
    await cart.quantityclick();
})

test("Muliple player balance screen",async({})=>{

    const home=new Byodhomepage(page);
    await home.tilemultipleplayerbalicon()

    await page.waitForSelector(home.playerbalanceheader)
    await expect(page.locator(home.playerbalanceheader)).toHaveText('Player Balances')
    await page.waitForTimeout(3000)

    await page.getByRole('button', { name: 'View Details' }).first().click();
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'View Details' }).click();
    await page.waitForTimeout(2000)

    await home.clickcancelbtn()

    await page.waitForTimeout(2000)

})

