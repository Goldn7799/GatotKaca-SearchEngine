import { Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Search from './component/page/Search';
import Searching from './component/page/Searching';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/searching/:content" element={<Searching />} />
    </Routes>
  );
}

export default App;
