"use strict";

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha steps demo', function () {
    var page = void 0;
    // let mobile;

    before(async function () {
        // browser = await puppeteer.launch({ headless: true });
        page = await _builder2.default.build("Desktop");
        // mobile = await Page.build("Mobile");
    });

    after(async function () {
        await page.close();
        // await mobile.close();
    });

    (0, _mochaSteps.step)("should load google homepage", async function () {
        await page.goto("http://zero.webappsecurity.com/");
        await page.waitAndClick("#onlineBankingMenu");
        await page.waitFor(5000);
    });
});