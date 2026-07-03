import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.sgpowerloyalty.com:8443/login');
  await page.locator('#mat-input-1').click();
  await page.locator('#mat-input-1').fill('500002');
  await page.locator('#mat-input-1').press('Tab');
  await page.locator('#mat-input-0').fill('1285');
  await page.locator('#mat-input-0').press('Enter');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://staging.sgpowerloyalty.com:8443/home');
  await page.locator('div').filter({ hasText: 'QR Scan37' }).nth(1).click();
  await page.goto('https://staging.sgpowerloyalty.com:8443/product-listing?category=All%20Categories');
});