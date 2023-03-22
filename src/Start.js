const Start = ({ setView, dogs, setDogs, setSelectedDog }) => {
  const handleDelete = (id) => {
    const newDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
  };

  const onDogSelect = (dog) => {
    setSelectedDog(dog);
    setView("PROFILE")
  }
  return (
    <div className="dog-school">
            <h1 className="title-new-member">DOG SCHOOL🐶🏫</h1>
      <p>Welcome to the dog mafia! Add a new dog member or check in a current dog.</p>
      <div className="dog-list">
        <h4>DOGS OF THE DAY: {dogs.length}</h4>
        {dogs.map((dog) => (
          <div className="dog-container" key={dog.id}>
            <span
              className={`${
                dog.present
                  ? "dog-nickname dog-nickname-present"
                  : "dog-nickname dog-nickname-checked-out"
              }`}
              onClick={() => onDogSelect(dog)}
            > 
              {dog.nickname}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(dog.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
      <div className="create-new-member">
        <p>New member to the dog mafia?</p>
        <button onClick={() => setView("CREATE")} id="add-dog">
          Create
        </button>
      </div>
    </div>
  );
};

export default Start;