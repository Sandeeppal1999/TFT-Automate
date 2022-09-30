

class contactPage {
    elements = {
        contactUsHeading: () => cy.get('.col-8 > h3'),
        fName: () => cy.get('#wpcf7-f97-o1 > .wpcf7-form > .grid-6 > :nth-child(1) > .wpcf7-form-control-wrap > .wpcf7-form-control'),
        email: () => cy.get("#email"),
        mobileNO: () => cy.get("body > section:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2) > div:nth-child(1) > input:nth-child(2)"),
        message: () => cy.get("div[id='wpcf7-f97-o1'] textarea[placeholder='Your message here']"),
        submit: () => cy.get("#submit"),
        solution: () => cy.get("#wpcf7-f97-o1 > form > div.grid.grid-6 > div:nth-child(4) > span > div > select")
    }
    //methods
    contactForm(name, email, mobNo, message) {

        this.elements.contactUsHeading().should('have.text', "Contact Us");
        this.elements.fName().clear().wait(5000).type(name);
        this.elements.email().clear().wait(5000).type(email);
        this.elements.mobileNO().clear().wait(5000).type(mobNo);
        this.elements.solution().select('For Startups', { force: true });
        this.elements.message().clear().wait(5000).type(message);
        cy.get('#anr_captcha_field_1 > [style="width: 304px; height: 78px;"] > div > iframe').click();
        this.elements.submit().click();
    }
}
module.exports = new contactPage();
