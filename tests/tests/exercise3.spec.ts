import {expect, test} from "@playwright/test";

/*
 * We want to know that the right data is display in the table. This test used
 * to work fine, but now it seems to break because the order of the rows in the
 * table keeps changing.
 * 
 * Note, it is important that we check the contents of each row, simply checking
 * the presence of the values on the page isn't gooe enough.
 */

test.fixme("show me a secret", async ({ page }) => {
    await page.goto("/exercise3");

    await expect(page.locator("xpath=//tr[2]/td[1]")).toContainText("alice")
    await expect(page.locator("xpath=//tr[2]/td[2]")).toContainText("admin")

    await expect(page.locator("xpath=//tr[3]/td[1]")).toContainText("bob")
    await expect(page.locator("xpath=//tr[3]/td[2]")).toContainText("admin")

    await expect(page.locator("xpath=//tr[4]/td[1]")).toContainText("carol")
    await expect(page.locator("xpath=//tr[4]/td[2]")).toContainText("user")
});
