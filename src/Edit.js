import { useState, useEffect } from "react";

const Edit = ({ setView, selectedDog, setDogs, dogs }) => {
  const { name, nickname, age, bio, img, present, id } = selectedDog;
  const [presentVal, setPresentVal] = useState(present);
  const editDog = (event) => {
    event.preventDefault();
    const nickname = event.target.nickname.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    const present = presentVal;
    const updatedDog = {name, nickname, age, bio, present}
    const updatedDogs = dogs.map(dog => dog.id === id ? { ...dog, ...updatedDog}: dog);
    setDogs(updatedDogs);
    event.target.reset(); // reset the form fields to their initial values
    setView("HOME");
  };

  return (
    <div>
      <h1 className="title-new-member">EDIT DOG PROFILE 📝</h1>
      <h4>UPDATE THE DOG MEMBER 🐩</h4>
      <div className="form-daycare">
        <form className="form-create-dog" onSubmit={editDog}>
          <input placeholder="Name..." id="name" type="text" defaultValue={name}></input>
          <input
            required
            placeholder="Nickname..."
            id="nickname"
            type="text"
            defaultValue={nickname}
          ></input>
          <input placeholder="Age..." id="age" type="number" defaultValue={age}></input>
          <input placeholder="Bio..." id="bio" type="text" defaultValue={bio}></input>
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
          <button id="back" type="button" onClick={() => setView("HOME")}>
            Back
          </button>
        </form>
        <div className="img-create-dog">
          <img src={img} alt="Dog profile pic" width="220px" height="220px" />
        </div>
      </div>
    </div>
  );
};

export default Edit;
