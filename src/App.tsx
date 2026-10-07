import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import CursorCircle from './components/CursorCircle'
export default function App() {
  return (
    <BrowserRouter>
      <CursorCircle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recentworks/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
