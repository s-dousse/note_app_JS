const nodeType = require("jsdom/lib/jsdom/living/node-type");

class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  createNote(note) {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { content: JSON.stringify(note) },
    });
    // .then((response) => response.json())
    // .then((data) => callback(data));
  }
}

module.exports = NotesApi;
