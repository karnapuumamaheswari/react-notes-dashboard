import './App.css'
import NoteInput from './components/NoteInput'
import NotesList from './components/NotesList'
import NotesCount from './components/NotesCount'
import { NotesProvider } from './context/NotesContext'

function App() {
  return (
    <NotesProvider>
      <div className="app-container">
        <h1>Notes Dashboard</h1>
        <NoteInput />
        <NotesCount />
        <NotesList />
      </div>
    </NotesProvider>
  )
}

export default App
