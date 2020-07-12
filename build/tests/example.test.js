"use strict";

var _puppeteer = require("puppeteer");

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha steps demo', function () {
    // let browser;
    var page = void 0;

    before(async function () {
        // browser = await puppeeteer.launch({ headless: true });
        page = await _builder2.default.build("Desktop");
        // await page.setDefaultTimeout(7000);
    });

    after(async function () {
        await page.close();
    });

    (0, _mochaSteps.step)("should load google homepage", async function () {
        await page.goto("https://www.google.com");
    });

    (0, _mochaSteps.step)("step 2 should fail", async function () {
        await page.waitForSelector("#Fail");
    });

    (0, _mochaSteps.step)("step 3", async function () {
        console.log("From step 3");
    });

    (0, _mochaSteps.step)("step 4", async function () {
        console.log("From step 4");
    });
});