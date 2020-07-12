import puppeeteer from 'puppeteer';
import { step } from "mocha-steps";

describe('Mocha steps demo', () => {
    let browser;
    let page;

    before(async () => {
        browser = await puppeeteer.launch({ headless: true });
        page = await browser.newPage();
        await page.setDefaultTimeout(7000);
    });

    after(async () => {
        await browser.close();
    });

    step("should load google homepage", async () => {
        await page.goto("https://www.google.com");
        });

    step("step 2 should fail", async () => {
        await page.waitForSelector("#Fail");
    });

    step("step 3", async () => {
        console.log("From step 3");
    });

    step("step 4", async () => {
        console.log("From step 4");
    });
})