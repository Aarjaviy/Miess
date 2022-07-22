import React from 'react'
import './Events.css'
import EventsCarousel from './EventsCarousel'

function Events() {
  return (
    <div id='events' className='events'>
      <div className='heading'>
        <h1 >Events</h1>
      </div>
      <div className="container">
        <div className="events-content">
          <EventsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Events