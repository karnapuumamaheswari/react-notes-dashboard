import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

function NotesCount() {
  const { totalNotes } = useContext(NotesContext)

  return <p>Total Notes: {totalNotes}</p>
}

export default NotesCount
