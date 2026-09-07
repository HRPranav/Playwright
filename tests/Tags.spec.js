import { test, expect } from '@playwright/test';

test('Test1', { tag: '@smoke' },async ({page})=>{


   await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('Just a moment...')

   

})

test("Test2",{tag: '@regression'},async ({page})=>{

    console.log("This is regression test 1")

})

test('has title', {tag: '@smoke'}, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link',{tag: '@regression'}, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Test3", { tag: '@smoke' },async ({page})=>{

    console.log("This is test3")

})

test("Test4" ,{tag: '@regression'},async ({page})=>{

    console.log("This is test4")

})


test("Test5@san@reg",async ({page})=>{

    console.log("This is test5")

})
   