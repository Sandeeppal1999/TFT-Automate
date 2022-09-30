
class aboutPage {
    elements = {
        aboutTFT: () => cy.get("#banner > div > div > h3"),
        contactUsBtn: () => cy.get("a[class='btn']"),
        ceoImage: () => cy.get("#MzgyOjk3-1"),
        longPara: () => cy.get("div[class='col-8 service-banner'] p")
    }
    //methods
    aboutText() {
        this.elements.aboutTFT().should('have.text','About Think Future Technologies');
        // this.elements.longPara();
    }
    contactUsButton(){
        this.elements.ceoImage();

    }


}
module.exports = new aboutPage();