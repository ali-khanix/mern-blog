import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5 mt-4">
          {/* Left */}
          <div className="flex-1">
            <Link className="font-bold dark:text-white" to="/">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-4xl">
                Ali's
              </span>
              Blog
            </Link>

            <p className="text-sm mt-5">
              This is a demo project. You can sign up with your email and
              password or with Google.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div className="">
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div className="">
                <Label value="Your Email" />
                <TextInput
                  type="text"
                  placeholder="name@company.com"
                  id="email"
                />
              </div>
              <div className="">
                <Label value="Your Password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>

              <Button gradientDuoTone={'purpleToPink'} type="submit">
                Sign Up
              </Button>
            </form>

            <div className="flex gap-2 text-sm mt-2">
              <span>Have an account?</span>
              <Link to={'/sign-in'} className="text-blue-500">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
