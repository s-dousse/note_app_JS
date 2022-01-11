/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("../notesView");
const NotesModel = require("../notesModel");

describe("NotesView class", () => {
  it("can display 2 paragraphes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    // dependency injection + double the notesModel class
    // let notesModelDouble = { getNotes: ["buy milk", "go to gym"] };
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("buy milk");
    model.addNote("buy milk");

    // test the behaviour
    view.displayNotes();

    // check if the paragraphes are displayed
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});
