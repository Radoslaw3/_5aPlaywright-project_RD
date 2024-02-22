import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Airbnb | Vacation rentals, cabins, beach houses, &amp; more/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');

  await expect(page.getByRole('heading', { name: 'Inspiration for future getaways' })).toBeVisible();

  // await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  
  await page.getByRole('button', { name: /Show filters/i }).click();

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});