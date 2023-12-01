import { useState } from 'react'

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Search = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.assign(`/anime/directorio/buscar/${search}`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-row mr-3'>
      <input
        type="search"
        placeholder="  Buscar"
        onChange={handleChange}
        className='rounded-md placeholder-slate-950 text-slate-950 text-center'
      />
      <button onClick={handleSubmit} >
        <MagnifyingGlassIcon className="w-7" />
      </button>
    </form>
  )
}

export default Search

