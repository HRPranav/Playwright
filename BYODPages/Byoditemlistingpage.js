exports.Byoditemlistingpage=

class Byoditemlistingpage{

    constructor(page){
    this.page=page
    this.sortby="//span[@class='icon-caret']"

    //categories
    this.allcategories="//li[@class='subCategList-item selected']"
    this.clothshoes="//span[normalize-space()='Clothes, Shoes & Watches']"
    this.lifestyle="//span[normalize-space()='Lifestyle']"
    this.sportsandoutdoors="//span[normalize-space()='Sports & Outdoors']"

    //checkbox
    this.pricefilter1="#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    this.pricefilter2="#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    this.pricefilter3="#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    this.pricefilter4="#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    this.pricefilter5="#mat-checkbox-6 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    this.pricefilter6="//label[@for='mat-checkbox-144-input']//span[@class='mat-checkbox-inner-container']"

    //sort icon

    this.sorticon="//div[@class='sortDropdown']/span[2]"

    //price high to low 
    this.sorthightolow="//div[@class='sort-body']/ul/li[2]"

    //clear all
    this.clearall="//button[normalize-space()='Clear All']"

    //Add to cart

    this.addtocartbutton1=page.locator("(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[1]").first()
    this.addtocartbutton2="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[2]"
    this.addtocartbutton3="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[3]"
    this.addtocartbutton4="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[4]"

    //Cart icon in the add to cart button

    this.addcartlogo="//button[@class='BtnAddToCart added']//span[@class='icon-cart']"



    }

    async addcartbutton(){

        await this.addtocartbutton1.waitFor({ state: 'visible' })

        await this.addtocartbutton1.click()
    }


    async addcartlogobutton(){

        await this.page.click(this.addcartlogo)
    }

    async onclicksorticon(){

        await this.page.click(this.sorticon)
        
        
    }

    async onselectionofsort(){

        await this.page.click(this.sorthightolow)
        
    }

    async pricefilter(){

        const filter1= await this.page.locator(this.pricefilter1)
        await filter1.check()
        const filter2= await this.page.locator(this.pricefilter2)
        await filter2.check()
        const filter3= await this.page.locator(this.pricefilter3)
        await filter3.check()

    }


}