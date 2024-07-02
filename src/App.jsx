import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddFootballClub from "./components/AddFootballClub";
import SearchClub from "./components/SearchClub";

import "./App.css";

function App() {
  const [footbalNationClub, setFootbalNationClub] = useState(
    /* [
    {
      id: 1,
      checked: true,
      club: "Špania",
    },
    {
      id: 2,
      checked: false,
      club: "Slovenija",
    },
    {
      id: 3,
      checked: false,
      club: "Nemčija",
    },
    {
      id: 4,
      checked: false,
      club: "Portugalska",
    },
  ] */ JSON.parse(localStorage.getItem("osminafinala")) || []
  );
  const [newClub, setNewClub] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("osminafinala", JSON.stringify(footbalNationClub));
  }, [footbalNationClub]);

  const addClub = (club) => {
    const id = footbalNationClub.length
      ? footbalNationClub[footbalNationClub.length - 1].id + 1
      : 1;
    const newClub = { id, checked: false, club };
    const listClub = [...footbalNationClub, newClub];
    setFootbalNationClub(listClub);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newClub) return;
    addClub(newClub);
    setNewClub("");
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="form-wrapper">
          <AddFootballClub
            newClub={newClub}
            setNewClub={setNewClub}
            handleSubmit={handleSubmit}
          />
          <SearchClub search={search} setSearch={setSearch} />
        </div>
        <Content
          footbalNationClub={footbalNationClub.filter((klub) =>
            klub.club.toLowerCase().includes(search.toLowerCase())
          )}
          setFootbalNationClub={setFootbalNationClub}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
