import homePage from "../pagesObjects/homePage";
import contactPage from "../pagesObjects/contactUs";
import aboutPage from "../pagesObjects/aboutPage";
describe("About Page test Suite",()=>{
    let userData;
    before(() => {
        cy.visit("/");
        homePage.navBarAbout()
;        cy.fixture('testData').then((data) => {
            userData = data;
        });
    });

    it('Verify About TFT Text shown',()=>{
        aboutPage.aboutText();


    })
})