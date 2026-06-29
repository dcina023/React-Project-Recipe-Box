// App.jsx
import { Routes, Route } from 'react-router-dom';
import RecipeBox from './RecipeBox'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <RecipeBox />
    </Routes>
  );
}
export default App;

