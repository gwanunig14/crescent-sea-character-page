export function digIn(obj, targetKey, currentPath = []) {
  for (const key in obj) {
    if (key === targetKey) {
      return { path: [...currentPath, key], object: obj[key] };
    }

    if (typeof obj[key] === "object") {
      const result = digIn(obj[key], targetKey, [...currentPath, key]);
      if (result.path) {
        return result; // Key found in nested object, return both path and object
      }
    }
  }

  return { path: null, object: null }; // Key not found
}

export function makeMutableCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    // If the object is a primitive or null, return it as is
    return obj;
  }

  if (Array.isArray(obj)) {
    // If it's an array, create a new array and deep copy its elements
    const newArray = [];
    for (let i = 0; i < obj.length; i++) {
      newArray[i] = makeMutableCopy(obj[i]);
    }
    return newArray;
  }

  // If it's an object, create a new object and deep copy its properties
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = makeMutableCopy(obj[key]);
    }
  }
  return newObj;
}

export function updateObjectAtPath(obj, path, newValue) {
  if (!Array.isArray(path) || path.length === 0) {
    return obj; // Invalid path or empty path, return the original object
  }

  const updatedObj = { ...obj };
  let current = updatedObj;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (typeof current[key] !== "object") {
      // If any intermediate key on the path is not an object, create an empty object
      current[key] = {};
    }
    current = current[key]; // Move to the next level of the object
  }

  const lastKey = path[path.length - 1];
  current[lastKey] = newValue; // Set the new value at the final key on the path

  return updatedObj;
}

export function generalCheck(stat) {
  return stat.general || stat;
}

export function emptyArray(array) {
  return Object.keys(array).length === 0;
}

export function setRelativeStat(character, stat, number) {
  const pathAndObject = digIn(character, stat);
  return updateObjectAtPath(character, pathAndObject.path, number);
}

export const GetDamageModifier = (characteristics) => {
  const strengthAndSizeCombo = characteristics.strength + characteristics.size;

  const damageModifiers = [
    { condition: strengthAndSizeCombo > 152, value: "9d6" },
    { condition: strengthAndSizeCombo > 136, value: "8d6" },
    { condition: strengthAndSizeCombo > 120, value: "7d6" },
    { condition: strengthAndSizeCombo > 104, value: "6d6" },
    { condition: strengthAndSizeCombo > 88, value: "5d6" },
    { condition: strengthAndSizeCombo > 72, value: "4d6" },
    { condition: strengthAndSizeCombo > 56, value: "3d6" },
    { condition: strengthAndSizeCombo > 40, value: "2d6" },
    { condition: strengthAndSizeCombo > 32, value: "1d6" },
    { condition: strengthAndSizeCombo > 25, value: "1d4" },
    { condition: strengthAndSizeCombo > 16, value: "None" },
    { condition: strengthAndSizeCombo > 12, value: "-1d4" },
  ];

  const result = damageModifiers.find((modifier) => modifier.condition);

  return result ? result.value : "-1D6";
};
