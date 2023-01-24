class FillingInfo {
   selectInfo = "#combo_facility";

   checkBox = "#chk_hospotal_readmission";
   radioButton = "#radio_program_medicaid";
   date = "#txt_visit_date";
   comment = "#txt_comment";
   confirmation = "#btn-book-appointment";
   verifyAppointMent = "div[class='col-xs-12 text-center'] h2";

   verification = "div[class='col-xs-12 text-center'] h2";

   commentVerify = "#comment";

   selectInfoClick(option) {
      cy.get(this.selectInfo).select(option);
   }

   clickCheckBox() {
      cy.get(this.checkBox).click();
   }

   clickRadioButton() {
      cy.get(this.radioButton).click();
   }

   dateInfo(date) {
      cy.get(this.date).type(date);
   }

   getComment(comment) {
      cy.get(this.comment).click({ force: true });
      cy.get(this.comment).type(comment);
   }

   clickConfirmation() {
      cy.get(this.confirmation).click();
   }

   verificationAfterConfirm(message) {
      cy.get(this.verifyAppointMent).contains(message);
   }

   verifyComment(comment) {
      cy.get(this.commentVerify).should("have.text", comment);
   }
}

export default FillingInfo;