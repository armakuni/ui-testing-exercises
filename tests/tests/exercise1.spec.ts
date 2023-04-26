import { test, expect } from '@playwright/test';

/*
 * Those pesky designers keep changing the HTML.
 * The functionality of the pages remains the same, but the everytime the HTML gets
 * changed, these test fail.
 *
 * Familiarise yourself if the Playwright locators and consider how you could
 * use them to make the tests work more like a human user.
 *
 * https://playwright.dev/docs/locators
 */

test('subscribing to the newsletter', async ({ page }) => {
    await page.goto('/exercise1');

    await expect(page.getByRole("heading", {name: "Newsletter"})).toBeVisible()
    await page.getByLabel("Email").fill("person@example.com")
    await page.getByRole("button", {name: "Subscribe"}).click()

    await expect(page.getByRole("heading", {name: "Thank you for subscribing!"})).toBeVisible()
})
