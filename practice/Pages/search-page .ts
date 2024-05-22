import { Page, expect } from '@playwright/test'

export class SearchPage {

    // Setup
    readonly page: Page
    // Locators
    readonly searchIcon
    readonly searchTextBox
    readonly searchBtn

    constructor(page: Page) {
        // Setup
        this.page = page

        // Locators        
        this.searchIcon = page.locator("//img[@class='arrow']/following-sibling::a[1]")
        this.searchTextBox = page.locator("//input[@class='new-text-field w-input']")
        this.searchBtn = page.locator("(//input[@type='submit'])[1]")
        //this.searchBtn = page.getByRole('button', { name: 'Search' })
    }

    //Method to Click on Search icon in the header
    async clickSearchIcon() {
        await this.searchIcon.click()
    }

    //Method to type a wanted result and then click on search button to get results
    async clickSearchBtn() {
        await this.searchTextBox.type('medication management')
        await this.searchBtn.click()
        await this.page.waitForLoadState()
    }

    ////////////////////
    //// ASSERTIONS ////
    ////////////////////

    async checkResultsPage() {
        await expect(this.page).toHaveURL(/https:\/\/www\.smartmed\.world\/search\?query=.*/);
    }

}