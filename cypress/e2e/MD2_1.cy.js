describe('2 mājas darbs', () => {
    it('1 scenārijs, pieprasīt tikšanos (Appointment)', () => {
      //atver mājas lapu testēšanai
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      
      //kliks uz Make appointment pogas
      cy.get('a#btn-make-appointment').click();

      //Ievada doto lietotājvardu
      cy.get('input#txt-username').type("John Doe");

      //IEvada norādīto paroli
      cy.get('input#txt-password').type("ThisIsNotAPassword");
      
      //kliks uz login pogas
      cy.get('button#btn-login').click();

      //Izvēlas norādīto veselības aprūpes centru
      cy.get('select[name="facility"]').select('Seoul CURA Healthcare Center');

      //Ieķeksē lai pieteiktos hospital readmission
      cy.get('input#chk_hospotal_readmission').check();

      //Izvēles medicaid aprūpes programmu
      cy.get('input#radio_program_medicaid').check();

      //ieklikšina uz datuma izvēlnes lodziņa
      cy.get('input#txt_visit_date').click();

      //Izvēlas 30 dienu kalendārā
      cy.get('.datepicker').contains('30').click();

      //Uzklikšķina uz Book Appointment pogas
      cy.get('button#btn-book-appointment').click();
    })
  })