import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import FormContainer from "../components/FormContainer";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // The main login logic
  const onSubmit = (data) => {
    // 1. Get user data from localStorage using the provided email
    const storedUserData = localStorage.getItem(data.email);

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.password === data.password) {
        alert(
          `Welcome back, ${userData.name}! You are successfully logged in.`
        );
        // Here you would typically redirect the user or update the app state
        // For example: window.location.href = '/dashboard';
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page-container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Login</h2>

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {/* Display a more specific error message from the validation rule */}
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}

          <input type="submit" value="Login" />
        </FormContainer>
      </div>
    </>
  );
}

export default Login;
