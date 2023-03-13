const Start = ({ setView, dogs, setDogs }) => {

/*   const DayCare = () => {
    const [dogsInDaycare, setDogsInDaycare] = useState([]);

  } */
    return (
        <div className="dog-school">
         
          <h1>DOG SCHOOL🐶🏫</h1>
          <p>Welcome to the dog mafia! Search for a dog to check in for the day.</p>
          <div className="dog-list">
          <h4>DOGS OF THE DAY: {dogs.length}</h4>
          <ul>
            <li>Taco</li>
            <li>Pablo</li>
            <li>Juan</li>
            <li>Padrones</li>
          </ul>
          </div>
          <div className="create-new-member">
            <p>New member to the dog mafia?</p>
            <button onClick={() => setView("CREATE")} id="add-dog">Create</button>
    
          </div>
        </div>
    )
}

export default Start;