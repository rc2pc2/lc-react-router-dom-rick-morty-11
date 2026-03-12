import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CharactersListPage from "./pages/characters/CharactersListPage";
import CharacterDetailPage from "./pages/characters/CharacterDetailPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/characters" element={< CharactersListPage />} />
          <Route path="/characters/:id" element={< CharacterDetailPage />} />
          <Route path="*" element={< NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
