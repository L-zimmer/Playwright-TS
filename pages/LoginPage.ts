import { expect, Locator, Page } from "@playwright/test";
import UserCredencislas from "../helpers/UserCredencials";
import ApplicationURL from "../helpers/ApplicationURL";
import { ErrorMessages } from "../helpers/ErrorMessages";
import { BasePage } from "./BasePage";

export default class LoginPage  extends BasePage {

    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator; 

    constructor(protected page: Page) {
        super(page);
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');

    }



    public async LoginToApplication(username: string = UserCredencislas.STANDARD_USER, password: string = UserCredencislas.CORRECT_PASSWORD, url: string = ApplicationURL.BASE_URL) {
        await this.page.goto(url);
        await this.validatePageUrl(ApplicationURL.BASE_URL);
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    public async validateErrorMessage(errorMessage: ErrorMessages) {
        await this.validateElementText(this.errorMessage, errorMessage.valueOf());
    }


}