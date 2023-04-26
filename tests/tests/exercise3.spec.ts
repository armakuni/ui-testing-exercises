import {expect, test} from "@playwright/test";

/*
 * We want to know that the right data is display in the table. This test used
 * to work fine, but now it seems to break because the order of the rows in the
 * table keeps changing.
 *
 * Note, it is important that we check the contents of each row, simply checking
 * the presence of the values on the page isn't good enough.
 */

test("show me a secret", async ({ page }) => {
    await page.goto("/exercise3");

    const aliceRow = await page.getByRole("row", {name: "alice"})
    await expect(aliceRow).toContainText("admin")

    const bobRow = await page.getByRole("row", {name: "bob"})
    await expect(bobRow).toContainText("admin")

    const carolRow = await page.getByRole("row", {name: "carol"})
    await expect(carolRow).toContainText("user")
})
