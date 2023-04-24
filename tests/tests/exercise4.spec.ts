import {expect, test} from "@playwright/test";
import {sleep} from "./unhelpers";

/*
 * Our Show Secret button doesn't seem to work if we check it too quickly.
 * If we can't wait until it is ready, then maybe we can find a way to retry
 * if it doesn't work the first time.
 */

test("display users", async ({ page }) => {
    await page.goto("/exercise4");

    // Wait for the page to load and button to become active
    await sleep(2000)

    await page.getByRole("button", { name: "Show Secret" }).click()
    await expect(page.getByText("It was Professor Plum in the library with the pipe!")).toBeVisible()
});
