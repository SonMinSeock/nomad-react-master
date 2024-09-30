import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)} style={{ display: "flex", flexDirection: "column" }}>
        <input {...register("email", { required: true })} placeholder="Email" />
        <input {...register("firstName", { required: true })} placeholder="First Name" />
        <input {...register("lastName", { required: true })} placeholder="Last Name" />
        <input {...register("username", { required: true, minLength: 10 })} placeholder="User Name" />
        <input {...register("password", { required: "Password is", minLength: 5 })} placeholder="Password" />
        <input
          {...register("password1", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />

        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
