import React, { useState, useEffect } from 'react'

function App() {
  const [description, setDescription] = useState(`Relaxing & Chill lofi hip hop beats for sleeping/studying.
  🎧 Sleepy/Sad Beats 🎧
  
  This is a 24/7 lofi hip hop stream from the bootleg boy channel. This music will carry on forever so sit back, relax and enjoy the stream 😊
  
  
  🎶 Listen offline
   • Spotify http://bit.do/lofispotify 
  
  
  🔧 Tweet me if the stream goes down
   • Twitter https://twitter.com/thebootlegboy
  
  
  💕 Join the bootleg squad
   • https://bootlegboy.lnk.to/join
  
  
  👕 New Bootleg Merch (Ships Worldwide)
   • http://www.thebootlegboy.com
  
  
  Powered by OhBubble
  • https://www.ohbubble.com/
  
  
  💜 Follow the bootleg boy
   • soundcloud - https://soundcloud.com/dabootlegboy
   • twitter - https://twitter.com/thebootlegboy
   • instagram - https://instagram.com/thebootlegboy
   • spotify - https://bootlegboy.lnk.to/spotify
   • discord - https://discord.gg/FZrUkey
   • *NEW MERCH* - http://www.thebootlegboy.com/
  
  
  💕Subscribe for more vibes like this 💕
  
  
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
        <label htmlFor="description">Descrição</label>
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
