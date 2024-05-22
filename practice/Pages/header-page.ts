import { Page, expect } from '@playwright/test'

export class HeaderPage {

    // Setup
    readonly page: Page
    // Locators
    readonly logoLocator
    readonly cookiesBtn
    readonly menu
    readonly heading
    readonly contactBtn

    constructor(page: Page) {
        // Setup
        this.page = page

        // Locators
        this.logoLocator = page.locator('.absolute-link').first()
        this.cookiesBtn = page.getByRole('button', { name: 'Accepteren' })

        this.menu = page.getByRole('navigation').getByRole('link').nth(2)
        this.heading = page.locator("//h1[@class='heading-level-1']")
        this.contactBtn = page.locator("//a[contains(@class,'button-new nav')]")
    }

    //Method to accept the cookies in the banner
    async acceptCookies() {
        await this.cookiesBtn.click()
    }

    //Method to Click on Smartmed Logo in the header
    async clickSmartmedLogo() {

        await this.menu.click()
        await this.logoLocator.click()
    }

    //Method to click on Contact button
    async clickContactBtn() {
        await this.contactBtn.click()
    }

    ////////////////////
    //// ASSERTIONS ////
    ////////////////////

    async checkMainPage() {
        await expect(this.heading).toBeVisible()
    }

}