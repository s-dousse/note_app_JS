/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("../notesView");
const NotesModel = require("../notesModel");
const NotesApi = require("../notesApi");

describe("NotesView class", () => {
  it("can adds 1 note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    // fill in input field
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "buy milk";

    // submit input value
    const addNoteBTN = document.querySelector("#add-note-btn");
    addNoteBTN.click();

    // check if the note is displayed
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "buy milk"
    );
  });

  xit("refresh the notes when the user submits a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    // add first note
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "buy milk";

    // submit input value
    const addNoteBTN = document.querySelector("#add-note-btn");
    addNoteBTN.click();

    // add second note
    inputEl.value = "go to gym";

    // submit input value
    addNoteBTN.click();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "buy milk"
    );
    expect(document.querySelectorAll("div.note")[1].innerText).toEqual(
      "go to gym"
    );
  });
});
