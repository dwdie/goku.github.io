document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
});

function loadNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    // Retrieve notes from local storage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Display each note
    notes.forEach(function (note) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerText = note;
        notesContainer.appendChild(noteElement);
    });
}

function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        // Retrieve existing notes or initialize an empty array
        const notes = JSON.parse(localStorage.getItem('notes')) || [];

        // Add the new note
        notes.push(noteText);

        // Save the updated notes to local storage
        localStorage.setItem('notes', JSON.stringify(notes));

        // Clear the input field
        noteInput.value = '';

        // Reload the notes
        loadNotes();
    }
}
