import { Locator, Page, expect, test } from "@playwright/test";

export abstract class BasePage {


    constructor(protected page: Page) {

    };

    public async validatePageUrl(url: string) {
        await test.step(`validating that a correct value of URL is ${url}`, async () => {
            await expect(this.page).toHaveURL(url);
        });

    }

    public async validateElementText(element: Locator, expectedText: string) {
        await test.step(`validating that a correct element text is ${expectedText}`, async () => {
            await expect(element).toContainText(expectedText);
        });

    }
}