class contactPage {
    visitContact() {
        cy.visit("https://www.tftus.com/");
        cy.get("a[href='/contact-us']").click();
    }
    fullName(name) {
        const fName = cy.get("div[id='wpcf7-f97-o1'] input[placeholder='Full Name']");
        fName.clear();
        fName.type(name);
        return this;
    }
    email(emailId) {
        const emmailfield = cy.get("body > section:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2) > input:nth-child(1)");
        emmailfield.clear();
        emmailfield.type(emailId);
        return this;

    }
    mobile(num) {
        const mob = cy.get("body > section:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2) > div:nth-child(1) > input:nth-child(2)");
        // mob.clear();
        mob.type(num);
        return this;
    }
    solution() {
        const sol = cy.get("div[id='wpcf7-f97-o1'] p[title='Select Here'] label");
        // sol.clear();
        sol.select(" Automation Testing ")
        return this;
    }
    message(sendMesaage) {
        const msg = cy.get("div[id='wpcf7-f97-o1'] textarea[placeholder='Your message here']");
        msg.clear();
        msg.type(sendMesaage);
        return this;
    }
    submit() {
        const submitbtn = cy.get("#submit");
        submitbtn.click();
        return this;
    }

}
export default contactPage