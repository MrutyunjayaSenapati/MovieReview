import React from 'react'
import Hero from '../hero/Hero'

export default function Home({movies}) {
  return (
    <div>
        <Hero movies={movies}/>
    </div>
  )
}
