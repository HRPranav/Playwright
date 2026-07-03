exports.Loginpage=
class Loginpage{

    constructor(page){

        this.page=page;
        this.page.loginicon='#login2';
        this.page.loginusername='#loginusername';
        this.page.loginpassword='#loginpassword';
        this.page.loginbutton="//button[normalize-space()='Log in']";
        this.page.cancelbutton="//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']";


    }

    async Applicationlink(){
        await this.page.goto('https://www.demoblaze.com/#')
    }

    async Login(username,password){
        await this.page.locator(this.page.loginicon).click()
        await this.page.fill(this.page.loginusername,username)
        await this.page.fill(this.page.loginpassword,password)
        await this.page.click(this.page.loginbutton)
    }
}