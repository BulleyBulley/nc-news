import { useContext, useState } from "react";
import { getUser } from "../utils/Api";
import { setUser, UserContext, RequiresLogin } from "../utils/User";


const Login = () => {
  const { isLoggedIn, setUser } = useContext(UserContext);
  console.log(isLoggedIn, '<------ isLoggedIn');
  const [form, setForm] = useState({ username: "" });
  const [err, setErr] = useState(null)
  //console.log(err, '<--- err')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleLogout = (event) => {
      setUser(null)
  }

  

  const LoginSubmit = (event) => {
    event.preventDefault();
    setErr(null)
    getUser(form)
      .then((data) => {
        if (data.user[0].username) {
          setUser(form.username);
        }
      })
      .catch((err) => {
        setErr('User Not Found')
      });

     
  };
  if (isLoggedIn) {
      return <RequiresLogin isLoggedIn={isLoggedIn}>
          <section className="login_class">
    <div className='login_container'>
      <h1>Logged in as {form.username}</h1>
      <button onClick={handleLogout}>Logout</button>
      </div>
      </section>
    </RequiresLogin>
  }

  //if statement for login form
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
      
    <p>{err}</p>
    </section>
  );
};

export default Login;
