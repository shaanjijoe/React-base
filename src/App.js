import SamplePage from './pages/Samplepage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<SamplePage/>} />
      <Route path="*" element={<SamplePage />} />
      </Routes>
    </Router>
  );
}

export default App;
