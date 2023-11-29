import React from 'react'
import './App.css'
import Homepage from './Homepage'
import Profile from './navigation/Profile/Profile';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './navigation/Explore/Explore';
import Reels from './navigation/Reels/Reels';
import Message from './navigation/Message/Message';
import Authentication from './authentication/Authentication'

const App = () => {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/auth" element={<Authentication />} />

        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  )
}

export default App;
