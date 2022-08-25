

  import RegistrationFormPage from "../PageObject/RegistrationFormPage";
  
  describe('Finaltask_Part_2', () => {
    
    it('Registration forms', () => {
      RegistrationFormPage.visit();

      let firstName = "Vignesh";
      let lastName = "Krishnan";
      let email = "viki.vconnect@gmail.com";
      let gender = "Male";
      let mobileNumber = "12345678";
      let dateOfBirthYear = "1996";
      let dateOfBirthMonth = "May";
      let dateOfBirthDay = "11";
      let subjects = "Computer Science";
      let hobbies = "Gaming";
      let address = "Tallinass iela 35";
      let state = "Riga";
      let city = "Riga";

      RegistrationFormPage.fName.type(firstName);
      RegistrationFormPage.lName.type(lastName);
      RegistrationFormPage.emailId.type(email);
      RegistrationFormPage.gender(gender).click({force: true});
      RegistrationFormPage.phNumber.type(mobileNumber);
      RegistrationFormPage.dateOfBirth.click();
      RegistrationFormPage.setYear(dateOfBirthYear);
      RegistrationFormPage.setMonth(dateOfBirthMonth);
      RegistrationFormPage.setDate(dateOfBirthDay);
      RegistrationFormPage.subjects.type(`${subjects}{enter}`);
      RegistrationFormPage.hobbies.contains(hobbies).click();
      RegistrationFormPage.Currentaddress.type(address);
      
    })
    
  })


