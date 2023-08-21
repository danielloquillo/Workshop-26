import { useEffect, useState } from "react"

function useContacts(id="") {
    const [contacts, setContacts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = `https://dummyjson.com/users/${id}`

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                id ? setContacts([data]) : setContacts(data.users)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchContacts();
    }, [])

  return {isLoading, contacts}
}

export default useContacts