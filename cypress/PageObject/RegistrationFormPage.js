


class RegistrationFormPage {
    static visit() {
        cy.visit("https://demoqa.com/automation-practice-form");
    }
   
    static get fName() {
        return cy.get(`#firstName`);
    }
    static get lName() {
        return cy.get(`#lastName`);
    }
    static get emailId() {
        return cy.get(`#userEmail`);
    }
    static gender(gender) {
        return cy.get(`input[value="${gender}"][type="radio"]`)
    }
    static get phNumber() {
        return cy.get(`#userNumber`);
    }
    static get dateOfBirth() {
        return cy.get(`#dateOfBirthInput`);
    }
    static setDate(date) {
        return cy.get(`div.react-datepicker__day--${date}:not(.react-datepicker__day--outside-month)`).click();
    }
    static setMonth(month) {
        return cy.get(`.react-datepicker__month-select`).select(month);
    }
    static setYear(year) {
        return cy.get(`.react-datepicker__year-select`).select(year);
    }
    
    static get subjects() {
        return cy.get(`#subjectsContainer`);
    }
    static get hobbies() {
        return cy.get(`#hobbiesWrapper .custom-control label`);
    }
    static get Currentaddress() {
        return cy.get(`#currentAddress`);
    }
    static get state() {
        return cy.get(`#state`);
    }
    static get city() {
        return cy.get(`#city`);
    }
    static get submitButton() {
        return cy.get(`#submit`)
    }

    static getField(label) {
        return cy.get(`tbody > tr`).contains(label).next();
    }

}

export default RegistrationFormPage;