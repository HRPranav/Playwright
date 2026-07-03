exports.AddtoCartpage=
class AddtoCartpage{

    constructor(page){

        this.page=page
        this.page.Addcartbutton="//a[normalize-space()='Add to cart']"
        this.page.productdesc="//strong[normalize-space()='Product description']"

        //filter
        this.page.filter1="//label[@for='mat-checkbox-37-input']//span[@class='mat-checkbox-inner-container']"
        this.page.filter2="//label[@for='mat-checkbox-38-input']//span[@class='mat-checkbox-inner-container']"
        this.page.filter3="//label[@for='mat-checkbox-39-input']//span[@class='mat-checkbox-inner-container']"
        this.page.filter4="//label[@for='mat-checkbox-40-input']//span[@class='mat-checkbox-inner-container']"
        this.page.filter5="//label[@for='mat-checkbox-42-input']//span[@class='mat-checkbox-inner-container']"
        this.page.filter6="//label[@for='mat-checkbox-42-input']//span[@class='mat-checkbox-inner-container']"

        //clear all
        this.page.clearall="//button[normalize-space()='Clear All']"

    }


    async onclickAddtocart(){
      await this.page.click(this.page.Addcartbutton)
    }

    
}