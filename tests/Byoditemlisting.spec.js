import { test, expect,chromium } from '@playwright/test';
import { Byodhomepage } from '../BYODPages/Byodhomepage';
import { Byodloginpage } from '../BYODPages/ByodLoginpage';
import { Byodcartpage } from '../BYODPages/Byodcartpage';
import { Byoditemlistingpage } from '../BYODPages/Byoditemlistingpage';


test.describe.configure({ mode: 'serial' });
let page;
let context;

test.beforeAll(async ({browser}) => {
  
  context = await browser.newContext();
  page = await context.newPage();
  

  await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');

  const login =new Byodloginpage(page);
     
      //Acct no login implementation
      await page.waitForTimeout(10000)
      await login.AcctnoLogin('500002','1285')
      await page.waitForTimeout(1000)
      await login.signByod()
  
      await page.waitForTimeout(10000)
});

test("Homepage actions",async({})=>{

    //home page 

    const home=new Byodhomepage(page);
    await page.waitForTimeout(3000)
    home.onclickAllcategories()
    await page.waitForTimeout(5000)

})

test("Item listing screen",async({})=>{


    //item listing screen

    const item= new Byoditemlistingpage(page);
    await page.waitForTimeout(2000)
    await item.addcartbutton()
    await page.waitForTimeout(2000)
   // await item.addcartlogobutton()
    
})

test("sorticon and price sorting",async()=>{

    const item= new Byoditemlistingpage(page);
    await item.onclicksorticon()
    await page.waitForTimeout(3000)
    await item.onselectionofsort()
    await page.waitForTimeout(3000)

})

test("Pricefilter selection",async()=>{

    const item= new Byoditemlistingpage(page);
    await item.pricefilter()
    await expect(page.locator('//footer[@class="filter-footer"]/button[1]')).toHaveText('Clear All')
    
})