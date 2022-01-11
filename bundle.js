(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
        }
        displayNotes() {
          this.model.getNotes().forEach((note) => {
            const mainContainerEl = document.querySelector("#main-container");
            console.log(note);
            let newDiv = document.createElement("div");
            newDiv.classList.add("note");
            console.log("new div added");
            newDiv.append(note);
            mainContainerEl.append(newDiv);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  console.log(model.getNotes());
  var view = new NotesView(model);
  model.addNote("buy milk");
  model.addNote("go to gym");
  console.log(model.getNotes());
  view.displayNotes();
})();
