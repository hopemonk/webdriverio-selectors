import Page from './page.js';

class SearchResultsPage extends Page {

    get getOutputLinksGetter(){
        return $$('div[class*=Ww4FFb] a[jsname=UWckNb]');
    }

    async getOutputLinksAsync() {
        return await $$('div[class*=Ww4FFb] a[jsname=UWckNb]');
    }

    getOutputLinks() {
        return $$('div[class*=Ww4FFb] a[jsname=UWckNb]');
    }
}

export default new SearchResultsPage();