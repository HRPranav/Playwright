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
            - generic [ref=e38]:
              - generic [ref=e39]: 
              - generic [ref=e40]: "1"
          - generic "User Profile" [ref=e41] [cursor=pointer]:
            - figure [ref=e42]
      - text: 
    - generic [ref=e44]:
      - text: 
      - generic [ref=e45]:
        - text:  
        - list [ref=e46]:
          - listitem [ref=e47] [cursor=pointer]:
            - generic [ref=e48]: All Categories
          - listitem [ref=e49] [cursor=pointer]:
            - generic [ref=e50]: Eateries_1
          - listitem [ref=e51] [cursor=pointer]:
            - generic [ref=e52]: Lifestyle
          - listitem [ref=e53] [cursor=pointer]:
            - generic [ref=e54]: Sports & Outdoors
        - text:  
    - generic [ref=e55]:
      - generic [ref=e56]:
        - figure [ref=e57]
        - generic [ref=e58]: Joseph, You have $3,439.88 out of $3,446.38 to redeem for this transaction.
        - generic [ref=e60]: 
      - text: 
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]:
          - img [ref=e67]
          - tabpanel [ref=e68]:
            - img [ref=e69]
            - generic [ref=e70]:
              - heading [level=1] [ref=e71]:
                - generic [ref=e72]: Welcome, Joseph
              - paragraph [ref=e73]:
                - generic [ref=e74]: You can redeem
                - strong [ref=e75]: $3,446.38
              - text: 
          - tabpanel [ref=e76]:
            - img [ref=e77]
            - generic [ref=e79]:
              - generic:
                - generic: PBL_CREDITS
                - strong: 1,500
              - generic:
                - generic: FREE_MONEY
                - strong: 3,446.38
          - tabpanel [ref=e80]
          - tabpanel [ref=e81]
          - generic [ref=e82]:
            - img [ref=e83]
            - generic [ref=e84]:
              - heading [level=1] [ref=e85]:
                - generic [ref=e86]: Welcome, Joseph
              - paragraph [ref=e87]:
                - generic [ref=e88]: You can redeem
                - strong [ref=e89]: $3,446.38
              - text: 
          - generic [ref=e90]:
            - img [ref=e91]
            - generic [ref=e93]:
              - generic:
                - generic: PBL_CREDITS
                - strong: 1,500
              - generic:
                - generic: FREE_MONEY
                - strong: 3,446.38
          - img [ref=e94]
          - img [ref=e95]
        - tablist [ref=e96]:
          - tab "1 of 4" [ref=e97] [cursor=pointer]: "1"
          - tab "2 of 4" [selected] [ref=e98] [cursor=pointer]: "2"
          - tab "3 of 4" [ref=e99] [cursor=pointer]: "3"
          - tab "4 of 4" [ref=e100] [cursor=pointer]: "4"
      - generic [ref=e101]:
        - heading "Reward Categories" [level=2] [ref=e103]
        - generic [ref=e105]:
          - generic [ref=e106] [cursor=pointer]:
            - figure [ref=e107]:
              - img "All Categories" [ref=e108]
            - generic [ref=e109]: All Categories
          - generic [ref=e110] [cursor=pointer]:
            - figure [ref=e111]:
              - img "Eateries_1" [ref=e112]
            - generic [ref=e113]: Eateries_1
          - generic [ref=e114] [cursor=pointer]:
            - figure [ref=e115]:
              - img "Lifestyle" [ref=e116]
            - generic [ref=e117]: Lifestyle
          - generic [ref=e118] [cursor=pointer]:
            - figure [ref=e119]:
              - img "Sports & Outdoors" [ref=e120]
            - generic [ref=e121]: Sports & Outdoors
      - contentinfo [ref=e122]:
        - generic [ref=e125]: 2026 Light & Wonder, Inc. and its Subsidiaries. All rights reserved.
    - text:      
  - text: 
```