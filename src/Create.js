import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ setView, setDogs, dogs }) => {
  const [randomDog, setDogImg] = useState("");
  const [trigger, setTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDog = async () => {
    setIsLoading(true);
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const randomDog = await resp.json();
    setDogImg(randomDog.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDog();
  }, [trigger]);

  const saveDog = (event) => {
    event.preventDefault();
    setView("HOME");
    const img = randomDog;
    const nickname = event.target.nickname.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    setDogs((prev) => [...prev, { img, nickname, name, age, bio, id: uuidv4() }]);
    setDogImg(""); // clear the current dog image
    event.target.reset(); // reset the form fields to their initial values
    setView("home"); // change the view to "home" (or a more descriptive name)
  };

  return (
    <div>
      <h1 className="title-new-member">DOG SCHOOL🐶🏫</h1>
      <h4>ADD NEW DOG MEMBER👩🏻‍💻✅</h4>
      <div className="form-daycare">
        <form className="form-create-dog" onSubmit={(event) => saveDog(event)}>
          <input placeholder="Name..." id="name" type="text"></input>
          <input placeholder="Nickname..." id="nickname" type="text"></input>
          <input placeholder="Age..." id="age" type="number"></input>
          <input placeholder="Bio..." id="bio" type="text"></input>
          <button id="save" type="submit">
            Save
          </button>
          <button id="back" type="submit">
            Back
          </button>
        </form>
        <div className="img-create-dog">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={randomDog} alt="" width="220px" height="220px" />
        )}
        <button onClick={fetchDog} id="change">
          Change 📸
        </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
