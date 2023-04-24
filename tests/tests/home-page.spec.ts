import { test, expect } from '@playwright/test';

test.fixme('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/UI Testing Exercises/);
});
