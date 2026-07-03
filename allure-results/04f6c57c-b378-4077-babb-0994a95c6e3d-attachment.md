# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BYODhomepage.spec.js >> Homepage searchtile actions
- Location: tests\BYODhomepage.spec.js:41:6

# Error details

```
Test timeout of 30000ms exceeded.
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
          - /url: /home?DEVICEID=INT
          - img [ref=e11]
      - generic [ref=e12]:
        - generic [ref=e15]:
          - text: 
          - generic [ref=e17]:
            - text: 
            - generic [ref=e21]:
              - combobox "Search" [active] [ref=e22]: gift
              - generic [ref=e24] [cursor=pointer]: 
              - button "" [ref=e26] [cursor=pointer]
        - generic [ref=e27]:
          - link "QR Scan" [ref=e29] [cursor=pointer]:
            - /url: /qrscan
            - generic [ref=e30]: 
            - text: QR Scan
          - generic "Categories" [ref=e31] [cursor=pointer]:
            - generic [ref=e32]: 
          - text: 
          - generic "Points Balance" [ref=e33] [cursor=pointer]:
            - generic [ref=e34]: 
          - generic "Tender Balances" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]: 
          - generic "Cart" [ref=e37] [cursor=pointer]:
            - generic [ref=e39]: 
          - generic "User Profile" [ref=e40] [cursor=pointer]:
            - figure [ref=e41]
      - text: 
    - generic [ref=e43]:
      - text: 
      - generic [ref=e44]:
        - text:  
        - list [ref=e45]:
          - listitem [ref=e46] [cursor=pointer]:
            - generic [ref=e47]: All Categories
          - listitem [ref=e48] [cursor=pointer]:
            - generic [ref=e49]: Life Style
          - listitem [ref=e50] [cursor=pointer]:
            - generic [ref=e51]: Lifestyle
          - listitem [ref=e52] [cursor=pointer]:
            - generic [ref=e53]: Sports & Outdoors
        - text:  
    - generic [ref=e54]:
      - generic [ref=e55]:
        - figure [ref=e56]
        - generic [ref=e57]: Joseph, You have $3,418.27 to redeem for this transaction.
        - generic [ref=e59]: 
      - text: 
    - generic [ref=e62]:
      - generic [ref=e63]:
        - generic [ref=e65]:
          - img [ref=e66]
          - tabpanel [ref=e67]:
            - img [ref=e68]
            - generic [ref=e69]:
              - heading [level=1] [ref=e70]:
                - generic [ref=e71]: Welcome, Joseph
              - paragraph [ref=e72]:
                - generic [ref=e73]: You can redeem
                - strong [ref=e74]: $3,418.27
              - text: 
          - tabpanel [ref=e75]:
            - img [ref=e76]
            - generic [ref=e78]:
              - generic:
                - generic: PBL_CREDITS
                - strong: 1,500
              - generic:
                - generic: FREE_MONEY
                - strong: 3,418.27
          - tabpanel [ref=e79]
          - tabpanel [ref=e80]
          - generic [ref=e81]:
            - img [ref=e82]
            - generic [ref=e83]:
              - heading [level=1] [ref=e84]:
                - generic [ref=e85]: Welcome, Joseph
              - paragraph [ref=e86]:
                - generic [ref=e87]: You can redeem
                - strong [ref=e88]: $3,418.27
              - text: 
          - generic [ref=e89]:
            - img [ref=e90]
            - generic [ref=e92]:
              - generic:
                - generic: PBL_CREDITS
                - strong: 1,500
              - generic:
                - generic: FREE_MONEY
                - strong: 3,418.27
          - img [ref=e93]
          - img [ref=e94]
        - tablist [ref=e95]:
          - tab "1 of 4" [ref=e96] [cursor=pointer]: "1"
          - tab "2 of 4" [selected] [ref=e97] [cursor=pointer]: "2"
          - tab "3 of 4" [ref=e98] [cursor=pointer]: "3"
          - tab "4 of 4" [ref=e99] [cursor=pointer]: "4"
      - generic [ref=e100]:
        - heading "Reward Categories" [level=2] [ref=e102]
        - generic [ref=e104]:
          - generic [ref=e105] [cursor=pointer]:
            - figure [ref=e106]:
              - img "All Categories" [ref=e107]
            - generic [ref=e108]: All Categories
          - generic [ref=e109] [cursor=pointer]:
            - figure [ref=e110]:
              - img "Life Style" [ref=e111]
            - generic [ref=e112]: Life Style
          - generic [ref=e113] [cursor=pointer]:
            - figure [ref=e114]:
              - img "Lifestyle" [ref=e115]
            - generic [ref=e116]: Lifestyle
          - generic [ref=e117] [cursor=pointer]:
            - figure [ref=e118]:
              - img "Sports & Outdoors" [ref=e119]
            - generic [ref=e120]: Sports & Outdoors
      - contentinfo [ref=e121]:
        - generic [ref=e124]: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
    - text:      
  - text: 
```