import { $, browser } from '@wdio/globals'
import { Key } from 'webdriverio';
import Page from './page.js';

class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputTextSearchField() {
        return $('#APjFqb');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loadPage() {
        await browser.url('https://www.google.com/')
    }

    async search(text) {
        var searchField = await this.inputTextSearchField;
        await searchField.click();
        await searchField.addValue(text);
        await searchField.addValue(Key.Enter);
    }

}

export default new SearchPage();