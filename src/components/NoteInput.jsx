import { useContext, useEffect, useRef, useState } from 'react'
import { NotesContext } from '../context/NotesContext'

function NoteInput() {
  const [noteInput, setNoteInput] = useState('')
  const { addNote } = useContext(NotesContext)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleAddNote = () => {
    addNote(noteInput)
    setNoteInput('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddNote()
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={noteInput}
        placeholder="Type a note"
        onChange={(event) => setNoteInput(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  )
}

export default NoteInput
