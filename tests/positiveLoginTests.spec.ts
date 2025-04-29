import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ApplicationURL from '../helpers/ApplicationURL';


test.describe("Positive Login Scenarious", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

    })

    test("Login with standard_user", async ({ page }) => {
        await loginPage.LoginToApplication(process.env.STANDARD_USER, process.env.CORRECT_PASSWORD);
        await loginPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);



    })

    test("Login with problem_user", async ({ page }) => {
        await loginPage.LoginToApplication(process.env.PROBLEM_USER, process.env.CORRECT_PASSWORD);
        await loginPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
    })

    test("Login with visual_user", async ({ page }) => {
        await loginPage.LoginToApplication(process.env.VISUAL_USER, process.env.CORRECT_PASSWORD);
        await loginPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);

    })

})