exports.Byodhomepage=
class Byodhomepage{

    constructor(page){
        this.page=page

        //Locators inside reward categories 
        this.Allcategories="//img[@alt='All Categories']"
        this.clothesshoes="//img[@alt='Clothes, Shoes & Watches']"
        this.lifestyle="//img[@alt='Lifestyle']"
        this.sportsoutdoors="//img[@alt='Sports & Outdoors']"

        //Locators in the menu wrap
        this.menuallcategory="//a[normalize-space()='All Categories']"
        this.menuclothesshoes="//a[normalize-space()='Clothes, Shoes & Watches']"
        this.menulifestyle="//a[normalize-space()='Lifestyle']"
        this.menuasportsoutdoors="//a[normalize-space()='Sports & Outdoors']"

        //search tile locators
        this.searchbox="//input[@id='mat-input-3']"
        this.searchicon="//button[@type='submit']"
        this.iconcategory="//span[@class='icon-category']"
        this.multipleplayerbalanceicon="//span[@class='icon-hand-coin-outline']" 
        this.carticon="//span[@class='icon-cart']"; 
        
        this.homeicon="//div[@title='Home']//i[@class='icon-home']"
        this.userprofile="//figure[@id='profileIconImg']"
        this.hambergermenu="(//div[@class='pblHamburger'])[1]"

        //user menu 
        this.home="(//span[contains(text(),'Home')])[1]"
        this.categories="(//span[contains(text(),'Categories')])[1]"
        this.refreshbal="(//div[@class='mobileNav refreshBalance'])[1]"
        this.preference="(//span[normalize-space()='Preference'])[1]"
        this.help="(//div[@class='mobileNav help'])[1]"
        this.signout="(//div[@class='mobileNav menuSignout ng-star-inserted'])[1]"
        this.usermenu="#profileIconImg"


        //footer texts

        this.footertext="//span[contains(text(),'2026 Light & Wonder, Inc. and its Subsidiaries. Al')]"

}

        //Reward categories methods
        async onclickAllcategories(){

            await this.page.click(this.Allcategories)
        }

        async onclickclothesandshoes(){

            await this.page.click(this.clothesshoes)
        }

        async onclicklifestyle(){

            await this.page.click(this.lifestyle)
        }

        async onclicksportsandoutdoors(){

            await this.page.click(this.sportsoutdoors)
        }

        //on tile actions

        async tilesearchbox(){
             await this.page.click(this.searchbox)
            
        }

        async tilemultipleplayerbalicon(){
             await this.page.click(this.multipleplayerbalanceicon)
            
        }

        async tileusermenu(){
             await this.page.click(this.usermenu)
             
        }

        

}