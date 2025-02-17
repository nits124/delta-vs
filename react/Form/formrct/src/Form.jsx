import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    passWord:"",
  })
  // let [userName, setUserName] = useState("");

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // }

  // let handleUserName = (event) => {
  //   setUserName(event.target.value);
  // }
  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;//optional
      // return { ...currData , [fieldName]: newValue};
      return { ...currData , [event.target.name]: event.target.value};
    })
    //Object keys can be strings (or Symbols), but if you need to use a value (such as event.target.name) to decide which key to set, you need to put it inside square brackets.
// Without the square brackets, the key would literally be the string "event.target.name", not the value of event.target.name.
  }
  let handleSubmit = (event ) =>{
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      passWord: "",
    })
  }

  return (
    <form  onSubmit={handleSubmit}>
      <label htmlFor="fullName"> Full Name</label>
      <input type="text"
        placeholder="enter full name"
        value={formData.fullName}
        onChange={handleInputChange} 
        id="fullName"
        name="fullName" />

      <br />
      <label htmlFor="userName"> user Name</label>
      <input type="text" placeholder="enter user name" value={formData.userName}
        onChange={handleInputChange} 
        id="userName"
        name="userName"/>

<br />
      <label htmlFor="passWord"> passWord</label>
      <input type="password" placeholder="enter passWord" value={formData.passWord}
        onChange={handleInputChange} 
        id="passWord"
        name="passWord"/>

      <br />
      <button>Submit</button>
    </form>
  );
}