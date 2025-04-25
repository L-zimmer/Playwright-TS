import { test, expect } from '@playwright/test';
import LoginPage from './pages/LoginPage';
import UserCredencislas from '../helpers/UserCredencials';
import ApplicationURL from '../helpers/ApplicationURL';

test('test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.LoginToApplication();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="cancel"]').click();
});

test('demo test 1', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.LoginToApplication();
});

test('demo test 2', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.LoginToApplication();
});