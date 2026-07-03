const { expect } = require("allure-playwright")

exports.Byodaddresspage=
class Byodaddresspage{


    constructor(page){

        this.page=page
        this.firstname="//input[@id='firstName']"
        this.lastname="//input[@id='lastName']"
        this.mobileno="//input[@id='mobileNo']"
        this.email="//input[@id='email']"
        this.address1="//div[@class='textareaControl']/mat-form-field/div/div/div[3]/textarea[@id='address1']"
        this.address2="//div[@class='textareaControl']/mat-form-field/div/div/div[3]/textarea[@id='address2']"
        this.city="//input[@id='city']"
        this.zipcode="//input[@id='zipcode']"
        this.addressheader="//div[@class='categHeader_wrap']/span"
        this.countrydropdown="//div[@class='newAddr_row']/div[@class='inputControl selectInput']/fieldset/select"
        this.bottomcheckbox="//span[@class='mat-checkbox-inner-container']"
        this.pintext="input[type='password']"
        this.pinheader="//div[@class='verifyPinModal modalPopup open']/div/h4"
        this.buttontext="//div[@class='btnAction']/button/span"
        this.verifybtn="//div[@class='pinModal_footer']/button[1]"
        this.pinverify="//div[@class='successMsg']/span"
        this.checkoutbtn="//div[@class='pinModal_footer']/button[2]"

    }

    addressheading(){
       return this.page.locator(this.addressheader)
    }

    async onclickcheckbox(){
       const checkbox= this.page.locator("//span[@class='mat-checkbox-inner-container']").first();
       await checkbox.waitFor({ state: 'visible' });
       await checkbox.click();

    }

    async onclickconfirmcheckout(){
        await this.page.locator(this.buttontext).click()
       
        const pinField=this.page.locator(this.pintext).first()
        await expect(pinField).toBeVisible();
        
        await pinField.fill('1285')
        // const z=this.page.locator(this.verifybtn).first()
        // await z.waitFor({state:'visible'})
        // await z.click()
        await this.page.locator(this.verifybtn).click()

    }

    async onclickfinalcheckout(){

        await this.page.locator(this.checkoutbtn).click()

    }

    async firstname1(fname){

        await this.page.locator(this.firstname).fill(String(fname))
    }

    async lastname1(lname){
        await this.page.locator(this.lastname).fill(String(lname))
    }

    async phonemo(phno){
        await this.page.locator(this.mobileno).fill(phno)
    }

    async Email1(emailid){
        await this.page.locator(this.email).fill(String(emailid))
    }

    async address_1(add1){
        await this.page.locator(this.address1).fill(String(add1))
    }

    async address_2(add2){
        await this.page.locator(this.address2).fill(String(add2))
    }

    async city_1(city1){
        await this.page.locator(this.city).fill(String(city1))
    }

    async zip_1(zip1){
        await this.page.locator(this.zipcode).fill(zip1)
    }
}