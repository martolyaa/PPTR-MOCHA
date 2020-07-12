import puppeteer from 'puppeteer';

export default class Builder {
    static async build(viewport) {
        const launchOptions = {
            headless: true,
            slowMo: 0,
            args: [
                "--no-sandbox",
                "--disable-setui-sandbox",
                "--disable-web-security"
            ]
        };

        const browser = await puppeteer.launch(launchOptions);
        const page = await browser.newPage();
        const extendedPage = new Builder(page);
        await page.setDefaultTimeout(10000);

        switch (viewport) {
            case "Mobile":
                const mobileViewport = puppeteer.devices["iPhone X"];
                await page.emulate(mobileViewPort);
                break;
            case "Tablet":
                const tabletViewport = puppeteer.devices["iPad landscape"];
                await page.emulate(tabletViewPort);
                break;
            case "Desktop":
                await page.setViewport({ width: 800, height: 600 });
                break;
                throw new Error('Supported devices are onle Mobile | Tablet | Destop')
        }

        return new Proxy(extendedPage, {
            get: function(_target, property) {
                return extendedPage[property] || browser[property] || page[property];
            }
        });
    }

    constructor(page) {
        this.page = page;
    }
}