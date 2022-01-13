class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  filterEmoji(noteText, callback) {
    const dynamicNote = { text: noteText };
    fetch("https://makers-emojify.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dynamicNote),
    })
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  createNote(newNote, callback) {
    const note = { content: newNote };

    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  resetNotes(callback) {
    fetch("http://localhost:3000/notes", { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => callback(data));
  }
}

module.exports = NotesApi;
