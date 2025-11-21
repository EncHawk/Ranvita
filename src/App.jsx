import Hero from './components/hero'
import EventsSection from './components/cards'
import PreviousGuests from './components/guests'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <EventsSection />
      <PreviousGuests />
    </div>
  )
}

export default App
