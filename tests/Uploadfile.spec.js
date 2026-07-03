import { test, expect } from '@playwright/test';

test("Upload files",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

   

  // single upload file

  await page.locator("//div//form//input[@id='singleFileInput']").setInputFiles('tests/Uploadfiles/Pranav_Resume1.pdf')

  await page.waitForTimeout(2000)

  await page.click("//button[normalize-space()='Upload Single File']")

  await page.waitForTimeout(2000)


  await expect(page.locator("//p[@id='singleFileStatus']")).toHaveText('Single file selected: Pranav_Resume1.pdf, Size: 397868 bytes, Type: application/pdf')

  await page.waitForTimeout(5000)


})

test.skip("Upload files1",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

   

  // multiple upload file

  await page.locator("//div//form//input[@id='multipleFilesInput']").setInputFiles(['tests/Uploadfiles/Pranav_Resume1.pdf','tests/Uploadfiles/Resume.pdf'])

   await page.waitForTimeout(2000)

   await page.click("//button[normalize-space()='Upload Multiple Files']")
   await page.waitForTimeout(2000)

   await expect(page.locator("//p[@id='multipleFilesStatus']")).toHaveText('Multiple files selected: Pranav_Resume1.pdf, Size: 397868 bytes, Type: application/pdf Resume.pdf, Size: 111873 bytes, Type: application/pdf')
    await page.waitForTimeout(5000)



})