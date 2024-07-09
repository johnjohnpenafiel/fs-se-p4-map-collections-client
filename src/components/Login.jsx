import { useState } from "react";

function Login({ setLoggedIn, loggedIn, user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm(data) {
    const errors = { name: "", pass: "" };
    console.log("validateForm errors object", errors);

    if (!data.name) {
      errors.name = "Username is required";
    } else if (!/^[a-zA-Z0-9\s'-]+$/.test(data.name.trim())) {
      errors.name =
        "Username can only contain letters, numbers, spaces, hyphens, and apostrophes.";
    }
    if (!data.pass) {
      errors.pass = "Password is required";
    } else if (!/^[a-zA-Z0-9\s.,!?'"-:()]+$/.test(data.pass.trim())) {
      errors.pass =
        "Password can only contain letters, numbers, spaces, and common punctuation.";
    }
    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors({});

    const validationErrors = validateForm({
      name: event.target.username.value,
      pass: event.target.password.value,
    });

    if (validationErrors.name === "" && validationErrors.pass === "") {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input defaultValue="true" name="remember" type="hidden" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label className="sr-only" htmlFor="username">
            Username
          </label>
          <input
            autoComplete="username"
            className="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            autoComplete="current-password"
            className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            type="password"
          />
        </div>
      </div>
      <div className="text-red-600">
        <p>{errors.name && <p>{errors.name}</p>}</p>
        <p>{errors.pass && <p>{errors.pass}</p>}</p>
      </div>
      <div className="pt-4">
        <button
          className="group relative flex w-full justify-center rounded-md border border-white bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray focus:outline-none focus:ring-2 focus:ring-3 focus:ring-offset-2"
          type="submit"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          Log in
        </button>
      </div>
    </form>
  );
}

export default Login;