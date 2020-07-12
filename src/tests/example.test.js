import { step } from "mocha-steps";
import { expect } from "chai";
import Page from "../builder";

describe('Mocha steps demo', () => {
    let page;
    // let mobile;

    before(async () => {
        page = await Page.build("Desktop");
    });

    after(async () => {
        await page.close();
        // await mobile.close();
    });

    step("should load google homepage", async () => {
        await page.goto("http://zero.webappsecurity.com/");
        expect(await page.isElementVisible("#signin_button")).to.be.true
        });
    
    step ("should display login form", async () => {
        await page.waitAndClick("#signin_button");
        expect(await page.isElementVisible("#login_form")).to.be.true
        expect(await page.isElementVisible("#signin_button")).to.be.false
    });

    step ("should login to application", async () => {
        await page.waitAndType("#user_login", "username");
        await page.waitAndType("#user_password", "password");
        await page.waitAndClick(".btn-primary");
        expect(await page.isElementVisible(".nav-tabs")).to.be.true;
    });

    step("should have 6 navbar links", async () => {
        const navbarLinksCount = await page.getCount(".nav-tabs li");
        expect(navbarLinksCount).to.equal(6);
    })
});