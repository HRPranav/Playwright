exports.Byodloginpage=
class Byodloginpage{

    constructor(page){

        this.page=page
        this.acctnumber='#mat-input-1'
        this.pin='#mat-input-0'
        this.Phonenumber="//span[normalize-space()='Use Phone Number']"
        this.couponcode="//input[@id='mat-input-0']"
        this.signin='//div[@class="loginAction_wrap ng-star-inserted"]//button'

        //invalid coupon code
        this.genericerror="//div[@class='genericErrors']"


    }

    async AcctnoLogin(accountno,pin){
        await this.page.locator(this.acctnumber).fill(accountno)
        await this.page.locator(this.pin).fill(pin)
    }

    async phonenologin(phoneno,pin){
        await this.page.locator(this.Phonenumber).fill(phoneno)
        await this.page.locator(this.pin).fill(pin)

    }

    async couponcodelogin(coupon){
        await this.page.locator(this.couponcode).fill(coupon)
    }

    async signByod(){
        await this.page.click(this.signin)
    }

    couponcode_Genericerror(){
       return this.page.locator(this.genericerror)
    }
}