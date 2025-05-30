//reusable for input forms, right now just login and registration
import "./FormContainer.css";

const FormContainer = ({ children, ...props }) => {
  return (
    <form className="form-container" {...props}>
      {children}
    </form>
  );
};

export default FormContainer;
