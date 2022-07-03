import { Settings } from '../core/constants/settings';
import * as Utils from '../core/utils';

export class DonateList {
    #donates
    #donateItemsHTML

    static TextObject = {
        DonatesList: 'Список донатов',
    }

    constructor(donates) {
        this.#donates = donates;
    }

    #renderDonates(container) {
        this.#donateItemsHTML.innerHTML = '';
        this.#donates.forEach((donateItem) => {
            const donateItemHTML = document.createElement('div');
            donateItemHTML.className = 'donate-item';
            const creationTime = Utils.getFormattedTime(donateItem.date);
            donateItemHTML.innerHTML = `${creationTime} - <b>${donateItem.amount}${Settings.currency}</b>`;
            container.append(donateItemHTML);
        });
    }

    updateDonates(updatedDonates) {
        this.#donates = updatedDonates;
        this.#renderDonates(this.#donateItemsHTML);
    }

    render() {
        const donatesContainer = document.createElement('div');
        donatesContainer.className = 'donates-container';
        const donatesText = document.createElement('h2');
        donatesText.className = 'donates-container__title';
        donatesText.textContent = DonateList.TextObject.DonatesList;
        this.#donateItemsHTML = document.createElement('div');
        this.#donateItemsHTML.className = 'donates-container__donates';

        donatesContainer.append(donatesText, this.#donateItemsHTML);
        this.#renderDonates(this.#donateItemsHTML);

        return donatesContainer;
    }
}