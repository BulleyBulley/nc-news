import { useContext, useState, useEffect } from "react";
import { getUser } from "../utils/Api";
import { UserContext, RequiresLogin } from "../utils/User";

const Login = () => {
  const { isLoggedIn, user, setUser } = useContext(UserContext);

  console.log(isLoggedIn, "<------ isLoggedIn");
  const [form, setForm] = useState({ username: "" });
  const [err, setErr ] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleLogout = (event) => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const LoginSubmit = (event) => {
    event.preventDefault();
    setErr(null);
    getUser(form)
      .then((data) => {
        if (data.user[0].username) {
          setUser(form.username);
          localStorage.setItem("loggedInUser", form.username);
        }
      }).catch((err) => {
        setErr("User Not Found");
        console.log(err);
      });
  };

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");

    if (prevLoggedInUser) {
      setUser(prevLoggedInUser);
    }
  });

  if (isLoggedIn) {
    return (
      <RequiresLogin isLoggedIn={isLoggedIn}>
        <section className="login_class">
          <div className="login_container">
            <h2>Logged in as {user}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </section>
      </RequiresLogin>
    );
  }

  return (
    <section className="login_class">
      <div className="login_container">
        <h2>Login Here</h2>
        <form className="submit_login_class" onSubmit={LoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="guest? try grumpy19"
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
