import SearchPage from "../pageobjects/search.page.js";
import SearchResultsPage from "../pageobjects/searchResults.page.js";

//load the seach page and send the search request

describe ('Search output links are relevant to the search query', () => {

it('Test 1. Verify output links hold the keyword using async function from the page object', async () => {
    await SearchPage.loadPage();
    await SearchPage.search('giant panda');
    console.log('The search is successfully performed Test 1');
    var outputArrayA = await SearchResultsPage.getOutputLinksAsync(); //this line returns a selector instead of an array of elements selected by the selector
    console.log('This is the output of async function ', outputArrayA); 
    console.log('received elements array ' + outputArrayA.length + ' items');
    for (let i = 0; i<outputArrayA.length; i++){
    var linkA = await outputArrayA[i].getText();
    expect(linkA.toLowerCase()).to.match(/panda/);
    console.log("Element " + i + " contains " + linkA);  // Log the text content
    }
}),

it('Test 2. Verify output links hold the keyword calling the selector from within the test without using the page object', async () => {
    await SearchPage.loadPage();
    await SearchPage.search('giant panda');
    console.log('The search is successfully performed Test 2');
    var outputArrayB = await $$('div[class*=Ww4FFb] a[jsname=UWckNb]'); //this line returns the elements selected by the selector
    console.log('This is the output of the selector within the test file ', outputArrayB);
    console.log('received elements array ' + outputArrayB.length + ' items');
    for (let i = 0; i<outputArrayB.length; i++){
    var linkB = await outputArrayB[i].getText();
    expect(linkB.toLowerCase()).to.match(/panda/);
    console.log("Element " + i + " contains " + linkB);  // Log the text content
    }
}),

it('Test 3. Verify output links hold the keyword using the getter from the page object', async () => {
    await SearchPage.loadPage();
    await SearchPage.search('giant panda');
    console.log('The search is successfully performed Test 3');
    var outputArrayC = await SearchResultsPage.getOutputLinksGetter.map( async (element) => await element.getText()); //this line returns a selector instead of an array of elements selected by the selector
    //var outputArray = await SearchResultsPage.getResults();
    console.log('This is the output of the getter function that was called from the page objects file and mapped in the test file', outputArrayC);
    console.log('received elements array ' + outputArrayC.length + ' items');
    for (let i = 0; i<outputArrayC.length; i++){
    var linkC = await outputArrayC[i].getText();
    expect(linkC.toLowerCase()).to.match(/panda/);
    console.log("Element " + i + " contains " + linkC);  // Log the text content
    }
}),

it('Test 4. Verify output links hold the keyword using a function from the page object', async () => {
    await SearchPage.loadPage();
    await SearchPage.search('giant panda');
    console.log('The search is successfully performed Test 4');
    var outputArrayD = await SearchResultsPage.getOutputLinks(); //this line returns a selector instead of an array of elements selected by the selector
    console.log('This is the output of non-async function ', outputArrayD); 
    console.log('received elements array ' + outputArrayD.length + ' items');
    for (let i = 0; i<outputArrayD.length; i++){
    var linkD = await outputArrayA[i].getText();
    expect(linkD.toLowerCase()).to.match(/panda/);
    console.log("Element " + i + " contains " + linkD);  // Log the text content
    }
})

});