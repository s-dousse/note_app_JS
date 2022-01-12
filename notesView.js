const NotesModel = require("./notesModel");

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");

    this.buttonAddNote = document.querySelector("#add-note-btn");
    this.buttonAddNote.addEventListener("click", () => {
      const noteInput = document.querySelector("#note-input").value;
      // console.log(noteInput);
      this.addNewNote(noteInput);
      document.querySelector("#note-input").value = ""; // clear input field value
    });
  }

  addNewNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }

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
