import React from 'react';
// import Navbar from '../components/Navbar';
import EventCalendar from '../components/EventCalendar';
import EventFilters from '../components/EventFilters';
import EventList from '../components/EventList';
import MainEventBanner from '../components/MainEventBanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <EventCalendar />
          <MainEventBanner />
          <EventFilters />
          <EventList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
