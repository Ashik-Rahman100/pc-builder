import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="h-[400px] flex justify-center items-center my-16">
      <div className="w-96 card shadow-2xl p-8">
        {/* <h2 className="text-4xl font-bold text-accent mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        {...register("email", {
                            required: "email address is required",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className="text-error">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "password must be 6 characters or longer" }
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className="text-error">{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text-alt">Forget Password?</span>
                    </label>
                </div>
                <input className='btn btn-accent w-full text-white my-2' type="submit" value="Login" />
            </form>
            <div className="divider">OR</div> */}

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="uppercase btn btn-outline text-sm"
        >
          Continue With Google <FaGoogle className='text-2xl' />
        </button>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/",
            })
          }
          className="uppercase btn btn-outline text-sm mt-4"
        >
          Continue With GitHub <FaGithub className='text-2xl' />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
