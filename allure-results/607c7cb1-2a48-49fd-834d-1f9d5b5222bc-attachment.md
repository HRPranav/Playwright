# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Byoditemlisting.spec.js >> Pricefilter selection
- Location: tests\Byoditemlisting.spec.js:65:5

# Error details

```
TypeError: this.page.waitFor is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e7]:
        - generic "Home" [ref=e8] [cursor=pointer]:
          - generic [ref=e9]: 
        - link [ref=e10] [cursor=pointer]:
          - /url: /home?category=All%20Categories
          - img [ref=e11]
      - generic [ref=e12]:
        - generic [ref=e15]:
          - text: 
          - generic [ref=e17]:
            - text: 
            - generic [ref=e21]:
              - combobox "Search" [ref=e22]
              - button "" [ref=e24] [cursor=pointer]
        - generic [ref=e25]:
          - link "QR Scan" [ref=e27] [cursor=pointer]:
            - /url: /qrscan
            - generic [ref=e28]: 
            - text: QR Scan
          - generic "Categories" [ref=e29] [cursor=pointer]:
            - generic [ref=e30]: 
          - text: 
          - generic "Points Balance" [ref=e31] [cursor=pointer]:
            - generic [ref=e32]: 
          - generic "Tender Balances" [ref=e33] [cursor=pointer]:
            - generic [ref=e34]: 
          - generic "Cart" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]:
              - generic [ref=e37]: 
              - generic [ref=e38]: "37"
          - generic "User Profile" [ref=e39] [cursor=pointer]:
            - figure [ref=e40]
      - text: 
    - generic:
      - generic:
        - text: 
        - generic:    
    - generic [ref=e41]:
      - generic [ref=e42]:
        - figure [ref=e43]
        - generic [ref=e44]: Joseph, You have $3,103.57 out of $3,433.53 to redeem for this transaction.
        - generic [ref=e46]: 
      - text: 
    - generic [ref=e49]:
      - list [ref=e50]:
        - listitem [ref=e51] [cursor=pointer]:
          - generic [ref=e52]: All
        - listitem [ref=e53] [cursor=pointer]:
          - generic [ref=e54]: Life Style
        - listitem [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: Lifestyle
        - listitem [ref=e57] [cursor=pointer]:
          - generic [ref=e58]: Sports & Outdoors
      - generic [ref=e59]:
        - heading "All Categories - 26 Items" [level=3] [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]: "Sort by:"
          - generic [ref=e64] [cursor=pointer]:
            - generic [ref=e65]: Price High to Low
            - generic [ref=e66]: 
        - generic [ref=e69]:
          - generic [ref=e70]:
            - heading "Filter" [level=2] [ref=e71]
            - text: 
          - generic [ref=e73]:
            - heading "Price" [level=3] [ref=e74]
            - list [ref=e76]:
              - listitem [ref=e77]:
                - generic [ref=e80] [cursor=pointer]:
                  - generic [ref=e81]:
                    - checkbox "$1.00 - $100.00" [ref=e82]
                    - generic:
                      - img
                  - generic [ref=e83]: $1.00 - $100.00
              - listitem [ref=e84]:
                - generic [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - checkbox "$100.00 - $500.00" [ref=e89]
                    - generic:
                      - img
                  - generic [ref=e90]: $100.00 - $500.00
              - listitem [ref=e91]:
                - generic [ref=e94] [cursor=pointer]:
                  - generic [ref=e95]:
                    - checkbox "$500.00 - $2,000.00" [ref=e96]
                    - generic:
                      - img
                  - generic [ref=e97]: $500.00 - $2,000.00
              - listitem [ref=e98]:
                - generic [ref=e101] [cursor=pointer]:
                  - generic [ref=e102]:
                    - checkbox "$2,000.00 - $5,000.00" [ref=e103]
                    - generic:
                      - img
                  - generic [ref=e104]: $2,000.00 - $5,000.00
              - listitem [ref=e105]:
                - generic [ref=e108] [cursor=pointer]:
                  - generic [ref=e109]:
                    - checkbox "$5,000.00 & Above" [ref=e110]
                    - generic:
                      - img
                  - generic [ref=e111]: $5,000.00 & Above
              - listitem [ref=e112]:
                - generic [ref=e115] [cursor=pointer]:
                  - generic [ref=e116]:
                    - checkbox "$1.00 - My Current Balance" [ref=e117]
                    - generic:
                      - img
                  - generic [ref=e118]: $1.00 - My Current Balance
          - button "Clear All" [ref=e119] [cursor=pointer]
        - generic [ref=e123]:
          - generic [ref=e124] [cursor=pointer]:
            - figure [ref=e125]:
              - img "JVC - Open-Ear Headphones HANP1TB - Black" [ref=e126]
            - heading "JVC - Open-Ear Headphones HANP1TB - Black" [level=2] [ref=e127]
            - strong [ref=e128]:
              - generic [ref=e129]: $155.99
            - strong
            - button "Add to cart Go to Cart    " [ref=e131]:
              - generic [ref=e132]: Add to cart
              - generic [ref=e133]:
                - generic [ref=e134]: Go to Cart
                - generic [ref=e135]:
                  - generic [ref=e136]: 
                  - generic [ref=e137]: 
                  - generic [ref=e138]: 
                  - generic [ref=e139]: 
          - generic [ref=e140] [cursor=pointer]:
            - figure [ref=e141]:
              - img "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear" [ref=e142]
            - heading "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear" [level=2] [ref=e143]
            - strong [ref=e144]:
              - generic [ref=e145]: $90.99
            - strong
            - button "Add to cart Go to Cart    " [ref=e147]:
              - generic [ref=e148]: Add to cart
              - generic [ref=e149]:
                - generic [ref=e150]: Go to Cart
                - generic [ref=e151]:
                  - generic [ref=e152]: 
                  - generic [ref=e153]: 
                  - generic [ref=e154]: 
                  - generic [ref=e155]: 
          - generic [ref=e156] [cursor=pointer]:
            - figure [ref=e157]:
              - img "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear" [ref=e158]
            - heading "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear" [level=2] [ref=e159]
            - strong [ref=e160]:
              - generic [ref=e161]: $88.40
            - strong
            - button "Add to cart Go to Cart    " [ref=e163]:
              - generic [ref=e164]: Add to cart
              - generic [ref=e165]:
                - generic [ref=e166]: Go to Cart
                - generic [ref=e167]:
                  - generic [ref=e168]: 
                  - generic [ref=e169]: 
                  - generic [ref=e170]: 
                  - generic [ref=e171]: 
          - generic [ref=e172] [cursor=pointer]:
            - figure [ref=e173]:
              - img "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear" [ref=e174]
            - heading "Sony WH-CH520 Wireless Headphones Bluetooth On-Ear" [level=2] [ref=e175]
            - strong [ref=e176]:
              - generic [ref=e177]: $88.40
            - strong
            - button "Add to cart Go to Cart    " [ref=e179]:
              - generic [ref=e180]: Add to cart
              - generic [ref=e181]:
                - generic [ref=e182]: Go to Cart
                - generic [ref=e183]:
                  - generic [ref=e184]: 
                  - generic [ref=e185]: 
                  - generic [ref=e186]: 
                  - generic [ref=e187]: 
          - generic [ref=e188] [cursor=pointer]:
            - figure [ref=e189]:
              - img "JBL Vibe Beam 2 - True Wireless Noise Cancelling" [ref=e190]
            - heading "JBL Vibe Beam 2 - True Wireless Noise Cancelling" [level=2] [ref=e191]
            - strong [ref=e192]:
              - generic [ref=e193]: $84.44
            - strong
            - button "Add to cart Go to Cart    " [ref=e195]:
              - generic [ref=e196]: Add to cart
              - generic [ref=e197]:
                - generic [ref=e198]: Go to Cart
                - generic [ref=e199]:
                  - generic [ref=e200]: 
                  - generic [ref=e201]: 
                  - generic [ref=e202]: 
                  - generic [ref=e203]: 
          - generic [ref=e204] [cursor=pointer]:
            - figure [ref=e205]:
              - img "JLab - Studio Pro Wireless Headphones - Black" [ref=e206]
            - heading "JLab - Studio Pro Wireless Headphones - Black" [level=2] [ref=e207]
            - strong [ref=e208]:
              - generic [ref=e209]: $52.00
            - strong
            - button "Add to cart Go to Cart    " [ref=e211]:
              - generic [ref=e212]: Add to cart
              - generic [ref=e213]:
                - generic [ref=e214]: Go to Cart
                - generic [ref=e215]:
                  - generic [ref=e216]: 
                  - generic [ref=e217]: 
                  - generic [ref=e218]: 
                  - generic [ref=e219]: 
          - generic [ref=e220] [cursor=pointer]:
            - figure [ref=e221]:
              - img "Music 4" [ref=e222]
            - heading "Music 4" [level=2] [ref=e223]
            - strong [ref=e224]:
              - generic [ref=e225]: $45.62
            - strong
            - button "Add to cart Go to Cart    " [ref=e227]:
              - generic [ref=e228]: Add to cart
              - generic [ref=e229]:
                - generic [ref=e230]: Go to Cart
                - generic [ref=e231]:
                  - generic [ref=e232]: 
                  - generic [ref=e233]: 
                  - generic [ref=e234]: 
                  - generic [ref=e235]: 
          - generic [ref=e236] [cursor=pointer]:
            - figure [ref=e237]:
              - img "Music 5" [ref=e238]
            - heading "Music 5" [level=2] [ref=e239]
            - strong [ref=e240]:
              - generic [ref=e241]: $37.67
            - strong
            - button "Add to cart Go to Cart    " [ref=e243]:
              - generic [ref=e244]: Add to cart
              - generic [ref=e245]:
                - generic [ref=e246]: Go to Cart
                - generic [ref=e247]:
                  - generic [ref=e248]: 
                  - generic [ref=e249]: 
                  - generic [ref=e250]: 
                  - generic [ref=e251]: 
      - text:   
    - text:      
  - text: 
```

# Test source

```ts
  1  | exports.Byoditemlistingpage=
  2  | 
  3  | class Byoditemlistingpage{
  4  | 
  5  |     constructor(page){
  6  |     this.page=page
  7  |     this.sortby="//span[@class='icon-caret']"
  8  | 
  9  |     //categories
  10 |     this.allcategories="//li[@class='subCategList-item selected']"
  11 |     this.clothshoes="//span[normalize-space()='Clothes, Shoes & Watches']"
  12 |     this.lifestyle="//span[normalize-space()='Lifestyle']"
  13 |     this.sportsandoutdoors="//span[normalize-space()='Sports & Outdoors']"
  14 | 
  15 |     //checkbox
  16 |     this.pricefilter1="//span[@class='mat-checkbox-inner-container']/input[@type='checkbox' and @id='mat-checkbox-12-input']"
  17 |     this.pricefilter2="//span[@class='mat-checkbox-inner-container']/input[@id='mat-checkbox-13-input']"
  18 |     this.pricefilter3="//label[@for='mat-checkbox-141-input']//span[@class='mat-checkbox-inner-container']"
  19 |     this.pricefilter4="//label[@for='mat-checkbox-142-input']//span[@class='mat-checkbox-inner-container']"
  20 |     this.pricefilter5="//label[@for='mat-checkbox-143-input']//span[@class='mat-checkbox-inner-container']"
  21 |     this.pricefilter6="//label[@for='mat-checkbox-144-input']//span[@class='mat-checkbox-inner-container']"
  22 | 
  23 |     //sort icon
  24 | 
  25 |     this.sorticon="//div[@class='sortDropdown']/span[2]"
  26 | 
  27 |     //price high to low 
  28 |     this.sorthightolow="//div[@class='sort-body']/ul/li[2]"
  29 | 
  30 |     //clear all
  31 |     this.clearall="//button[normalize-space()='Clear All']"
  32 | 
  33 |     //Add to cart
  34 | 
  35 |     this.addtocartbutton1=page.locator("(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[1]").first()
  36 |     this.addtocartbutton2="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[2]"
  37 |     this.addtocartbutton3="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[3]"
  38 |     this.addtocartbutton4="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[4]"
  39 | 
  40 |     //Cart icon in the add to cart button
  41 | 
  42 |     this.addcartlogo="//button[@class='BtnAddToCart added']//span[@class='icon-cart']"
  43 | 
  44 | 
  45 | 
  46 |     }
  47 | 
  48 |     async addcartbutton(){
  49 | 
  50 |         await this.addtocartbutton1.waitFor({ state: 'visible' })
  51 | 
  52 |         await this.addtocartbutton1.click()
  53 |     }
  54 | 
  55 | 
  56 |     async addcartlogobutton(){
  57 | 
  58 |         await this.page.click(this.addcartlogo)
  59 |     }
  60 | 
  61 |     async onclicksorticon(){
  62 | 
  63 |         await this.page.click(this.sorticon)
  64 |         
  65 |         
  66 |     }
  67 | 
  68 |     async onselectionofsort(){
  69 | 
  70 |         await this.page.click(this.sorthightolow)
  71 |         
  72 |     }
  73 | 
  74 |     async pricefilter(){
  75 | 
  76 |         const filter1= await this.page.locator(this.pricefilter1)
> 77 |         await this.page.waitFor(filter1).toBeVisible()
     |                         ^ TypeError: this.page.waitFor is not a function
  78 |         //await expect(filter1)
  79 |         await this.page.locator(filter1).check()
  80 | 
  81 |     }
  82 | 
  83 | 
  84 | }
```