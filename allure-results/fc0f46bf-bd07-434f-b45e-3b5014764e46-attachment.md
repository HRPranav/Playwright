# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Byoditemlisting.spec.js >> sorticon
- Location: tests\Byoditemlisting.spec.js:55:5

# Error details

```
TypeError: this.sorticon.waitFor is not a function
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
          - text: 
          - generic "Categories" [ref=e26] [cursor=pointer]:
            - generic [ref=e27]: 
          - text: 
          - generic "Points Balance" [ref=e28] [cursor=pointer]:
            - generic [ref=e29]: 
          - generic "Tender Balances" [ref=e30] [cursor=pointer]:
            - generic [ref=e31]: 
          - generic "Cart" [ref=e32] [cursor=pointer]:
            - generic [ref=e33]:
              - generic [ref=e34]: 
              - generic [ref=e35]: "17"
          - generic "User Profile" [ref=e36] [cursor=pointer]:
            - figure [ref=e37]
      - text: 
    - generic:
      - generic:
        - text: 
        - generic:    
    - generic [ref=e38]:
      - generic [ref=e39]:
        - figure [ref=e40]
        - generic [ref=e41]: Joseph, You have $ 6,917 out of $ 7,022 to redeem for this transaction.
        - generic [ref=e43]: 
      - text: 
    - generic [ref=e46]:
      - list [ref=e47]:
        - listitem [ref=e48] [cursor=pointer]:
          - generic [ref=e49]: All
        - listitem [ref=e50] [cursor=pointer]:
          - generic [ref=e51]: Clothes, Shoes & Watches
        - listitem [ref=e52] [cursor=pointer]:
          - generic [ref=e53]: Lifestyle
        - listitem [ref=e54] [cursor=pointer]:
          - generic [ref=e55]: Sports & Outdoors
      - generic [ref=e56]:
        - heading "All Categories - 15 Items" [level=3] [ref=e57]
        - generic [ref=e58]:
          - generic [ref=e59]: "Sort by:"
          - generic [ref=e60] [cursor=pointer]:
            - generic [ref=e61]:
              - generic [ref=e62]: Price Low to High
              - generic [ref=e63]: 
            - generic [ref=e64]:
              - text: 
              - list [ref=e66]:
                - listitem [ref=e67]: Price Low to High
                - listitem [ref=e68]: Price High to Low
        - generic [ref=e71]:
          - generic [ref=e72]:
            - heading "Filter" [level=2] [ref=e73]
            - text: 
          - generic [ref=e75]:
            - heading "Price" [level=3] [ref=e76]
            - list [ref=e78]:
              - listitem [ref=e79]:
                - generic [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]:
                    - checkbox "$ 1 - $ 100" [ref=e84]
                    - generic:
                      - img
                  - generic [ref=e85]: $ 1 - $ 100
              - listitem [ref=e86]:
                - generic [ref=e89] [cursor=pointer]:
                  - generic [ref=e90]:
                    - checkbox "$ 100 - $ 500" [ref=e91]
                    - generic:
                      - img
                  - generic [ref=e92]: $ 100 - $ 500
              - listitem [ref=e93]:
                - generic [ref=e96] [cursor=pointer]:
                  - generic [ref=e97]:
                    - checkbox "$ 500 - $ 2,000" [ref=e98]
                    - generic:
                      - img
                  - generic [ref=e99]: $ 500 - $ 2,000
              - listitem [ref=e100]:
                - generic [ref=e103] [cursor=pointer]:
                  - generic [ref=e104]:
                    - checkbox "$ 2,000 - $ 5,000" [ref=e105]
                    - generic:
                      - img
                  - generic [ref=e106]: $ 2,000 - $ 5,000
              - listitem [ref=e107]:
                - generic [ref=e110] [cursor=pointer]:
                  - generic [ref=e111]:
                    - checkbox "$ 5,000 & Above" [ref=e112]
                    - generic:
                      - img
                  - generic [ref=e113]: $ 5,000 & Above
              - listitem [ref=e114]:
                - generic [ref=e117] [cursor=pointer]:
                  - generic [ref=e118]:
                    - checkbox "$ 1 - My Current Balance" [ref=e119]
                    - generic:
                      - img
                  - generic [ref=e120]: $ 1 - My Current Balance
          - button "Clear All" [ref=e121] [cursor=pointer]
        - generic [ref=e125]:
          - generic [ref=e126] [cursor=pointer]:
            - figure [ref=e127]:
              - img "BIC Round Stic Xtra Life Blue Ballpoint Pens, Medium" [ref=e128]
            - heading "BIC Round Stic Xtra Life Blue Ballpoint Pens, Medium" [level=2] [ref=e129]
            - strong [ref=e130]:
              - generic [ref=e131]: $ 6
            - strong
            - button "Add to cart Go to Cart    " [ref=e133]:
              - generic [ref=e134]: Add to cart
              - generic [ref=e135]:
                - generic [ref=e136]: Go to Cart
                - generic [ref=e137]:
                  - generic [ref=e138]: 
                  - generic [ref=e139]: 
                  - generic [ref=e140]: 
                  - generic [ref=e141]: 
          - generic [ref=e142] [cursor=pointer]:
            - figure [ref=e143]:
              - img "$1 Gift Gift Card" [ref=e144]
            - heading "$1 Gift Gift Card" [level=2] [ref=e145]
            - strong [ref=e146]:
              - generic [ref=e147]: $ 6
            - strong
            - button "Add to cart Go to Cart    " [ref=e149]:
              - generic [ref=e150]: Add to cart
              - generic [ref=e151]:
                - generic [ref=e152]: Go to Cart
                - generic [ref=e153]:
                  - generic [ref=e154]: 
                  - generic [ref=e155]: 
                  - generic [ref=e156]: 
                  - generic [ref=e157]: 
          - generic [ref=e158] [cursor=pointer]:
            - figure [ref=e159]:
              - img "$5 Starbucks Gift Card" [ref=e160]
            - heading "$5 Starbucks Gift Card" [level=2] [ref=e161]
            - strong [ref=e162]:
              - generic [ref=e163]: $ 11
            - strong
            - button "Add to cart Go to Cart    " [ref=e165]:
              - generic [ref=e166]: Add to cart
              - generic [ref=e167]:
                - generic [ref=e168]: Go to Cart
                - generic [ref=e169]:
                  - generic [ref=e170]: 
                  - generic [ref=e171]: 
                  - generic [ref=e172]: 
                  - generic [ref=e173]: 
          - generic [ref=e174] [cursor=pointer]:
            - figure [ref=e175]:
              - img "kisnbld Small Exercise Ball, 9 Inch Mini Pilates Ball," [ref=e176]
            - heading "kisnbld Small Exercise Ball, 9 Inch Mini Pilates Ball," [level=2] [ref=e177]
            - strong [ref=e178]:
              - generic [ref=e179]: $ 13
            - strong
            - button "Add to cart Go to Cart    " [ref=e181]:
              - generic [ref=e182]: Add to cart
              - generic [ref=e183]:
                - generic [ref=e184]: Go to Cart
                - generic [ref=e185]:
                  - generic [ref=e186]: 
                  - generic [ref=e187]: 
                  - generic [ref=e188]: 
                  - generic [ref=e189]: 
          - generic [ref=e190] [cursor=pointer]:
            - figure [ref=e191]:
              - img "iPhone 17 16 15 Charger Fast Charging Type C Chargers" [ref=e192]
            - heading "iPhone 17 16 15 Charger Fast Charging Type C Chargers" [level=2] [ref=e193]
            - strong [ref=e194]:
              - generic [ref=e195]: $ 14
            - strong
            - button "Add to cart Go to Cart    " [ref=e197]:
              - generic [ref=e198]: Add to cart
              - generic [ref=e199]:
                - generic [ref=e200]: Go to Cart
                - generic [ref=e201]:
                  - generic [ref=e202]: 
                  - generic [ref=e203]: 
                  - generic [ref=e204]: 
                  - generic [ref=e205]: 
          - generic [ref=e206] [cursor=pointer]:
            - figure [ref=e207]:
              - img "LeBron James (Sports All-Stars (Lerner ™ Sports))" [ref=e208]
            - heading "LeBron James (Sports All-Stars (Lerner ™ Sports))" [level=2] [ref=e209]
            - strong [ref=e210]:
              - generic [ref=e211]: $ 16
            - strong
            - button "Add to cart Go to Cart    " [ref=e213]:
              - generic [ref=e214]: Add to cart
              - generic [ref=e215]:
                - generic [ref=e216]: Go to Cart
                - generic [ref=e217]:
                  - generic [ref=e218]: 
                  - generic [ref=e219]: 
                  - generic [ref=e220]: 
                  - generic [ref=e221]: 
          - generic [ref=e222] [cursor=pointer]:
            - figure [ref=e223]:
              - img "GOCKERA Portable Fan, 4200mAh Battery Operated Fan, 5" [ref=e224]
            - heading "GOCKERA Portable Fan, 4200mAh Battery Operated Fan, 5" [level=2] [ref=e225]
            - strong [ref=e226]:
              - generic [ref=e227]: $ 16
            - strong
            - button "Add to cart Go to Cart    " [ref=e229]:
              - generic [ref=e230]: Add to cart
              - generic [ref=e231]:
                - generic [ref=e232]: Go to Cart
                - generic [ref=e233]:
                  - generic [ref=e234]: 
                  - generic [ref=e235]: 
                  - generic [ref=e236]: 
                  - generic [ref=e237]: 
          - generic [ref=e238] [cursor=pointer]:
            - figure [ref=e239]:
              - img "AIPPK 18K Gold Plated Clover Lucky Bracelet for Women" [ref=e240]
            - heading "AIPPK 18K Gold Plated Clover Lucky Bracelet for Women" [level=2] [ref=e241]
            - strong [ref=e242]:
              - generic [ref=e243]: $ 20
            - strong
            - button "Add to cart Go to Cart    " [ref=e245]:
              - generic [ref=e246]: Add to cart
              - generic [ref=e247]:
                - generic [ref=e248]: Go to Cart
                - generic [ref=e249]:
                  - generic [ref=e250]: 
                  - generic [ref=e251]: 
                  - generic [ref=e252]: 
                  - generic [ref=e253]: 
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
  16 |     this.pricefilter1="//label[@for='mat-checkbox-139-input']//span[@class='mat-checkbox-inner-container']"
  17 |     this.pricefilter2="//label[@for='mat-checkbox-140-input']//span[@class='mat-checkbox-inner-container']"
  18 |     this.pricefilter3="//label[@for='mat-checkbox-141-input']//span[@class='mat-checkbox-inner-container']"
  19 |     this.pricefilter4="//label[@for='mat-checkbox-142-input']//span[@class='mat-checkbox-inner-container']"
  20 |     this.pricefilter5="//label[@for='mat-checkbox-143-input']//span[@class='mat-checkbox-inner-container']"
  21 |     this.pricefilter6="//label[@for='mat-checkbox-144-input']//span[@class='mat-checkbox-inner-container']"
  22 | 
  23 |     //sort icon
  24 | 
  25 |     this.sorticon="//div[@class='sortDropdown']/span[2]"
  26 | 
  27 |     //clear all
  28 |     this.clearall="//button[normalize-space()='Clear All']"
  29 | 
  30 |     //Add to cart
  31 | 
  32 |     this.addtocartbutton1=page.locator("(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[1]").first()
  33 |     this.addtocartbutton2="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[2]"
  34 |     this.addtocartbutton3="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[3]"
  35 |     this.addtocartbutton4="(//div[@class='labelAddToCart'][normalize-space()='Add to cart'])[4]"
  36 | 
  37 |     //Cart icon in the add to cart button
  38 | 
  39 |     this.addcartlogo="//button[@class='BtnAddToCart added']//span[@class='icon-cart']"
  40 | 
  41 | 
  42 | 
  43 |     }
  44 | 
  45 |     async addcartbutton(){
  46 | 
  47 |         await this.addtocartbutton1.waitFor({ state: 'visible' })
  48 | 
  49 |         await this.addtocartbutton1.click()
  50 |     }
  51 | 
  52 | 
  53 |     async addcartlogobutton(){
  54 | 
  55 |         await this.page.click(this.addcartlogo)
  56 |     }
  57 | 
  58 |     async onclicksorticon(){
  59 | 
  60 |         await this.page.click(this.sorticon)
  61 |         
  62 |         
  63 |     }
  64 | 
  65 |     async onselectionofsort(){
  66 | 
> 67 |         await this.sorticon.waitFor({ state: 'visible' })
     |                             ^ TypeError: this.sorticon.waitFor is not a function
  68 | 
  69 |         await this.page.locator(this.sorticon).selectOption('Price High to Low')
  70 |     }
  71 | 
  72 | 
  73 | }
```