import React, { useState } from 'react'
import RoomSearch from '../common/RoomSearch'
import RoomResult from '../common/RoomResult';

const HomePage = () => {
    const [roomSearchResults, setRoomSearchResults] = useState([]);
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    }

  return (
    <div>
        <section>
            <header className="header-banner">
                <img src="./assets/images/hotel.webp" alt="Phegon Hotel" className="header-image" />
                <div className="overlay"></div>
                <div className="animated-texts overlay-content">
                    <h1>
                        Welcome to <span className="phegon-color">Phegon Hotel</span>
                    </h1><br />
                    <h3>Step into a haven of comfort and care</h3>
                </div>
            </header>
        </section>

        <RoomSearch handleSearchResult={handleSearchResult}/>
        <RoomResult roomSearchResults={roomSearchResults} />

        <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

        <h2 className="home-services">Services at <span className="phegon-color">Phegon Hotel</span></h2>
    </div>
  )
}

export default HomePage