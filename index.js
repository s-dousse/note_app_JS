const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const model = new NotesModel();
console.log(model.getNotes());
const view = new NotesView(model);

model.addNote("buy milk");
model.addNote("go to gym");
console.log(model.getNotes());

// view behaviour
view.displayNotes();
