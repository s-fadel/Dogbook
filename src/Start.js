const Start = ({ setView, dogs, setDogs }) => {
  const handleDelete = (id) => {
    const newDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
  }

  return (
    <div className="dog-school">
      <h1>DOG SCHOOL🐶🏫</h1>
      <p>Welcome to the dog mafia! Search for a dog to check in for the day.</p>
      <div className="dog-list">
        <h4>DOGS OF THE DAY: {dogs.length}</h4>
        {dogs.map((dog) => (
          <div className="dog-container" key={dog.id}>
            <span className="dog-nickname">{dog.nickname}</span>
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
