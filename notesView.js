const NotesModel = require("./notesModel");

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");

    this.buttonAddNote = document.querySelector("#add-note-btn");
    this.buttonAddNote.addEventListener("click", () => {
      console.log(noteInput.value);
      this.model.addNote(noteInput);
      this.displayNotes();
    });
  }

  displayNotes() {
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
