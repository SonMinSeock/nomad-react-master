import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />

        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
