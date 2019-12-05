"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
cucumber_1.Given('I want food in {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get('https://www.just-eat.co.uk/');
    yield protractor_1.element(protractor_1.by.css("input[name='postcode']")).sendKeys(string);
}));
cucumber_1.When('I search for restaurants', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.element(protractor_1.by.css("button[type='submit']")).click();
}));
cucumber_1.Then('I should see some restaurants in "AR51 1AA"', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    // await browser.get('https://www.just-eat.co.uk/area/ar51-area51');   
    var e = yield protractor_1.element(protractor_1.by.css("span[data-search-count-template-plural*='open restaurants']")).getText();
    console.log("I can see " + e + " in this area");
    //var d = await element(by.css('p[data-test-id="restaurant_delivery_details"]')).getText() ; 
    //var d = await element(by.xpath("//p[contains(text(),'Delivery FREE')]")).findElements;      
    // let list:any = browser.findElements(by.xpath("//p[contains(text(),'Delivery FREE')]"));
    //console.log(list.count);
    protractor_1.element.all(protractor_1.by.xpath("//p[contains(text(),'Delivery FREE')]")).count().then(function (size) {
        console.log("there are around " + size + " restaurants servin free delivery in your area");
    });
    //  var noOfFreeDelivery = d.search("delivery FREE") ; 
    //  if (noOfFreeDelivery >=0)
    //  {
    //    console.log("cutomer have the option to have free food") ; 
    //  }
}));
cucumber_1.Given('i am looking for {string} meat in various category', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css("label[for= 'halal']")).getText().then(function (text) {
        console.log(text + " is present");
    });
}));
cucumber_1.When('search for the {string} meat', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css("label[for= 'halal']")).click();
}));
cucumber_1.Then('multiple options for selected cusine', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    var or = yield protractor_1.element(protractor_1.by.css("span[data-search-count-template-plural*='open restaurants']")).getText();
    console.log("I can see " + or + " in this area in this cateory");
    // var po = await element(by.css("span[data-search-count-template-plural*='restaurants taking pre-orders for later']")).getText() ; 
    // console.log("there are"+ po + " in this area in this cateory") ; 
    // var no = await element(by.css("span[data-search-count-template-plural*='aren't taking orders']")).getText() ; 
    // console.log("there are"+ po + " in this area in this cateory") ; 
    // await element(by.css("p[data-cuisine-names*='halal']")).then(function(text){
    //   console.log("various options in the selected cuisine filter are"+ text) ;
    // });
    // element.all(by.css("p[data-cuisine-names*='halal']")).count().then(function(size){
    //   console.log("there are around "+ size + " different types of restaurants") ; 
    // })
}));
cucumber_1.Given('out of options available', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("booking");
}));
cucumber_1.When('i chose the morocan kebab restaurant', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.xpath("//h3[contains(text(),'Training Demo Restaurant 1')]")).click();
}));
cucumber_1.Then('book the order for the lunch', () => __awaiter(void 0, void 0, void 0, function* () {
    //          await element(by.css("span[data-product-id='19651993']")).click() ;
    var tu = yield protractor_1.element(protractor_1.by.css("form[data-product-id='19651993']  button[type='submit']")).submit();
    protractor_1.browser.sleep(3000);
    // element(by.xpath("//a[contains(text(),'I'm happy to collect my food')]")).click();
    yield protractor_1.element(protractor_1.by.xpath('//*[@id="collectionAgreedPrompt"]/p[2]/a')).click();
    protractor_1.browser.sleep(3000);
    yield protractor_1.element(protractor_1.by.css("button[class='checkoutButton']")).submit();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsMERBQXVEO0FBQ3ZELDJDQUFpRDtBQUNqRCxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDdEIsZ0JBQUssQ0FBQyx5QkFBeUIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzlDLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUU7SUFDNUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFRLEVBQUU7SUFDekMsb0VBQW9FO0lBR3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFFO0FBRzFELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkNBQTZDLEVBQUUsR0FBUSxFQUFFO0lBQzVELG9FQUFvRTtJQUdwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLHVFQUF1RTtJQUV2RSxJQUFJLENBQUMsR0FBRyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUU7SUFFeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFFO0lBR2hELDZGQUE2RjtJQUM3Riw4RkFBOEY7SUFDNUYsMEZBQTBGO0lBRXpGLDBCQUEwQjtJQUMxQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUUsSUFBSSxHQUFHLGdEQUFnRCxDQUFDLENBQUU7SUFDN0YsQ0FBQyxDQUFDLENBQUE7SUFJTix1REFBdUQ7SUFHdkQsNkJBQTZCO0lBQzdCLEtBQUs7SUFDTCxpRUFBaUU7SUFDakUsS0FBSztBQUVKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFLTixnQkFBSyxDQUFDLG9EQUFvRCxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFFekUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFFbEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXZELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0NBQXNDLEVBQUUsR0FBTyxFQUFFO0lBRXBELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxFQUFFLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkRBQTZELENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFFO0lBQ3pHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFFLEVBQUUsR0FBRywrQkFBK0IsQ0FBQyxDQUFFO0lBRWpFLG9JQUFvSTtJQUNwSSxvRUFBb0U7SUFFcEUsaUhBQWlIO0lBQ2pILG9FQUFvRTtJQUdwRSwrRUFBK0U7SUFDL0UsOEVBQThFO0lBQzlFLE1BQU07SUFDTixxRkFBcUY7SUFDckYsa0ZBQWtGO0lBQ2xGLEtBQUs7QUFFUCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsZ0JBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFPLEVBQUU7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBRTtBQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNDQUFzQyxFQUFFLEdBQU8sRUFBRTtJQUVsRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUU7QUFDNUYsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxHQUFPLEVBQUU7SUFFdEQsK0VBQStFO0lBQ3JFLElBQUksRUFBRSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBRTtJQUVwRyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRTtJQUdwQixxRkFBcUY7SUFHdkYsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBTTNFLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFFO0lBQ3JCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBRTtBQUVwRSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=