const Helper = require("./helper.page");
const expect = require("expect.js");

class CatalogPage {
    helper = new Helper();

    async homePageProducts() {
        const firstChildText = 'Ingrid Running Jacket';
        const secondChildText = 'Handmade Leather Donddi sandals For Women';
        const thirdChildText = 'Womens Wingtip Shoes Handmade Sheepskin Full Brogues Oxfords & Tie Flats';

        await this.helper.checkElementDisplayByText(firstChildText);
        await this.helper.checkElementDisplayByText(secondChildText);
        await this.helper.checkElementDisplayByText(thirdChildText);

    }

    async allProductsPage() {
        const descriptionOne = 'Handmade Leather Donddi sandals For Women, R$ 83, R$ 90'
        const descriptionTwo = "Ingrid Running Jacket, R$ 65, R$ 70"
        const descriptionThree = "Womens Wingtip Shoes Handmade Sheepskin Full Brogues Oxfords & Tie Flats, R$ 104, R$ 110"
        const descriptionFour = "Eos V-Neck Hoodie, R$ 54, R$ 60"

        await this.helper.checkElementDisplayByText(descriptionOne, false);
        await this.helper.checkElementDisplayByText(descriptionTwo, false);
        await this.helper.checkElementDisplayByText(descriptionThree, false);
        await this.helper.checkElementDisplayByText(descriptionFour, false);
    }
}

module.exports = CatalogPage;
