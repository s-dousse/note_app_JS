class NotesView {
  constructor(model) {
    this.model = model;
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
}

module.exports = NotesView;
