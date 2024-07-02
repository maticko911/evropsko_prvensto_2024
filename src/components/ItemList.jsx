import React from "react";
import { Checkbox, Button } from "carbon-components-react";
import { TrashCan } from "@carbon/icons-react";

import "./ItemList.css";

const ItemList = ({ footbalNationClub, handleCheck, handleDelete }) => {
  return (
    <div className="content">
      {footbalNationClub.map((club) => (
        <div key={club.id} className="club-item">
          <Checkbox
            id={`club-${club.id}`}
            labelText={club.club}
            checked={club.checked}
            onChange={() => handleCheck(club.id)}
          />
          <Button
            kind="ghost"
            renderIcon={TrashCan}
            label="searchBox"
            hasIconOnly
            className="delete-club-button"
            onClick={() => handleDelete(club.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
