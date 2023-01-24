class ClickAppointMent {
   makeApp = "#btn-make-appointment";

   clickAppointMents() {
    cy.get(this.makeApp).click();
   }
}

export default ClickAppointMent;