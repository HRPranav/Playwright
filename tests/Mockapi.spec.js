import { test, expect } from '@playwright/test';

test('mock API response', async ({ page }) => {
  await page.route('**/api/users', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ]),
    });
  });

  await page.goto('https://www.google.com/');

  // Assertions depending on mocked data
  await expect(page.locator(".lnXdpd")).toBeVisible();
});
