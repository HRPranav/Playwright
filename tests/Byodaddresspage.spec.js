import {test,expect,chromium} from "@playwright/test"
import { Byodloginpage } from "../BYODPages/ByodLoginpage"
import { Byodhomepage } from "../BYODPages/Byodhomepage"
import { Byoditemlistingpage } from "../BYODPages/Byoditemlistingpage"
import { Byodcartpage } from "../BYODPages/Byodcartpage"
import { Byodaddresspage } from "../BYODPages/Byodaddresspage"
import { readCSV } from "../utils/Csvreader"

const addressdata= readCSV('c:/playwright/tests/Testdatafolder/Addressdata.csv')



test.describe.configure({ mode: 'serial' });

let page;
let context;

test.beforeAll(async({browser})=>{

    context= await browser.newContext()
    page= await context.newPage()

    await page.goto('https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT');

    const login =new Byodloginpage(page);

     //Acct no login implementation
      await page.waitForTimeout(10000)
      await login.AcctnoLogin('500002','1285')
      await page.waitForTimeout(1000)
      await login.signByod()
  
      await page.waitForTimeout(10000)


})

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
    await item.addcartlogobutton()
    
})

test("proceed to checkout in cart screen",async()=>{

    const cart=new Byodcartpage(page)
    await page.waitForTimeout(2000)
    await cart.checkoutbutton()
    await page.waitForTimeout(10000)
})




// addressdata.forEach((data,index)=>{

//     console.log("Keys:", Object.keys(data));

//     test(`address ${data.Firstname || 'missing'} ${index} `,async()=>{

//     const address=new Byodaddresspage(page)

//     await address.firstname1(data.Firstname)

//     await page.waitForTimeout(3000)

//     })

// })


const cleanData = addressdata.map(row => {
  const newRow = {};
  for (const key in row) {
    newRow[key.trim()] = typeof row[key] === 'string'
      ? row[key].trim()
      : row[key];
  }
  return newRow;
});

cleanData.forEach((data, index) => {
  console.log("Keys:", Object.keys(data));
  test(`address ${data.Firstname || 'missing'} ${index}`, async ({ }) => {
    const address = new Byodaddresspage(page);
    await address.firstname1(data.Firstname);
    await page.waitForTimeout(1000)
    await address.lastname1(data.Lastname)
    await page.waitForTimeout(1000)
    await address.phonemo(data.Mobile)
    await page.waitForTimeout(1000)
    await address.Email1(data.email)
    await page.waitForTimeout(1000)
    await address.address_1(data.address1)
    await page.waitForTimeout(1000)
    await address.address_2(data.address2)
    await page.waitForTimeout(1000)
    await address.city_1(data.city)
    await page.waitForTimeout(1000)
    await address.zip_1(data.zipcode)
    await page.waitForTimeout(1000)

   


    })

  
});

test("onclickcheckout",async()=>{

    const address = new Byodaddresspage(page);

     await page.locator('#country').click()
    //await page.selectOption('#country', 'Aruba');
    const z=await page.selectOption('#country', 'United States');
    if(z=='Canada'){
       await page.locator('#state').click()
       await page.waitForTimeout(2000)
       await page.selectOption('#state', 'British Columbia');
    }
    else if(z=='United States'){
        await page.locator('#state').click()
        await page.waitForTimeout(3000)
        await page.selectOption('#state', 'Alaska');

    }

        //address header
       await expect(address.addressheading()).toHaveText('Address')

       //checkbox clicking
       await address.onclickcheckbox()
       await address.onclickconfirmcheckout()
       await expect(page.locator(address.pinheader)).toHaveText('Verify your PIN')

       await expect(page.locator(address.pinverify)).toHaveText('PIN Verified! Click Checkout to Proceed.')

       await address.onclickfinalcheckout()
       await page.waitForTimeout(8000)
    })


