class Login {
   userName = "#txt-username";
   passWord = "#txt-password";
   click = "#btn-login";

   loginAccount(name, password) {
      cy.get(this.userName).type(name);
      cy.get(this.passWord).type(password);
   }

   loginClick() {
    cy.get(this.click).click()
   }
}

export default Login;