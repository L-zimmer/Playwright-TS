import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import UserCredencislas from '../helpers/UserCredencials';
import { ErrorMessages } from '../helpers/ErrorMessages';
import ApplicationURL from '../helpers/ApplicationURL';


test.describe("Positive Login Scenarious", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

    })

    test("Login with standard_user", async ({ page }) => {
        await loginPage.LoginToApplication(UserCredencislas.STANDARD_USER);
        await loginPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);



    })

    test("Login with problem_user", async ({ page }) => {
        await loginPage.LoginToApplication(UserCredencislas.PROBLEM_USER);
        await loginPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);
    })

    test("Login with visual_user", async ({ page }) => {
        await loginPage.LoginToApplication(UserCredencislas.VISUAL_USER);
        await loginPage.validatePageUrl(ApplicationURL.INVENTORY_PAGE_URL);

    })

})