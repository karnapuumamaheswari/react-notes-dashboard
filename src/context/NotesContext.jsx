import { createContext, useEffect, useMemo, useState } from 'react'

export const NotesContext = createContext(null)

const STORAGE_KEY = 'notes-dashboard-items'

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [selectedNoteId, setSelectedNoteId] = useState(null)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY)

    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes)
      setNotes(parsedNotes)

      if (parsedNotes.length > 0) {
        setSelectedNoteId(parsedNotes[0].id)
      }
    }

    setHasLoaded(true)
  }, [])

  useEffect(() => {
    if (!hasLoaded) {
      return
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes, hasLoaded])

  const addNote = (text) => {
    const trimmed = text.trim()

    if (!trimmed) {
      return
    }

    const newNote = {
      id: Date.now(),
      text: trimmed,
    }

    setNotes((prevNotes) => [...prevNotes, newNote])
    setSelectedNoteId(newNote.id)
  }

  const totalNotes = useMemo(() => notes.length, [notes])

  return (
    <NotesContext.Provider
      value={{ notes, selectedNoteId, setSelectedNoteId, addNote, totalNotes }}
    >
      {children}
    </NotesContext.Provider>
  )
}
