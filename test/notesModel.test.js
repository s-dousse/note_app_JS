const NotesModel = require("../notesModel");

describe("Notes App Class", () => {
  const model = new NotesModel();
  it("can be instantiated", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("can add an item to the notes array", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes().length).toBe(2);
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("empties the notes array", () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
 