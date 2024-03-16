import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import CharacterList from './components/CharacterList';
import MechanicList from './components/MechanicList';
import TagList from './components/TagList';
import ReviewList from './components/ReviewList';
import PlaythroughList from './components/PlaythroughList';

function App() {
  return (
    <Router>
      <Container>
        <Nav className="my-4">
          <Nav.Item>
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/characters" className="nav-link">Characters</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/mechanics" className="nav-link">Mechanics</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/tags" className="nav-link">Tags</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/reviews" className="nav-link">Reviews</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/playthroughs" className="nav-link">Playthroughs</Link>
          </Nav.Item>
        </Nav>

        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/mechanics" element={<MechanicList />} />
          <Route path="/tags" element={<TagList />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/playthroughs" element={<PlaythroughList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
