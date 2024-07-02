import React, { useRef } from "react";
import { TextInput, Button } from "carbon-components-react";
import { Add } from "@carbon/icons-react";

import "./AddFootballClub.css";

const AddFootballClub = ({ newClub, setNewClub, handleSubmit }) => {
  const shitfFocus = useRef();
  return (
    <form onSubmit={handleSubmit} className="add-club-form">
      <TextInput
        id="addFootballClub"
        labelText="Dodaj nogometno moštvo:"
        placeholder="dodaj klub..."
        required
        value={newClub}
        onChange={(e) => setNewClub(e.target.value)}
        ref={shitfFocus}
        autoFocus
      />
      <Button
        type="submit"
        renderIcon={Add}
        lable="Dodaj"
        hasIconOnly
        className="add-club-button"
        onClick={() => shitfFocus.current.focus()}
      />
    </form>
  );
};

export default AddFootballClub;
