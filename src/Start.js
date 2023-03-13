const Start = ({ setView, dogs, setDogs }) => {
  const handleDelete = (id) => {
    const newDogs = dogs.filter((Dog) => Dog.id !== id);
    setDogs(newDogs);
  };

  /*   const DayCare = () => {
    const [dogsInDaycare, setDogsInDaycare] = useState([]);

  } */
  return (
    <div className="dog-school">
      <h1>DOG SCHOOL🐶🏫</h1>
      <p>Welcome to the dog mafia! Search for a dog to check in for the day.</p>
      <div className="dog-list">
      
        <h4>DOGS OF THE DAY: {dogs.length}</h4>
       
        {dogs.length ? dogs.map((dogHome) => (
          <>
          <div className="dog-container">
           <span className="dog-nickname">{dogHome.nickname} </span>{/* Designa här */}
            <button className="delete-button" onClick={() => handleDelete(dogHome.id)}>X</button>
            </div>
          </>
        )):null}
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
