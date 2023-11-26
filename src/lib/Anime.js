
//lastEpisodes

export async function getLastEpisodes() {
  try {
    const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}LastEpisodes`)

    if (!res.ok) {
      throw new Error('Error al obtener datos');
    }

    return await res.json();

  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}






//allDirectory

export async function getDirectory() {
  try {
    const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}allDirectory`)

    return await res.json();

  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}








//moreInfo/:title

export async function getInfoAnime(title) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}moreInfo/${title}`)

  return res.json()
}


//getEpisodes/:title

export async function getEpisodes(title) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}getEpisodes/${title}`)

  return res.json()
}


//getAnimeServers/:id


export async function getAnimeServers(id) {
  const res = await fetch(`${import.meta.env.PUBLIC_API_ARUPPI}getAnimeServers/ver/${id}`)



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
