import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const {register,handleSubmit,watch,formState: { errors },}
    = useForm();

function onSubmit(data){
  console.log("Subimitting the form",data);
}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name : </label>
        <input  className = {errors.firstName ? "input-error" : ""} 
        {...register('firstName',{
          required:true,   /* A particular condition of range that the first name should follow */
          minLength: { value: 3, message: "minLength atleast 3" },
          maxLength: { value: 7, message: "maxLength atleast 7" },
        })}/>

        {errors.first  && <p className='err-msg'> {errors.first.message} </p>}

      </div>
      <br />
      <div>
        <label> Middle Name : </label>
        <input  className = {errors.middleName ? "input-error" : ""} 
        {...register('middleName',{
          required:true,  /* A particular condition of range that the first name should follow */
          minLength: { value: 3, message: "minLength atleast 3" },
          maxLength: { value: 7, message: "maxLength atleast 7" },
        })}/>

        {errors.middle  && <p className='err-msg'> {errors.middleName.message} </p>}

      </div>

      <br />
      <div>
        <label> Last Name : </label>
        <input className = {errors.lastName ? "input-error" : ""} 
        {...register("lastName" , {
          pattern : {
            value : '/[A-Za-z]+$/i',
            message : "Last name should contain only alphabets"
          }
        })}/>

        {errors.last  && <p className='err-msg'> {errors.lastName.message} </p>}
      </div>
      <br />
      
      <input type="submit" />
    </form>
  )
}

export default App