import { test, expect } from '@playwright/test';
import { Byodloginpage } from '../BYODPages/ByodLoginpage';
import { readCSV } from '../utils/Csvreader';
import { readExcel } from '../utils/Excelreader';

const coupons =require('c:/playwright/tests/Testdatafolder/Couponcodedata.json')

const logindata=readCSV('c:/playwright/tests/Testdatafolder/Logindata.csv')

const userdata=readExcel('c:/playwright/tests/Testdatafolder/Exceldata.xlsx','Sheet1')

test.describe.configure({ mode: 'serial' });

//  Coupon code login flow using Data set
/*coupons.forEach((data)=>{

    // if(data.run==false){
    //     console.log("Coupon code already used")
    //     //return
    // }

    test(`BYOD Login using coupons code ${data.couponcode}`,async ({page})=>{

    await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")

    const title= await page.title()

    await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })

    const login =new Byodloginpage(page);
    //Coupon code 

      await login.couponcodelogin(data.couponcode)
      await page.waitForTimeout(3000)
      await login.signByod()
      await page.waitForTimeout(7000)

      if(data.login==true)
       {
          await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
       }

       else{
        await expect(login.couponcode_Genericerror()).toHaveText('Patron ID Already Used.')
       }


     })
}) */



//Byod login using acct no with csv file

logindata.forEach((acct)=>{

    test(`Byod login Acct ${acct.Acctno}`,async ({page})=>{
        
    await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")

    const title= await page.title()

    await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })

     const login =new Byodloginpage(page);

     test.step("Login with Acct number",async()=>{
           
        login.AcctnoLogin(acct.Acctno,acct.pin)
        await page.waitForTimeout(1000)
     })

     
    test.step("On click sigin",async()=>{
        await login.signByod()
        

    })
     
    await page.waitForTimeout(10000)

    if(acct.login=="fail"){
    
       await expect(page.locator("//span[contains(text(),'Something went wrong. Please contact our customer ')]")).toHaveText("Something went wrong. Please contact our customer support executives at checkout counters for assistance.")

     }
     else{
        await expect(page.locator("//figure[@id='profileIconImg']")).toBeVisible()
     }
     
     
    })
    
})



/*test("BYOD Login using acct and phone numbers",async ({page})=>{

    await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")

    const title= await page.title()

    await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })

    const login =new Byodloginpage(page);
   
    //Acct no login implementation
    await login.AcctnoLogin('500002','1285')
    await page.waitForTimeout(1000)
    await login.signByod()

    await page.waitForTimeout(10000)

    //Phone no login implementation
    await login.phonenologin('6361997213','1285')
    await page.waitForTimeout(1000)
    await login.signByod()

    await page.waitForTimeout(10000)
})*/

// test.only("BYOD Login using coupon code",async ({page})=>{

//     await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=RPC")

//     const title= await page.title()

//     await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })

//     const login =new Byodloginpage(page);
//     //Coupon code 

//     coupons.forEach((data)=>{

//       await login.couponcodelogin(i.couponcode)
//       await page.waitForTimeout(3000)
//       await login.signByod()
//       await page.waitForTimeout(10000)

//     })

     

      
    
    
    // await page.waitForTimeout(3000)
    // await login.signByod()

    // await page.waitForTimeout(10000)

    

    



    // await page.fill('#mat-input-1','500002')

    // await page.fill('#mat-input-0','1285')

    // await page.click('//div[@class="loginAction_wrap ng-star-inserted"]//button')

    // await page.waitForTimeout(10000)


//})


//test.afterall("Logout",()=>{

//})

//test("Landing screen",async ({page})=>{


    



//})