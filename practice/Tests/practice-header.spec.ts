import { test, Page } from '@playwright/test'
import { HeaderPage } from '../Pages/header-page'
import { ContactPage } from '../Pages/contact-page'
import { SearchPage } from '../Pages/search-page '

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    const headerPage = new HeaderPage(page);
    await page.goto('/');
    await headerPage.acceptCookies();
})

test('Verify Logo Clickability', async ({ page }) => {

    const headerPage = new HeaderPage(page)

    await test.step('When I click on the SmartMed logo in the header', async () => {
        await headerPage.clickSmartmedLogo()
    })

    await test.step('Then I should be redirected to the homepage', async () => {
        await headerPage.checkMainPage()
    })
})

test('Verify Submision of Contact form through the button in the header', async ({ page }) => {

    const headerPage = new HeaderPage(page)
    const contactPage = new ContactPage(page)

    await test.step('When I click on contact button', async () => {
        await headerPage.clickContactBtn()
    })

    await test.step('Then I see a form to be filled', async () => {
        await contactPage.fillContactForm()
    })

    await test.step('And I am able to submit the form by filling it', async () => {
        await contactPage.submitForm()
        await contactPage.checkFormSent()

    })
})

test('Verify Search Functionality', async ({ page }) => {

    const headerPage = new HeaderPage(page)
    const searchPage = new SearchPage(page)

    await test.step('When I click on the search icon in the header', async () => {
        await searchPage.clickSearchIcon()
    })

    await test.step('And I enter "medication management" into the search field', async () => {
        await searchPage.clickSearchBtn()
    })

    await test.step('Then I should see search results related to medication management', async () => {
        await searchPage.checkResultsPage()
    })
})