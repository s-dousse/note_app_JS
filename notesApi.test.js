const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  it('calls fetch and loads a list of notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This note is coming from the server']
    }));

    api.loadNotes((data) => {
      expect(data.notes[0]).toBe('This note is coming from the server');
    });
  });
});