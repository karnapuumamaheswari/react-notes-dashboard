import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

function NotesList() {
  const { notes, selectedNoteId, setSelectedNoteId } = useContext(NotesContext)

  if (notes.length === 0) {
    return <p>No notes yet.</p>
  }

  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => setSelectedNoteId(note.id)}
          style={{
            cursor: 'pointer',
            backgroundColor: selectedNoteId === note.id ? '#dbeafe' : 'transparent',
            padding: '6px',
            marginBottom: '4px',
          }}
        >
          {note.text}
        </li>
      ))}
    </ul>
  )
}

export default NotesList
