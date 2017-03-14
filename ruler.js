/* global app: true */
/* eslint no-undef: off */
(function main() {
  if(app.documents.length > 0) {
    var doc = app.activeDocument;
    var diag = app.dialogs.add({canCancel: true});
    var col = diag.dialogColumns.add();
    var list = [
      RulerOrigin.PAGE_ORIGIN,
      RulerOrigin.SPINE_ORIGIN,
      RulerOrigin.SPREAD_ORIGIN
    ];
    var strlist = function() {
      var strs = [];
      for(var i = 0; i < list.length; i++) {
        strs.push(list[i].toString());
      }
      return strs;
    };
    var dd = col.dropdowns.add();
    dd.stringList = strlist();
    dd.selectedIndex = 0;
    if(diag.show() === true) {
      var ndx = dd.selectedIndex;
      doc.viewPreferences.rulerOrigin = list[ndx];
      diag.destroy();
    }
  }
}());
