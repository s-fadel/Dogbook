import "./style.css";
import { useState, useEffect } from "react";
import Start from "./Start";
import Create from "./Create";
import Edit from "./Edit";
import Profile from "./Profile";

const App = () => {
  const localStorageKey = "schoolDogs";

  const savedDogs = JSON.parse(localStorage.getItem(localStorageKey));
  const [view, setView] = useState("HOME");
  const [dogs, setDogs] = useState(savedDogs || []);
  const [selectedDog, setSelectedDog] = useState({});



 /*  useEffect(() => {
    if (dog.id) {
      const newDogs = dogs.map((d) => {
        if (d.id === dog.id) {
          return dog;
        }
      });
      setDogs(newDogs);
    }
  }, [dog]); */

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(dogs));
  }, [dogs]);

  switch (view) {
    case "HOME":
      return <Start setView={setView} dogs={dogs} setDogs={setDogs} setSelectedDog={setSelectedDog} />;
    case "PROFILE":
      return <Profile setView={setView} selectedDog={selectedDog} />;
    case "EDIT":
      return (
        <Edit setView={setView} selectedDog={selectedDog} dogs={dogs} setDogs={setDogs}/>
      );
    default:
      return <Create setView={setView} setDogs={setDogs} dogs={dogs} />;
  }
};

export default App;
