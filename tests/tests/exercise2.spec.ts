import { test, expect } from "@playwright/test";
import {quicklyFillInputByLabel} from "./unhelpers";

/*
 * The login form has been taking longer and longer to load. We keep modifying
 * this test to make it wait a bit longer, but a few weeks later it is breaking
 * again.
 *
 * Try and make the tests work without relying on a sleep.
 *
 * Note: Don't over think this exercise, Playwright provides a lot of built in
 * protection for this problem and this has been engineered to break that. Not
 * all frameworks provide this type of protection so it is worth understanding
 * what is happening.
 */

test("logging in", async ({ page }) => {
    await page.goto("/exercise2");

    await expect(page.getByRole("button", { name: "Log in" })).toBeVisible()
    await page.getByRole("button", { name: "Log in" }).click()

    /*

    // Wait for the form to load
    await expect(page.getByRole("button", {name: "Log in"})).toBeVisible()

    await quicklyFillInputByLabel(page, "Username", "user")
    await quicklyFillInputByLabel(page, "Password", "password")

    /*/

    // Or better yet, just use Playwright's built-in waits
    await page.getByLabel("Username").fill("user")
    await page.getByLabel("Password").fill("password")

    // */

    await page.getByRole("button", { name: "Log in" }).click()

    await expect(page.getByRole("heading", {name: "You are now logged in!"})).toBeVisible()
})
