import 'cypress-file-upload';
import 'cypress-iframe';
describe('File Uploading in Cypress', () => {
    it.skip('Upload single file', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("Test1.pdf");
        cy.get("#file-submit").click();
        cy.wait(2000);

        //Validation of file is uploaded or not
        cy.get("#content h3").should('have.text', 'File Uploaded!');

    });

    it.skip('Upload File and change its name while uploading', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({ filePath: 'Test1.pdf', fileName: 'MyFile.pdf' });
        cy.get("#file-submit").click();
        cy.wait(2000);

        //Validation of file is uploaded or not
        cy.get("#content h3").should('have.text', 'File Uploaded!');

    });


    it.skip('Upload File Using Drap and Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("div#drag-drop-upload").attachFile("Test1.pdf", { subjectType: "drag-n-drop" })
        cy.wait(2000);
        cy.get(".dz-filename>span").should("include.text", "Test1.pdf");
    });

    it.skip('Upload Mltiple files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        ///Before File selecting--->No File Selected will be visible
        cy.xpath("//li[text()='No Files Selected']").should('be.visible');

        cy.get("#filesToUpload").attachFile(['Test1.pdf', 'Test2.pdf']);
        cy.wait(2000);

        //After file uploading no file selected will not be visible
        cy.xpath("//li[text()='No Files Selected']").should('not.exist');


    });

    it.only('Upload File-Shadow Dom--->(File Upload is present inside the another DOM of main Dom', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");
         cy.frameLoaded('.demo-frame');
         cy.iframe('.demo-frame').find('.smart-browse-input', {includeShadowDom:true}).attachFile("Test1.pdf");
      
         //  cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("Test1.pdf");
         cy.wait(5000);
         cy.iframe('.demo-frame').find('.smart-item-name', {includeShadowDom:true}).should('contain.text', 'Test1.pdf');
    });


});