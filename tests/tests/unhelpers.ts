import {Page} from "@playwright/test";

export function sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*
 * Playwright actions typically wait until the element is in the desired state.
 * This function reduces the timeout to simulate other frameworks which don't
 * implicitly wait.
 */
export function quicklyFillInputByLabel(page: Page, label: string, value: string): Promise<void> {
    return page.getByLabel(label).fill(value, { timeout: 250 })
}
