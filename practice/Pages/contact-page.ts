import { Page, expect } from '@playwright/test'

export class ContactPage {

    // Setup
    readonly page: Page
    // Locators
    readonly name
    readonly email
    readonly company
    readonly phoneNumber
    readonly msgTxtBox
    readonly thksHeading
    readonly agreeCheckBox
    readonly submitBtn

    readonly locator

    constructor(page: Page) {
        // Setup
        this.page = page

        // Locators
        this.name = page.locator('#Naam')
        this.email = page.getByLabel('Email Form', { exact: true }).getByPlaceholder('Email*')
        this.company = page.locator("(//input[@class='new-text-field w-input'])[3]");
        this.phoneNumber = page.locator("//input[@data-name='Telefoon']")
        this.msgTxtBox = page.locator("//input[@data-name='Bericht']")
        this.agreeCheckBox = page.locator("//span[@for='Checkbox']")
        this.submitBtn = page.locator("(//input[@type='submit'])[1]")
        this.thksHeading = page.locator('.heading-level-1');
    }

    //Method to fill the form 
    async fillContactForm() {
        // Generate random data for each field
        const randomName = this.generateRandomString(8)
        const randomEmail = this.generateRandomEmail()
        const randomCompany = this.generateRandomString(10)
        const randomPhoneNumber = this.generateRandomPhoneNumber()
        const randomMessage = this.generateRandomString(20)

        // Fill the form fields with random data
        await this.name.type(randomName)
        await this.email.type(randomEmail)
        await this.company.type(randomCompany)
        await this.phoneNumber.type(randomPhoneNumber)
        await this.msgTxtBox.type(randomMessage)
    }

    // Method to generate a random string of specified length
    generateRandomString(length: number): string {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = ''
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        return result
    }

    // Method to generate a random email address
    generateRandomEmail(): string {
        const domain = ['hotmail.com', 'gmail.com', 'yahoo.com', 'example.com']
        const randomDomain = domain[Math.floor(Math.random() * domain.length)]
        return this.generateRandomString(8) + '@' + randomDomain
    }

    //Method to generate a random phone number
    generateRandomPhoneNumber(): string {
        return Math.random().toString().slice(2, 12)
    }

    //Method to send the form after filled
    async submitForm() {
        await this.agreeCheckBox.click();
        await this.submitBtn.click()
    }

    ////////////////////
    //// ASSERTIONS ////
    ////////////////////

    async checkFormSent() {
        await expect(this.thksHeading).toBeVisible()
    }

}