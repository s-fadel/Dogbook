import "./style.css";
import { useState, useEffect } from "react";
import Start from "./Start";
import Create from "./Create";

const App = () => {
  const localStorageKey = "schoolDogs";

  const savedDogs = JSON.parse(localStorage.getItem(localStorageKey));
  console.log(savedDogs);
  const [view, setView] = useState("HOME");
  const [dogs, setDogs] = useState(savedDogs || []);
  const [dog, setDog] = useState({});
  const [edit, setEdit] = useState({});

  useEffect(() => {
    if (dog.id) {
      const newDogs = dogs.map((d) => {
        if (d.id === dog.id) {
          return dog;
        }
      });
      setDogs(newDogs);
    }
  }, [dog]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(dogs));
  }, [dogs]);

  switch (view) {
    case "HOME":
      return <Start setView={setView} dogs={dogs} setDogs={setDogs} />;
    /* case "DOG":
    return <Dog setView={setView} dog={dog} />
  case "EDIT":
    return <EditDog setView={setView} setEdit={setEdit} dog={dog} setDog={setDog} /> */
    default:
      return <Create setView={setView} setDogs={setDogs} dogs={dogs} />;
  }
};

export default App;
