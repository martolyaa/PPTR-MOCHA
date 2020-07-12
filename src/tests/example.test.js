import { step } from "mocha-steps";
import Page from "../builder";

describe('Mocha steps demo', () => {
    let page;
    // let mobile;

    before(async () => {
        // browser = await puppeteer.launch({ headless: true });
        page = await Page.build("Desktop");
        // mobile = await Page.build("Mobile");
    });

    after(async () => {
        await page.close();
        // await mobile.close();
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