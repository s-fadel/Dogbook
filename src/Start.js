const Start = ({ setView, dogs, setDogs, setSelectedDog }) => {
  const handleDelete = (id) => {
    const newDogs = [...dogs];
   
    newDogs.forEach((dog) => {
      if (dog.friends && dog.friends.length) {
        dog.friends = dog.friends.filter((friend) => friend.id !== id);
      }
    });
    const remainingDogs = newDogs.filter((dog) => dog.id !== id);  
    setDogs(remainingDogs);
  };
  
  const onDogSelect = (dog) => {
    setSelectedDog(dog);
    setView("PROFILE")
  }
  return (
    <div className="dog-school">
            <h1 className="title-new-member">FURRY FRIENDS SCHOOL🐶🏫</h1>
      <p>Pawfect Match: Här skapar lägger du till din hund och matchar den med nya vänner på dagiset.</p>
      <div className="dog-list">
        <h4>FURRY FRIENDS OF THE DAY: {dogs.length}</h4>
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
        <p>New pawfect match? Add your dog</p>
        <button onClick={() => setView("CREATE")} id="add-dog">
          Create
        </button>
      </div>
    </div>
  );
};

export default Start;