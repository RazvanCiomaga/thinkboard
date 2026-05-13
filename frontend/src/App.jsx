import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import Create from "./pages/Create.jsx";

const App = () => {
  return (
    <div data-theme="lemonade">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/create" element={<Create />} />
            <Route path="/note/:id" element={<NoteDetail />} />
        </Routes>
    </div>
  )
}

export default App;