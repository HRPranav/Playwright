import { test, expect } from '@playwright/test';

test("Assertions",async ({page})=>{

  await page.goto("https://staging.sgpowerloyalty.com:8443/login?DEVICEID=INT")

    const title= await page.title()

    await expect(page).toHaveTitle('Player Boutique Live', { timeout: 10000 })

    
})