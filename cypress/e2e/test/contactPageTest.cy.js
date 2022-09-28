import contactPage from "../pages/contactUs";

describe('Write to Us Test Suite', () => {
    it('login', () => {
        const cont = new contactPage();
        cont.visitContact();
        cont.fullName("rock");
        cont.email("rockstarkapoor100@gmail.com");
        cont.mobile("1234556677");
        // cont.solution();
        cont.message("Hello TFT, I want website for my company");
        cont.submit();
    })
})