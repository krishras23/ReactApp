import React, { useState, useRef } from 'react';
import "./App.css";
import axios from 'axios';



function App() {
  const CreateCampRef = useRef()
  const DeleteCampRef = useRef()
  const UpdateCampAgesRef = useRef()
  const UpdateCampPriceRef = useRef()


  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [min_age, setMinAge] = useState(0)
  const [max_age, setMaxAge] = useState(0)
  const [price, setPrice] = useState(0)
  const [CampID, setCampID] = useState(0)
  const [new_price, setnew_price] = useState(0)
  const [new_MIN_AGE, setnew_MIN_AGE] = useState(0)
  const [new_MAX_AGE, setnew_MAX_AGE] = useState(0)




  const AddCamp = () => {
    axios.post("http://localhost:5000/add_camp",
      { name: name, description: description, MIN_AGE: min_age, MAX_AGE: max_age, price_per_week: price })
      .then(() => { console.log("success") })
  };


  const UpdateCampPrice = () => {
    axios.put("http://localhost:5000/update_camp_price",
      { CampID: CampID, new_price: new_price})
      .then(() => { console.log("success") })
  };

  const UpdateCampAges = () => {
    axios.put("http://localhost:5000/update_camp_ages",
      { CampID: CampID, new_MIN_AGE: new_MIN_AGE, new_MAX_AGE: new_MAX_AGE})
      .then(() => { console.log("success") })
  };



  const DeleteCamp = () => {
    axios.delete('http://localhost:5000/delete_camp', {
      headers: {mode: 'no-cors'},
      data: {CampID: CampID}})
      .then(() => { console.log("success") })
  };


  function handleCreateCamp(e) {
    const name = CreateCampRef.current.value
    console.log(name)
    CreateCampRef.current.value = null
  }



  function handleDeleteCamp(e) {
    const name = DeleteCampRef.current.value
    console.log(name)
    DeleteCampRef.current.value = null
  }


  function handleUpdateCampAges(e) {
    const name = UpdateCampAgesRef.current.value
    console.log(name)
    UpdateCampAgesRef.current.value = null
  }

  function handleUpdateCampPrice(e) {
    const name = UpdateCampPriceRef.current.value
    console.log(name)
    UpdateCampPriceRef.current.value = null
  }


  return (
    <div className="App">
      <h1> <center>Admin Dashboard</center> </h1>

      <div className="form">
        <label> Camp Name </label>
        <input ref={CreateCampRef} type="text" name="CampName"
          onChange={(event) => { setName(event.target.value) }} />
        <label> Camp Description </label>
        <input ref={CreateCampRef} type="text" name="CampDescription"
          onChange={(event) => { setDescription(event.target.value) }} />
        <label> Camp Minimum Age </label>
        <input ref={CreateCampRef} type="number" name="CampMIN_AGE"
          onChange={(event) => { setMinAge(event.target.value) }} />
        <label> Camp Maximum Age </label>
        <input ref={CreateCampRef} type="number" name="CampMAX_AGE"
          onChange={(event) => { setMaxAge(event.target.value) }} />
        <label> Camp Price Per Week </label>
        <input ref={CreateCampRef} type="number" name="CampPrice"
          onChange={(event) => { setPrice(event.target.value) }} />

        <button onClick={AddCamp}> Add Camp </button>
      </div>
      <div className="Delete">
      <h1>Delete Camp Price from ID</h1>
        <label> Camp ID </label>
        <input ref={DeleteCampRef} type="number" name="CampID"
          onChange={(event) => { setCampID(event.target.value) }} />
        <button onClick={DeleteCamp}> Delete Camp </button>

      </div>
      <div className="UpdatePrice">
        <h1>Update Camp Price from ID</h1>
        <label> Camp ID </label>
        <input ref={UpdateCampPriceRef} type="number" name="CampID"
          onChange={(event) => { setCampID(event.target.value) }} />
        <label> New Price </label>
        <input ref={UpdateCampPriceRef} type="number" name="NewPrice"
          onChange={(event) => { setnew_price(event.target.value) }} />
        <button onClick={UpdateCampPrice}> Update Camp Price </button>
        
        <div className = "UpdateAges">
        <h1>Update Camp Ages from ID</h1>
        <label> Camp ID </label>
        <input ref={UpdateCampAgesRef} type="number" name="CampID"
          onChange={(event) => { setCampID(event.target.value) }} />
        <label> New Minimum Age </label>
        <input ref={UpdateCampAges} type="number" name="NewMIN"
          onChange={(event) => { setnew_MIN_AGE(event.target.value) }} />
        <label> New Maximum Age </label>
        <input ref={UpdateCampAges} type="number" name="NewMAX"
          onChange={(event) => { setnew_MAX_AGE(event.target.value) }} />
        <button onClick={UpdateCampAges}> Update Camp Ages </button> 
        </div>
    </div>
    </div>
      


  );
}

export default App;
