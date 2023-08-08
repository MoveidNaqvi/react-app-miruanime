import {useState} from 'react'
import {useNavigate, createSearchParams} from 'react-router-dom'

function Searchbar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(term === ''){
      return <div className="no-anime">
        <h1>No anime found!</h1>
      </div>
    }
    else{
      navigate({
        pathname: "search",
        search: `?${createSearchParams({
            searchreq: term
        })}`
    })
    }
    setTerm('')
  }
  
  return (
    <form onSubmit={handleSubmit} className='text-lg'>
      <input
        type="text"
        placeholder="Search an anime"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className="bg-[#222831] p-2 rounded-lg placeholder:text-white
        text-center w-full
        "
      />
    </form>
  );
}

export default Searchbar
