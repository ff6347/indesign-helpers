/* global app */
(function main() {
  if(app.documents.length > 0) {
    var doc = app.activeDocument;
    doc.documentPreferences.facingPages = !doc.documentPreferences.facingPages;
  }
}());
