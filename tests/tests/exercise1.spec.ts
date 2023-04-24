import { test, expect } from '@playwright/test';

/*
 * Those pesky designers keep changing the HTML.
 * The functionity of the pages remains the same, but the everytime the HTML gets
 * changed, these test fail.
 * 
 * Familiarise yourself if the Playwright locators and consider how you could
 * use them to make the tests work more like a human user.
 * 
 * https://playwright.dev/docs/locators
 */

test.fixme('subscribing to the newsletter', async ({ page }) => {
    await page.goto('/exercise1');

    await expect(page.locator("css=h2")).toHaveText("Newsletter")
    await page.locator("css=#email").fill("person@example.com")
    await page.locator("xpath=//button[@type='submit']").click()

    await expect(page.locator("css=h2")).toHaveText("Thank you for subscribing!")
});
