const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

// Test to verify pushing, popping, and peeking at the stack
describe('Stack operations', () => {
    test('Pushing an element to the stack', async () => {
        let pushButton = await driver.findElement(By.id('push'));
        await pushButton.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Apple");
        await alert.accept();
    });
   
   

    test('Popping an element from the stack', async () => {
        let popButton = await driver.findElement(By.id('pop'));
        await popButton.click();
    });


});
