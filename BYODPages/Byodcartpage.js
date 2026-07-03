exports.Byodcartpage=

class Byodcartpages{

    constructor(page){
       this.page=page
       this.quantityiconcaret="//span[@class='mat-checkbox-inner-container']/input[@id='mat-checkbox-12-input']"
    
       this.proceedtocheckout="//div[@class='btnAction']/button"
    }



    async quantityclick(){
        await this.page.click(this.quantityiconcaret)
    }

    async checkoutbutton(){
        await this.page.click(this.proceedtocheckout)
    }
}