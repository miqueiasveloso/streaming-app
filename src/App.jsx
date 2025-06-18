import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row category="popular" title="Popular" />
      <Row category="top_rated" title="Top Rated" />
      <Row category="upcoming" title="Upcoming" />
    </div>
  );
}

export default App;


