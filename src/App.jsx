import Index from './index'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
)}
export default App;