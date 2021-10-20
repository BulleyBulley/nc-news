import { useContext, useState, useEffect } from "react";
import { getUser } from "../utils/Api";
import { UserContext, RequiresLogin } from "../utils/User";

const Login = () => {
  const { isLoggedIn, setUser } = useContext(UserContext);
  
  console.log(isLoggedIn, "<------ isLoggedIn");
  const [form, setForm] = useState({ username: "" });
  const [err, setErr] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleLogout = (event) => {
    setUser(null)
    localStorage.removeItem('loggedInUser');
  };

  const LoginSubmit = (event) => {
    event.preventDefault();
    setErr(null);
    getUser(form)
      .then((data) => {
        if (data.user[0].username) {
          setUser(form.username);
          localStorage.setItem('loggedInUser', form.username)
        }
      })
      .catch((err) => {
        setErr("User Not Found");
        console.log(err)
        
      });
  };

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem('loggedInUser')

    if (prevLoggedInUser) {
      setUser(prevLoggedInUser)
    }
  })

  if (isLoggedIn) {
    return (
      <RequiresLogin isLoggedIn={isLoggedIn}>
        <section className="login_class">
          <div className="login_container">
            <h2>Logged in as {form.username}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </section>
      </RequiresLogin>
    );
  }

  //if statement for login form
  return (
    <section className="login_class">
      <div className="login_container">
        <h1>Login Here</h1>
        <form className="submit_login_class" onSubmit={LoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Login;
