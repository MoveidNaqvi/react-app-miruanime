import { doc, onSnapshot } from 'firebase/firestore'
import {useState, useEffect} from 'react'
import { db } from '../firebase/config'

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const docRef = doc(db, collection, id)
    setLoading(true)
    const unsub = onSnapshot(docRef, (snapshot) => {
      if(snapshot.data()){
        setDocument({...snapshot.data(), id: snapshot.id})
        setError(null)
        setLoading(false)
      }
      else{
        setError('No document with that id')
        setLoading(false)
      }
    }, (err) => {
      setError('Failed to get document')
      setLoading(false)
    })
    return unsub
  },[collection, id])

  return {document, error, loading}
}