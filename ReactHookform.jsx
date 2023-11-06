import React from 'react'
import { useForm, useState } from 'react-hook-form'
import './Reacthook.module.css'

function ReactHookform() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let submitFormData = (fdata) => { console.log(fdata) }
    // console.log(errors)
    return (
        <div>

            <form className='form' onSubmit={handleSubmit(submitFormData)} >
                <div id="maindiv">
                    <input type="text" placeholder='enter Your fullname ' {...register("fn", { required: { value: true, message: "full name is required" } })} />
                    <small>{errors.fn?.message}</small>
                    <hr />

                    <input type="number" placeholder=' enter mobile' {...register("mob", 
                    { required: { value: true, message: "Mobile is required" },
                    pattern:{value:/^[6-9][0-9]{9}$/,message:"contain only number "}})} />
                    <small>{errors.mob?.message}</small>
                    <hr />
                    <hr />
                    <input type="email" placeholder=' enter email' {...register("email", { required: { value: true, message: "email is required" } } 
                   
                    )  } />

                    <small>{errors.email?.message}</small>

<hr />
                    <button type='submit'>Submit</button>
                </div>


            </form>
        </div>
    )
}

export default ReactHookform
