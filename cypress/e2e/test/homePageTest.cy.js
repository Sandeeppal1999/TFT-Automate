import homePage from "../pagesObjects/homePage"
describe("Navbar Section Test Suite", () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it('Verify Logo', () => {
        homePage.navBarLogo();
    })
    it('Verify About clickable', () => {
        homePage.navBarAbout();
    })
    it('Verify services mouseover', () => {
        homePage.navBarServices();
    })
    it('verify Hire developer mouseover', () => {
        homePage.navBarHire();
    })
    it('Verify Blog clickable', () => {
        homePage.navBarBlog();
    })
    it('Verify carrer Clickable', () => {
        homePage.navBarCarrer();
    })
    it('Verify  ContactUs clickable', () => {
        homePage.navBarContactUs();
    })
    it('Verify phonecall Clickable', () => {
        homePage.navBarPhoneCall();
    })

})
