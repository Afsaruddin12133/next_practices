"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';


export default function login() {

    const { register, handleSubmit, reset } = useForm();
    const router = useRouter()
    const onSubmit = (data) =>{
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data =>{
           reset();
           router.push('/product')
        })
        
    }
  return (
    <div className='border rounded-xl p-6 w-[500px] mx-auto mt-[50px]'>
      <h1 className='text-4xl text-center mb-4 font-bold'>Log In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <label>Enter You Name :</label>
        <Input
        {...register('name')}
        type="text"
        className="p-4"
        placeholder = "Enter your name"
        required
        />
        <label>Enter You Email :</label>
        <Input
        {...register('email')}
        type="email"
        className="p-4"
        placeholder = "Enter your Email"
        required
        />
        <label>Enter You Password :</label>
        <Input
        {...register('password')}
        type="password"
        className="p-4"
        placeholder = "Enter your Password"
        required
        />

        <Button
        className="cursor-pointer"
        type = "submit"
        >
            Submit

        </Button>
      </form>
    </div>
  )
}
