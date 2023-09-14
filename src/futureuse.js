// // src/components/YourComponent.js
// import React from "react";
// import { useSelector } from "react-redux";

// function YourComponent() {
//   const characters = useSelector((state) => state.characters.characters);

//   return (
//     <div>
//       {characters.map((character) => (
//         <div key={character.id}>{character.name}</div>
//       ))}
//     </div>
//   );
// }

// export default YourComponent;


// To add characters to the Redux store, you can use the useDispatch hook from react-redux to dispatch actions. Import your action creators and dispatch them when needed.