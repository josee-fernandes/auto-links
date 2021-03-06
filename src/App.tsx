import React, { useState, useEffect } from 'react'

function App() {
  const [description, setDescription] = useState(`Relaxing & Chill lofi hip hop beats for sleeping/studying.
  π§ Sleepy/Sad Beats π§
  
  This is a 24/7 lofi hip hop stream from the bootleg boy channel. This music will carry on forever so sit back, relax and enjoy the stream π
  
  
  πΆ Listen offline
   β’ Spotify http://bit.do/lofispotify 
  
  
  π§ Tweet me if the stream goes down
   β’ Twitter https://twitter.com/thebootlegboy
  
  
  π Join the bootleg squad
   β’ https://bootlegboy.lnk.to/join
  
  
  π New Bootleg Merch (Ships Worldwide)
   β’ http://www.thebootlegboy.com
  
  
  Powered by OhBubble
  β’ https://www.ohbubble.com/
  
  
  π Follow the bootleg boy
   β’ soundcloud - https://soundcloud.com/dabootlegboy
   β’ twitter - https://twitter.com/thebootlegboy
   β’ instagram - https://instagram.com/thebootlegboy
   β’ spotify - https://bootlegboy.lnk.to/spotify
   β’ discord - https://discord.gg/FZrUkey
   β’ *NEW MERCH* - http://www.thebootlegboy.com/
  
  
  πSubscribe for more vibes like this π
  
  
  #lofi #sleep #beats #chill
  `)
  const [descriptionWithLinks, setDescriptionWithLinks] = useState('')

  const handleDescriptionLinks = (description: string) => {
    const descriptionCopy = description.slice()

    const words = description.split(/\s/)

    const links = words.filter(word => {
      const letters = word.split('')

      if(
        letters.length > 3 &&
        word.toLowerCase().indexOf('http') === 0 &&
        word.indexOf('href') === -1
      ){
        return word
      }
    })

    let withLinks = descriptionCopy

    links.forEach(link => {
      if(withLinks.charAt(withLinks.indexOf(link) - 1) != '"')
      withLinks = withLinks.replaceAll(link, `<a href="${link}" target="_blank">${link}</a>`)
    })

    setDescriptionWithLinks(withLinks)
  }

  useEffect(() => {
    description && handleDescriptionLinks(description)
  }, [description])

  return (
    <>
      <div>
        <label htmlFor="description">DescriΓ§Γ£o</label>
        <textarea
          id="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <pre dangerouslySetInnerHTML={{ __html: descriptionWithLinks }} />
    </>
  )
}

export default App
