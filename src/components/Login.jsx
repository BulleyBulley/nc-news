import { useContext, useState } from "react";
import { getUser } from "../utils/Api";
import { setUser, UserContext, RequiresLogin } from "../utils/User";


const Login = () => {
  const { isLoggedIn, setUser } = useContext(UserContext);
  console.log(isLoggedIn, '<------ isLoggedIn');
  const [form, setForm] = useState({ username: "" });
  const [err, setErr] = useState(null)
  console.log(err, '<--- err')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const LoginSubmit = (event) => {
    event.preventDefault();
    getUser(form)
      .then((data) => {
        //console.log(data.user[0].username)
        if (data.user[0].username) {
          setUser(form.username);
        }
      })
      .catch((err) => {
        setErr('User Not Found')
      });

    if(err) return <p> Error</p>  
  };

  return (
    <section className="login_class">
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
      <RequiresLogin isLoggedIn={isLoggedIn}>

        <p>Log in Success!</p>
      </RequiresLogin>
    <p>{err}</p>
    </section>
  );
};

export default Login;
