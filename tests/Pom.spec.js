import { test, expect } from '@playwright/test';
import { Loginpage } from '../Pages/Loginpage';
import { Homepage } from '../Pages/Homepage';
import { AddtoCartpage } from '../Pages/Addtocartpage';

test("Assertions",async ({page})=>{

  //login page 
   const Login =new Loginpage(page)

    await Login.Applicationlink()

    await Login.Login('newone1379','abc@123')

    await expect(page.locator("//a[@id='nava']")).toHaveText('  PRODUCT STORE')

    await page.waitForTimeout(5000)

    //home page

    const home=new Homepage(page)
    const Addtocart=new AddtoCartpage(page)

    await home.onclickphone()
    await page.waitForTimeout(1000)


    //handling alert

    page.on("dialog",async dialog=> {

        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
        
    })

    await Addtocart.onclickAddtocart()


    // await home.onclicklaptops()
    // await page.waitForTimeout(1000)

    // await home.onclickmonitors()

    // await page.waitForTimeout(4000)

    //To verify the bottom footer text in homepage


    await expect(home.Footercomponenets()).toContainText('About Us');

    await expect(page.locator("//p[contains(text(),'We believe performance needs to be validated at ev')]")).toContainText("We believe performance needs")


})