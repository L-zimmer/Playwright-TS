import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import * as process from 'process';
import { ErrorMessages } from '../helpers/ErrorMessages';
import '../helpers/UserCredencials'; // Ensure this file sets environment variables


test.describe("Negative Login Scenarious", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

    })

    test("Login with locked_out_user", async ({ page }) => {
        await loginPage.LoginToApplication(process.env.LOCKED_OUT_USER);
        await loginPage.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);
        await loginPage.validateElementText(page.locator(''), 'haha');


    })

    test("Login with incorrect username", async ({ page }) => {
        await loginPage.LoginToApplication("useruser");
        await loginPage.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    })

    test("Login with incorrect password", async ({ page }) => {
        await loginPage.LoginToApplication(process.env.STANDARD_USER, "incorrectpassword");
        await loginPage.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);

    })

})