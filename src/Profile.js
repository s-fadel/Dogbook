const Profile = ({ setView, selectedDog }) => {

    return (
    <div>
      <h1 className="title-dog-profile">DOG PROFILE 🐕</h1>
      <h4>Welcome to my profile!</h4>
      <img src={selectedDog.img} alt="" width="220px" height="220px" />
      <div className="title-profile-form">
      <p><strong>Name:</strong> {selectedDog.name}</p>
      <p><strong>Nickname:</strong> {selectedDog.nickname}</p>
      <p><strong>Age:</strong> {selectedDog.age}</p>
      <p><strong>Bio:</strong> {selectedDog.bio}</p>
      <strong>Friends:{selectedDog.friends.length > 0 ? (
              <ul>
                {selectedDog.friends.map((friendDog) => (
                  <li key={friendDog.id}>{friendDog.nickname}</li>
                ))}
              </ul>
            ) : null}</strong>
      </div>
      <button id="edit" onClick={() => setView("EDIT")}>
            Edit
          </button>
          <button id="back" onClick={() => setView("HOME")}>
            Back
          </button>
    </div>
  );
};

export default Profile;
