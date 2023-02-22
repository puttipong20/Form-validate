import { useState } from 'react'
import './app.css'
import Input from './components/Input'

function App() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
    address: "",
    gen: "",
  })
  const [error, setError] = useState({});
  const [disBtn, setDistBtn] = useState(true);
  const [count , setCount] = useState({});

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placehoder: "Pae ... ",
      errorMessage: "Name is required faild.",
      label: "name*",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placehoder: "....@gmail.com",
      errorMessage: "Email is required faild.",
      label: "email*",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placehoder: "Mnb1 ...",
      errorMessage: "Password is required A-Z,a-z,0-9  8 charctor faild.",
      label: "password*",
      pattern: "^[A-Za-z0-9]{8,16}$",
      required: true,
    },
    {
      id: 4,
      name: "tel",
      type: "text",
      placehoder: "0611111 ...",
      errorMessage: "Tel is required 0-9 faild.",
      label: "Tel*",
      pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placehoder: "Mae rim Chiang mai 00000 ...",
      errorMessage: "Address is fail please type you address",
      label: "Address*",
      required: true,
    },
  ]

  const Submit = (e) => {
    e.preventDefault()
    alert("Submit Seccessful.");
  }

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
    const name = e.target.name;
    const valueGen = e.target.value;
    const err = {};
    //check Data on form
    if(name == "gen"){
      setDistBtn(false);
    }

    //redirect gen value
    if (name == "gen" && valueGen == "") {
      const val = "";
      setValue({ ...value, [e.target.name]: val });
      err.gender = "Gender is required.";
    }
    else if (name == "gen" && valueGen == "1") {
      const val1 = "Male";
      setValue({ ...value, [e.target.name]: val1 });
    }
    else if (name == "gen" && valueGen == "2") {
      const val2 = "Female";
      setValue({ ...value, [e.target.name]: val2 });
    }
    else if (name == "gen" && valueGen == "3") {
      const val3 = "Other";
      setValue({ ...value, [e.target.name]: val3 });
    }

    setError({ ...err });
  }

  return (
    <div className="app">
      <form onSubmit={Submit}>
        <h1>Form validate</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          />
        ))}
        <br />
        <label>Gender *</label>
        <br />
        <select
          name="gen"
          onChange={(e) => onChange(e)}
        >
          <option value="" selected>Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </select>
        <p className='err' >{error.gender}</p>
        <button type='submit' disabled={disBtn}>Submit</button>
      </form>
      <div className="detail">
        <div>
          <p>name : {value.name}</p>
          <p>email : {value.email}</p>
          <p>password : {value.password}</p>
          <p>tel : {value.tel}</p>
          <p>address : {value.address}</p>
          <p>gen : {value.gen}</p>
        </div>
      </div>
    </div>
  )
}

export default App
