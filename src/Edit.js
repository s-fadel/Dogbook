import { useState, useEffect } from "react";

const Edit = ({ setView, selectedDog, setDogs, dogs }) => {
  const { name, nickname, age, bio, img, present, friends, id } = selectedDog;
  const [presentVal, setPresentVal] = useState(present);
  const [dogFriends, setDogFriends] = useState(friends);

  const editDog = (event) => {
    event.preventDefault();
    const nickname = event.target.nickname.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    const present = presentVal;
    const friends = dogFriends;
    const updatedDog = {name, nickname, age, bio, present, friends}
    
    const updatedDogs = dogs.map(dog => dog.id === id ? { ...dog, ...updatedDog}: dog);
    setDogs(updatedDogs);
    event.target.reset(); // reset the form fields to their initial values
    setView("HOME");
  };

  const selectDogFriend = (event) => {
    const selectedDogId = event.target.value;

    const dogFriendAlreadyExist = dogFriends.some((dogFriend) => dogFriend.id === selectedDogId);
    if (!dogFriendAlreadyExist) {
      const dogFriend = dogs.find((dog) => dog.id === selectedDogId);
     dogFriend && setDogFriends((prev) => [...prev, { id: selectedDogId, nickname: dogFriend.nickname } ])

    }
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
          <div className="friends-dog">
            <h5>Edit a dog friend:</h5>
            <select id="friend-dog" onChange={(event) => selectDogFriend(event)}>
            <option>Select a friend</option>
              {dogs.filter((dog) => dog.id !== id).map((dog) => (
                <option key={dog.id} value={dog.id}>
                {dog.nickname}
                </option>
              ))}
            </select>
            {dogFriends.length > 0 ? (
              <ul>
                {dogFriends.map((dogFriend) => (
                  <li key={dogFriend.id}>{dogFriend.nickname}</li>
                ))}
              </ul>
            ) : null}
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
