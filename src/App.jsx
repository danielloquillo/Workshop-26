import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import useContacts from './hooks/useContacts'
import './App.css'

function App() {
  const [selectedId, setSelectedId] = useState(null)
  const {contacts} = useContacts()

  return (
    <>
      {selectedId ? <SelectedContact selectedId={selectedId}/> : 
        <ContactList contacts={contacts} setSelectedId={setSelectedId}/>}
      {selectedId && <Button marginY={10} onClick={()=>setSelectedId(null)}>All Contacts</Button>}
    </>
  )
}

export default App
