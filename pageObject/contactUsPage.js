var ContactUsPage = function ContactUsPage() {

    this.URL = "http://automationpractice.com/index.php?controller=contact";
   this.customerService = element(By.css('#center_column > h1')); 
   this.subjectHeading = element(By.css('#id_contact'));
   this.send = element(By.css('#submitMessage'));
}

module.exports = ContactUsPage;
