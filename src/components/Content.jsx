import ItemList from "./ItemList";


const Content = ({ footbalNationClub, setFootbalNationClub }) => {
  const handleCheck = (id) => {
    const isChecked = footbalNationClub.map((club) =>
      club.id === id ? { ...club, checked: !club.checked } : club
    );
    setFootbalNationClub(isChecked);
    localStorage.setItem("osminafinala", JSON.stringify(isChecked));
  };

  const handleDelete = (id) => {
    const isEleminated = footbalNationClub.filter((club) => club.id !== id);
    setFootbalNationClub(isEleminated);
    localStorage.setItem("osminafinala", JSON.stringify(isEleminated));
  };

  return (
    <main>
      {footbalNationClub.length ? (
        <ItemList
          footbalNationClub={footbalNationClub}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Dodaj ekipo...</p>
      )}
    </main>
  );
};

export default Content;
