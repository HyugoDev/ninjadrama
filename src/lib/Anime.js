
//lastEpisodes
export async function getLastEpisodes() {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}LastEpisodes`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

//allDirectory
export async function getDirectory() {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}allDirectory`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

//moreInfo/:title

export async function getInfoAnime(title) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}moreInfo/${title}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


//getEpisodes/:title

export async function getEpisodes(title) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}getEpisodes/${title}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


//getAnimeServers/:id


export async function getAnimeServers(id) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}getAnimeServers/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}


//search/:title

export async function getsearch(search) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}search/${search}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}



//videos/:channelId

export async function getvideos(channelId) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}videos/${channelId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}


//destAnimePlatforms
export async function getAnimePlatforms() {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}destAnimePlatforms`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}
