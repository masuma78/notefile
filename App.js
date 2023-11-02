
import  { useState } from 'react';
import Note from './Note';
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const addNote = () => {
    if (newNote.trim() !== '') {
      const newId = new Date().getTime();
      const newNoteObj = {
        id: newId,
        title: newNote,
        content: '',
        completed: false,
      };
      setNotes([...notes, newNoteObj]);
      setNewNote('');
    }
  };

  const editNote = (id) => {
    // Implement edit logic
  };

  const deleteNote = (id) => {
    // Implement delete logic
  };

  const toggleComplete = (id) => {
    // Implement toggle complete logic
  };

  const filteredNotes = notes.filter((note) => {
    if (filter === 'completed') {
      return note.completed;
    } else if (filter === 'uncompleted') {
      return !note.completed;
    } else {
      return true;
    }
  });

  const searchedNotes = filteredNotes.filter((note) => {
    return note.title.includes(searchTerm);
  });

  return (
    <div className='note'>
      
      <input
        className='add-input'
        type="text"
        placeholder="Add a new note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNote}>Add</button>
      <input
      className='search-input'
        type="text"
        placeholder="Search notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className='select' value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      {searchedNotes.map((note) => (
        <Note
          key={note.id}
          {...note}
          onEdit={editNote}
          onDelete={deleteNote}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default App;
