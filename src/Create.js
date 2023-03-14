import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ setView, setDogs, dog }) => {
  const [randomDogImg, setDogImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [presentVal, setPresentVal] = useState(false);

  const fetchDog = async () => {
    setIsLoading(true);
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const randomDog = await resp.json();
    setDogImg(randomDog.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDog();
  }, []); // Anropa fetchDog när sidan laddas in när [] är tom.


  const saveDog = (event) => {
    event.preventDefault();
    const img = randomDogImg;
    const nickname = event.target.nickname.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    const present = presentVal;
    setDogs((prev) => [
      ...prev,
      { img, nickname, name, age, bio, present, id: uuidv4() },
    ]);
    setDogImg(""); // clear the current dog image
    event.target.reset(); // reset the form fields to their initial values
    setView("HOME");
  };

  return (
    <div>
      <h1 className="title-new-member">DOG SCHOOL🐶🏫</h1>
      <h4>ADD NEW DOG MEMBER👩🏻‍💻✅</h4>
      <div className="form-daycare">
        <form className="form-create-dog" onSubmit={saveDog}>
          <input placeholder="Name..." id="name" type="text"></input>
          <input required placeholder="Nickname..." id="nickname" type="text"></input>
          <input placeholder="Age..." id="age" type="number"></input>
          <input placeholder="Bio..." id="bio" type="text"></input>
          <div className="availible-dogs">
            <p>PRESENT</p>
            <input
              type="checkbox"
              id="present"
              checked={presentVal}
              onChange={() => setPresentVal((prevCheck) => !prevCheck)}
            />
          </div>
          <button id="save" type="submit">
            Save
          </button>
          <button id="back" onClick={() => setView("HOME")}>
            Back
          </button>
        </form>
        <div className="img-create-dog">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img src={randomDogImg} alt="" width="220px" height="220px" />
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
