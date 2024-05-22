import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './practice',
  /* Maximum time one test can run for. (including the parallel run!) */
  timeout: 10 * 60 * 1000, // =10min

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI ? [['junit', { outputFile: 'test-results/results.xml' }]] : 'html',


  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://www.smartmed.world/', // Your base URL

    /* Default browser for tests. To manage custom ones, edit lower in the code in 'projects' */
    ...devices['Desktop Chromium'],

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 15 * 1000,

    /* Maximum time, navigation related. Was not added by defaults (no limit?). */
    navigationTimeout: 15 * 1000,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot: 'on',
    video: 'retain-on-failure',

    /* Avoid warning page for unsecure URls without https for example (recurrent in firefox) */
    ignoreHTTPSErrors: true,

    /**
     * Change default data attribute, `getByTestId('element')` will globally target [data-e2e="element"],
     * instead of default `data-testid` attribute, to match the Payplug locator convention.
     */
    testIdAttribute: 'data-e2e',
  },

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',
}

export default config