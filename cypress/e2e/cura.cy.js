import ClickAppointMent from "../../PageObjects/ClickAppointMent";
import Login from "../../PageObjects/Login";
import FillingInfo from './../../PageObjects/FillingInfo';



describe('Cura Make Appointment', () => { 


    it('Visit the url', () => {
       const appointment = new ClickAppointMent();
       const makeLogin = new Login();

       const infoFiling = new FillingInfo();

        //  cy.visit(Cypress.env('baseUrl'));
        cy.visit("https://katalon-demo-cura.herokuapp.com/");

            appointment.clickAppointMents();


            makeLogin.loginAccount("John Doe", "ThisIsNotAPassword");
           


            //login click
            makeLogin.loginClick();

            cy.wait(3000);


             infoFiling
                .selectInfoClick("Hongkong CURA Healthcare Center")
                
             infoFiling.clickCheckBox();

            infoFiling.clickCheckBox();
             //Date
             infoFiling.dateInfo("30/03/2020");
             

             //comment
             infoFiling.getComment("Hello")
      

             //Click Confirmation
             infoFiling.clickConfirmation();

             //Confirmation
             infoFiling.verificationAfterConfirm("Appointment Confirmation");
                
             //verifyComment
             infoFiling.verifyComment("Hello")
        
           
              
    });

 })