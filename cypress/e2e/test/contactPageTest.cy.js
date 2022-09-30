import contactPage from "../pagesObjects/contactUs";
import homePage from "../pagesObjects/homePage";
describe('Write to Us Test Suite', () => {
    let userData;
    before(() => {
        cy.visit("/");
        homePage.navBarContactUs();
        cy.fixture('testData').then((data) => {
            userData = data;
        });
    });
    it('verify ContactUs form', () => {
       contactPage.contactForm(userData.name,userData.email,userData.mobNo,userData.message);
     


    })
})