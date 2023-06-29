import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailField = document.getElementById('user-email');
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(dataUser.name.trim().length > 6 && validEmail.test(emailField.value)){
      setShow(true)
      setError(false)
      setIsDisabled(true)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" id="user-name" disabled={isDisabled} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} value={dataUser.name} />
        <input type="text" placeholder="Email" id="user-email" disabled={isDisabled} onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} value={dataUser.email}/>
        <button className='button-form'>Submit</button>
        {error && <div><p className='error'>Por favor chequea que la informacion sea correcta</p></div>}
      </form>
        {show && !error && <div><p className='error'>Gracias {dataUser.name} te contactaremos cuanto antes!</p></div>} 
    </div>
  );
};

export default Form;
