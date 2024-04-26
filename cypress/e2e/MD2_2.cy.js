describe('2 mājas darbs', () => {
    it('2 scenārijs, pārbauda vai tikšanās (Appointment) vēsture ir tukša', () => {
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

      //kliks uz izvēlnes pogas 
      cy.get('i.fa.fa-bars').click();

      //Pārbaude vai izvēlnes logs ir aktīvs/parādās
      cy.get('nav#sidebar-wrapper').should('have.class', 'active');
  
      //Kliks uz Vēstures izvēlnes
      cy.contains('a[href="history.php#history"]', 'History').click();
  
      //Pārbauda vai nekādi pieteikumi/tikšanās nav redzami
      cy.get('.col-sm-12.text-center').contains('No appointment.').should('be.visible');
    
    })
  })