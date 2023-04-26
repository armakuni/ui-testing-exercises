import {expect, test} from "@playwright/test";

/*
 * Our Show Secret button doesn't seem to work if we check it too quickly.
 * If we can't wait until it is ready, then maybe we can find a way to retry
 * if it doesn't work the first time.
 */

test.fixme("show secret", async ({ page }) => {
    await page.goto("/exercise4");

    await expect(async () => {
        await page.getByRole("button", { name: "Show Secret" }).click()
        await expect(page.getByText("It was Professor Plum in the library with the pipe!")).toBeVisible()
    }).toPass()
})
