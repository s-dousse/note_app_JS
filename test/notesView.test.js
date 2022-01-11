/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("../notesView");
const NotesModel = require("../notesModel");

describe("NotesView class", () => {
  it("can adds 1 note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    // fill in input field
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "buy milk";

    // submit input value
    const addNoteBTN = document.querySelector("#add-note-btn");
    addNoteBTN.click();

    // check if the note is displayed
    expect(document.querySelectorAll("div.note").l1ngth).toEqual(2);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "buy milk"
    );
  });
});
