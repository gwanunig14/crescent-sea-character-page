import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddItem, FetchItems, FetchUsers } from "../FirebaseCommunications";
import DropdownSelector, {
  AddItemDropdownSelector,
} from "../Views/DropdownSelector";

function EditCharacterPage() {
  // TODO if characteristic increase would increase a relient stat, update that stat as well

  const [fetched, setFetched] = useState(false);
  const [users, setUsers] = useState("");
  const [user, setUser] = useState("");
  const [characters, setCharacters] = useState("");
  const [character, setCharacter] = useState("");
  const [option, setOption] = useState("");
  const [weapons, setWeapons] = useState({});
  const [armor, setArmor] = useState({});
  const [shields, setShields] = useState({});
  const [magic, setMagic] = useState({});
  const [items, setItems] = useState({});
  const [newItemName, setNewItemName] = useState("");
  const [newItem, setNewItem] = useState({});

  async function fetchData() {
    try {
      const fetchedUsers = await FetchUsers();
      const fetchedWeapons = await FetchItems("weapons");
      const fetchedArmor = await FetchItems("armor");
      const fetchedShields = await FetchItems("shields");
      const fetchedMagic = await FetchItems("magic");

      // The characters data is available here
      if (fetchedUsers) {
        setUsers(fetchedUsers);
      }
      if (fetchedWeapons) {
        setWeapons(fetchedWeapons);
      }
      if (fetchedArmor) {
        setArmor(fetchedArmor);
      }
      if (fetchedShields) {
        setShields(fetchedShields);
      }
      if (fetchedMagic) {
        setMagic(fetchedMagic);
      }
      setFetched(true);
    } catch (error) {
      // Handle any errors that may occur during the fetch.
      console.error(error);
    }
  }

  if (!fetched) {
    fetchData();
  }

  const userPicked = (selectedUser) => {
    setUser(selectedUser);
    setCharacters(users[selectedUser]);
  };

  const options = ["armor", "shield", "weapon", "magic"];

  const selectOption = (option) => {
    switch (option) {
      case "armor":
        setItems(armor);
        break;
      case "shield":
        setItems(shields);
        break;
      case "weapon":
        setItems(weapons);
        break;
      case "Mmagic":
        setItems(magic);
        break;
      default:
        break;
    }
    setOption(option);
  };

  const addItem = () => {
    debugger;
    AddItem(user, character, option, newItemName, newItem);
  };

  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <DropdownSelector
          name={"User"}
          dataKey={""}
          optionList={Object.keys(users)}
          setField={(key, user) => userPicked(user)}
          value={user === "" ? "User" : user}
        />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <DropdownSelector
          name={"Character"}
          dataKey={""}
          optionList={characters}
          setField={(key, character) => setCharacter(character)}
          value={character === "" ? "Character" : character}
        />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <DropdownSelector
          name={"Option"}
          dataKey={""}
          optionList={options}
          setField={(key, option) => selectOption(option)}
          value={option === "" ? "Option" : option}
        />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <AddItemDropdownSelector
          name={"Item"}
          dataKey={""}
          optionList={items}
          setField={(key, option) => {
            setNewItemName(key);
            setNewItem(option);
          }}
          value={newItem === "" ? "Item" : newItem.type}
        />
      </div>
      <Button onClick={addItem}> Add</Button>
    </div>
  );
}

export default EditCharacterPage;
