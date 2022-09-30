
class homePage {
    elements = {
        navLogo: () => cy.get(".logo"),
        navAbout: () => cy.get("a[href='/about-us']"),
        navServices: () => cy.get("#navbar > div > div > div.nav-bar.align-middle.right > ul > li:nth-child(2) > span"),
        navHire: () => cy.get("body > nav:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > span:nth-child(1)"),
        navBlog: () => cy.xpath("//a[normalize-space()='Blogs']"),
        navCarrer: () => cy.get("a[href='/career']"),
        navContactUs: () => cy.get("a[href='/contact-us']"),
        navCall: () => cy.get("li[class='nav-btn contact-popup-trigger'] a")
    }
    // Methods
    navBarLogo() {
        this.elements.navLogo().click();
    }
    navBarAbout() {
        this.elements.navAbout().click();
    }
    navBarServices() {
        this.elements.navServices().trigger('mouseover');
    }
    navBarHire() {
        this.elements.navHire().trigger('mouseover');
    }
    navBarBlog() {
        this.elements.navBlog().click();
    }
    navBarCarrer() {
        this.elements.navCarrer().click();
    }
    navBarContactUs() {
        this.elements.navContactUs().click();
    }
    navBarPhoneCall() {
        this.elements.navCall().click();
    }

}
module.exports = new homePage();