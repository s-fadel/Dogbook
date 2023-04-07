import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ setView, setDogs, dog, dogs }) => {
  const [randomDogImg, setDogImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [presentVal, setPresentVal] = useState(false);
  const [dogFriends, setDogFriends] = useState([]);
  const [selectedOption, setSelectedOption] = useState("defaultOption")

  const fetchDog = async () => {
    setIsLoading(true);
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const randomDog = await resp.json();
    setDogImg(randomDog.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDog();
  }, []);

  const saveDog = (event) => {
    event.preventDefault();
    const img = randomDogImg;
    const nickname = event.target.nickname.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    const present = presentVal;
    const friends = dogFriends;
    setDogs((prev) => [
      ...prev,
      { img, nickname, name, age, bio, present, friends, id: uuidv4() },
    ]);
    setDogImg("");
    setDogFriends([]);
    event.target.reset();
    setView("HOME");
  };

  const selectDogFriend = (event) => {
    const selectedDogId = event.target.value;

    setSelectedOption(selectedDogId);

    const dogFriendAlreadyExist = dogFriends.some(
      (dogFriend) => dogFriend.id === selectedDogId
    );
    if (!dogFriendAlreadyExist) {
      const dogFriend = dogs.find((dog) => dog.id === selectedDogId);
      dogFriend &&
        setDogFriends((prev) => [
          ...prev,
          { id: selectedDogId, nickname: dogFriend.nickname },
        ]);
    }
  };

  const handleDeleteFriends = (e, id) => {
    e.preventDefault();
    const updatedDogFriends = dogFriends.filter((friend) => friend.id !== id);
    setDogFriends(updatedDogFriends);
    setSelectedOption("defaultOption")
  };
  

  return (
    <div>
      <h1 className="title-new-member"> CREATE DOG🐶🏫</h1>
      <h4>ADD NEW DOG MEMBER👩🏻‍💻✅</h4>
      <div className="form-daycare">
        <form className="form-create-dog" onSubmit={saveDog}>
          <input placeholder="Name..." id="name" type="text"></input>
          <input
            required
            placeholder="Nickname..."
            id="nickname"
            type="text"
          ></input>
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
          <div className="friends-dog">
            <h5>Add a dog friend:</h5>
            <select
              id="friend-dog"
              onChange={(event) => selectDogFriend(event)}
              value={selectedOption}
            >
              <option value="defaultOption">Select a friend</option>
              {dogs.map((dog) => (
                <option key={dog.id} value={dog.id}>
                  {dog.nickname}
                </option>
              ))}
            </select>
            {dogFriends.length > 0 ? (
              <ul>
                {dogFriends.map((dogFriend) => (
                  <div className="dog-container-friends" key={dogFriend.id}>
                    <li key={dogFriend.id}>{dogFriend.nickname}</li>
                    <button
                      className="delete-button-friends"
                      onClick={(e) => handleDeleteFriends(e, dogFriend.id)}
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </ul>
            ) : null}
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
