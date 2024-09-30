import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string; // 서버 에러 발생 할 경우 에러 메시지 할당.
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "Passowrd are not the same" }, { shouldFocus: true });
    }
    // 서버 에러 발생 할 경우 커스텀 에러 메시지 할당 한다고 가정해보자.
    // setError("extraError", { message: "Server offline." });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)} style={{ display: "flex", flexDirection: "column" }}>
        <input
          {...register("email", {
            required: "Email is Required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|naver\.com)$/,
              message: "Only naver.com or gmail.com emails allowed.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>

        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noSon: (value) => (value.includes("son") ? "no son allowed" : true),
              noNick: (value) => (value.includes("nick") ? "no nick allowed" : true),
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>

        <input {...register("lastName", { required: "write here" })} placeholder="Last Name" />
        <span>{errors?.lastName?.message}</span>

        <input {...register("username", { required: "write here", minLength: 10 })} placeholder="User Name" />
        <span>{errors?.username?.message}</span>

        <input {...register("password", { required: "Password is", minLength: 5 })} placeholder="Password" />
        <span>{errors?.password?.message}</span>

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
        <span>{errors?.password1?.message}</span>

        <button>add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
