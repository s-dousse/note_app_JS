const NotesModel = require("./notesModel");

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");
    this.resetButton = document.querySelector("#reset-button");
    this.buttonAddNote = document.querySelector("#add-note-btn");
    this.emojiButton = document.querySelector("#add-emoji-btn");

    this.buttonAddNote.addEventListener("click", () => {
      const noteInput = document.querySelector("#note-input").value;
      // this.addNewNote(noteInput);
      this.api.createNote(noteInput, (notes) => {
        this.model.setNotes(notes);
        this.displayNotes();
      });
      document.querySelector("#note-input").value = ""; // clear input field value
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
      // this.api.createNote(noteInput, (notes))
    });
  }

  // addNewNote(note) {
  //     this.model.addNote(note);
  //     this.displayNotes();
  // }

  refreshDisplay() {
    let allDisplayedNotes = document.querySelectorAll(".note"); // frozen Nodelist
    allDisplayedNotes.forEach((noteDiv) => {
      // console.log("refreshing");
      // console.log(noteDiv); // => document.querySelectorAll("#note")[0]; ??
      noteDiv.remove();
    });
  }

  displayNotes() {
    // this.mainContainerEl.innerHTML = "";
    this.refreshDisplay();

    const notes = this.model.getNotes();

    notes.forEach((note) => {
      let noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";

      this.mainContainerEl.append(noteEl);
    });
  }
}

module.exports = NotesView;
