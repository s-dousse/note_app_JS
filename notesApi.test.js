const NotesApi = require("./notesApi");
require("jest-fetch-mock").enableMocks();

describe("NotesApi", () => {
  it("calls fetch and loads a list of notes", async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ["This note is coming from the server"],
      })
    );

    api.loadNotes((data) => {
      expect(data.notes[0]).toBe("This note is coming from the server");
    });
  });

  it("creates a new note ", async () => {
    const api = new NotesApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ["This note is coming from the server", "Another Note"],
      })
    );

    api.loadNotes((data) => {
      expect(data.notes[1]).toBe("Another Note");
    });
  });

  it("reset notes to empty list", async () => {
    const api = new NotesApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: [],
      })
    );

    api.resetNotes((data) => {
      expect(data.notes).toEqual([]);
    });
  });

});
