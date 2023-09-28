import { child, get, getDatabase, ref, set, update } from "firebase/database";

export async function FetchUsers() {
  const dbRef = ref(getDatabase());
  const urlPath = `characters/`;
  try {
    const data = await get(child(dbRef, urlPath));
    if (data.exists()) {
      return data.val();
    }
  } catch (error) {
    console.error(error);
  }
}

export function FetchUser(name) {
  const dbRef = ref(getDatabase());
  const urlPath = `users/${name}`;
  get(child(dbRef, urlPath))
    .then((data) => {
      if (!data.exists()) {
        const db = getDatabase();
        set(ref(db, urlPath), name);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function FetchCharacters(user) {
  const dbRef = ref(getDatabase());
  const urlPath = `characters/${user}`;
  try {
    const data = await get(child(dbRef, urlPath));
    if (data.exists()) {
      return data.val();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function FetchCharacter(user, character) {
  const dbRef = ref(getDatabase());
  const urlPath = `characters/${user}/${character.personalDetails.characterName}`;
  try {
    const data = await get(child(dbRef, urlPath));
    if (data.exists()) {
      return data.val();
    }
  } catch (error) {
    console.error(error);
  }
}

export function CreateCharacter(user, character) {
  const db = getDatabase();
  const urlPath = `characters/${user}/${character.personalDetails.characterName}`;

  set(ref(db, urlPath), character);
}

export function AddItem(user, character, option, itemName, item) {
  const db = getDatabase();
  const updates = {};
  updates[`characters/${user}/${character}/${option}/${itemName}/`] = item;
  update(ref(db), updates);
}

export function CreateItems(category, items) {
  const db = getDatabase();
  const urlPath = `${category}/`;
  const updates = {};
  Object.keys(items).forEach(
    (key) => (updates[`${urlPath}/${key}`] = items[key])
  );
  update(ref(db), updates);
}

export async function FetchItems(items) {
  const dbRef = ref(getDatabase());
  const urlPath = `${items}/`;
  try {
    const data = await get(child(dbRef, urlPath));
    if (data.exists()) {
      return data.val();
    }
  } catch (error) {
    console.error(error);
  }
}
