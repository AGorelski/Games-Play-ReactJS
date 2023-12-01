import GameCreate from "../components/create-game/GameCreate"
import Details from "../components/details/Details"
import GameList from "../components/game-list/GameList"
import Header from "../components/header/Header"
import Home from "../components/home/Home"
import Login from "../components/login/Login"
import Register from "../components/register/Register"

import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-game" element={<GameCreate />} />
        <Route path="/details" element={<Details />} />
      </Routes>

    </div>
  )
}

export default App
