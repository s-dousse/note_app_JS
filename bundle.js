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
        setNotes(notes) {
          this.notes = notes;
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
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.resetButton = document.querySelector("#reset-button");
          this.buttonAddNote = document.querySelector("#add-note-btn");
          this.emojiButton = document.querySelector("#add-emoji-btn");
          this.buttonAddNote.addEventListener("click", () => {
            const noteInput = document.querySelector("#note-input").value;
            this.api.createNote(noteInput, (notes) => {
              this.model.setNotes(notes);
              this.displayNotes();
            });
            document.querySelector("#note-input").value = "";
          });
          this.resetButton.addEventListener("click", () => {
            this.api.resetNotes((notes) => {
              this.model.setNotes(notes);
              this.displayNotes();
            });
          });
          this.emojiButton.addEventListener("click", () => {
            const noteInput = document.querySelector("#note-input").value;
            this.api.filterEmoji(noteInput, (data) => {
              const textNote = data.emojified_text;
              this.api.createNote(textNote, (notes) => {
                this.model.setNotes(notes);
                this.displayNotes();
              });
            });
          });
        }
        refreshDisplay() {
          let allDisplayedNotes = document.querySelectorAll(".note");
          allDisplayedNotes.forEach((noteDiv) => {
            noteDiv.remove();
          });
        }
        displayNotes() {
          this.refreshDisplay();
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            let noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => callback(data));
        }
        filterEmoji(noteText, callback) {
          const dynamicNote = { text: noteText };
          fetch("https://makers-emojify.herokuapp.com/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dynamicNote)
          }).then((response) => response.json()).then((data) => callback(data));
        }
        createNote(newNote, callback) {
          const note = { content: newNote };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
          }).then((response) => response.json()).then((data) => callback(data));
        }
        resetNotes(callback) {
          fetch("http://localhost:3000/notes", { method: "DELETE" }).then((response) => response.json()).then((data) => callback(data));
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var model = new NotesModel();
  var api = new NotesApi();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
