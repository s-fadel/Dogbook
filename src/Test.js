import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import React from "react"
import { useState, useEffect } from "react";
// import myImage from '../images/hund.jfif

// \/\/images.dog.ceo\/breeds\/terrier-norwich\/n02094258_279.jpg

const Dogs = ({ setView, dogs, setDog }) => {
  const viewDog = (dog) => {
    setDog(dog)
    setView("DOG")
  }
  return (
    <div>
      <h1>Aylins DogCenter</h1>
      <h3>Users</h3>
      <ul>
        {/* <li>
        <p>Name: <a href="#" onClick= {() => viewDog(dogs)}>Aylin</a></p>
        <p>age:15</p>
        </li> */}

        {dogs.map(dog =>
          <li>
            <img src={dog.img} />
            <p>Name: <a href="#" onClick={() => viewDog(dog)}>{dog.name}</a></p>
            <p>Age: {dog.age} </p>
            <p>Bio: {dog.bio}</p>
          </li>
        )}
      </ul>
      <button onClick={() => setView("CREATE")}>Create New Dog</button>
    </div>
  )
}
const CreateDog = ({ setView, setDogs, dogs}) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    const bio = event.target.bio.value;
    
    setDogs(prev => [...prev, { img, name, age,bio, id: `${name}${dogs.length + 1}`}]) // ny hund läggs till
    setView("DOGS") // byt vy till DOGS
  }
  const [dogImage, setDogImage] = useState('')

  return (
    <div>
      <h1>Aylins DogCenter</h1>
      <h3 class="h3">Create your dog here:</h3>
      <form  onSubmit={submitHandler}>
      <img src={dogImage} />
        <strong>Image:</strong>
        <input  placeholder="image" id="img" type="text" onChange={e => setDogImage(e.target.value)}></input>
        <strong>Name:</strong>
        <input placeholder="name" id="name" type="text"></input>
        <strong>Age:</strong>
        <input placeholder="age" id="age" type="number"></input>
        <strong>Bio:</strong>
        <input placeholder="Bio" id="bio" type="text"></input>
        <strong>Friends:</strong>

        {/* <button>Add dogs friend</button> */}

        <button>Save</button>
      </form>
    </div>
  )
}


const Dog = ({ setView, dog }) => {
  // const submitHandl = (event) => {
  //   event.preventDefault();
  //   // const img = event.target.img.value;
  //   const name = event.target.name.value;
  //   const age = event.target.age.value;
  //   const bio = event.target.bio.value;

  //   dog(prev => [...prev, { name, age, bio }]) // ny hund läggs till
  //   setView("DOGS") // byt vy till DOGS
  // }


  const [edit, setEdit] = useState(false)
  const [Text, setText] = useState("")
  const [age, setAge] = useState("")
  const [bio, setBio] = useState("")
  return (
    <div >
      <h1>View A Dog</h1>
      <img src={dog.img}  />

      <p>name:{dog.name} </p>
      <p>age: {dog.age} </p>
      <p>bio:{dog.bio} </p>

      <button onClick={() => setView("DOGS")}>Home</button>

      <button onClick={() => setView("EDIT")}>edit</button>
    </div>
  )
}

const EditDog = ({ setView, dog, setDog}) =>{

  const [name, setName] = useState(dog.name)
  const [age, setAge] = useState(dog.age)
  const [bio, setBio] = useState(dog.bio)


  const save = () => {

    setDog({...dog, name, age, bio})
    setView("DOG")
  }


  return (
    <div >
      <h1>View A Dog</h1>
      <img src={dog.img} />

      <p>name:<input value={name} id="name" placeholder="name" onChange={e => setName(e.target.value)}></input> </p>
      <p>age: <input value={age} id="age" placeholder="Age" onChange={e => setAge(e.target.value)}></input> </p>
      <p>bio:<input value={bio} id="bio" placeholder="bio" onChange={e => setBio(e.target.value)}></input></p>
      <button onClick={() => setView("DOGS")}>Home</button>

      <button onClick={() => save()}>Save</button>
    </div>
  )
}

// { dog.name }
// { dog.age }
const App = () => {
  const savedDogs = JSON.parse(localStorage.getItem('dogs'))
  console.log(savedDogs)
  const [view, setView] = useState("DOGS")
  const [dogs, setDogs] = useState(savedDogs || []);
  const [dog, setDog] = useState({});
  const [edit, setEdit] = useState({});


  useEffect (() => {
    if(dog.id) {
      const newDogs = dogs.map(d => 
        {
          if(d.id === dog.id){
            return dog
          }
        } )
      setDogs(newDogs)
    }

  }, [dog])


  useEffect (() => {
    localStorage.setItem('dogs', JSON.stringify(dogs))
  }, [dogs])
  
  switch (view) {
    case "DOGS":
      return <Dogs setView={setView} dogs={dogs} setDog={setDog} />
    case "DOG":
      return <Dog setView={setView} dog={dog} />
    case "EDIT":
      return <EditDog setView={setView} setEdit={setEdit} dog={dog} setDog={setDog} />
    default:
      return <CreateDog setView={setView} setDogs={setDogs} dogs={dogs}/>
  }
}

export default App;