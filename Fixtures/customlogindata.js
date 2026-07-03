import {test as base,expect,page} from '@playwright/test'

const test=base.extend({

    Loggedinuser:async({page},use)=>{

        await page.goto('https://www.saucedemo.com/')

        await page.fill('#user-name','standard_user')
        await page.fill('#password','secret_sauce')

        await page.click('#login-button')

        await page.waitForTimeout(1000)

        await use(page)
    }

})

export {test,expect}