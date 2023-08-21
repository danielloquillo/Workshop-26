import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

function ContactRow({contact, setSelectedId}) {
  return (
    <Tr cursor='pointer' onClick={() => setSelectedId(contact.id)}>
        <Td>{`${contact.firstName} ${contact.lastName}`}</Td>
        <Td>{contact.email}</Td>
        <Td>{contact.phone}</Td>
    </Tr>
)
}

export default ContactRow