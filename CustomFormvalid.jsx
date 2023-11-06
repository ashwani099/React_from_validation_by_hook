import React ,{ useState } from 'react'
function CustomFormvalid() {
   let[Formdata,setFormdata]=useState({fn:"",mob:"",email:"",pwd:""})
   let [error,setError]=useState({})
   

   let changeformdata=({target:{name,value}})=>{
    setFormdata({...Formdata,[name]:value})
   }

   let submitFormData=(e)=>{
    e.preventDefault();
    setError(validate(Formdata))
   }

   let validate=(fdata)=>{
    let errorMessage={}
    if(!fdata.fn){
        errorMessage.fnMessage="full name is required";
    }
    else if(fdata.fn.length<6){
        errorMessage.fnMessage="should contain atleast 6 character";
    }

    // ^ mob validation
    if(!fdata.mob){
        errorMessage.mobMessage="mobile is mendatory"
    }
    return errorMessage;


   }
   console.log(error)
    return (
        <div>

            <form className='form' onSubmit={submitFormData} >
                <div id="maindiv">
                    <input type="text" placeholder='enter Your fullname' name='fn' value={Formdata.fn} onChange={changeformdata}/>
                    <small>{error.fnMessage && error.fnMessage}</small>
                    <hr />

                    <input type="text" placeholder='enter Your mobile' name='mob'
                      value={Formdata.mob} onChange={changeformdata}  />
                    <small>{error.mobMessage && error.mobMessage}</small>
                    <hr />


<hr />
                    <button type='submit'>Submit</button>
                </div>


            </form>
        </div>
    )
}

export default CustomFormvalid