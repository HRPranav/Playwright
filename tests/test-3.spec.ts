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
  await page.getByRole('img', { name: 'All Categories' }).click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#mat-checkbox-6 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.getByRole('button', { name: 'Clear All' }).click();
});