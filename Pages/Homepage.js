exports.Homepage=
class Homepage{

    constructor(page){

        this.page=page
        this.page.homeicon="//li[@class='nav-item active']//a[@class='nav-link']"
        this.page.contacticon="//a[normalize-space()='Contact']"
        this.page.abouticon="//a[normalize-space()='About us']"
        this.page.carticon="//a[@id='cartur']"
        this.page.logout="//a[@id='logout2']"

        this.page.categories="//a[@id='cat']"
        this.page.phones="(//a[normalize-space()='Phones'])[1]"
        this.page.laptops="(//a[normalize-space()='Laptops'])[1]"
        this.page.monitors="(//a[normalize-space()='Monitors'])[1]"

        this.page.Aboutus="//b[normalize-space()='About Us']"

    }

    async onclickphone(){

        await this.page.click(this.page.phones)

        await this.page.click("//a[normalize-space()='Samsung galaxy s6']")
        
    }

    async onclicklaptops(){

        await this.page.click(this.page.laptops)
    }

    async onclickmonitors(){

        await this.page.click(this.page.monitors)
    }


    //{async and await}
    // Use it only when performing actions or fetching values, not for locators.
    //since no action is performed hence {async and await} is skipped

    
    Footercomponenets() {
        return this.page.locator(this.page.Aboutus);
    }

}