import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions";
import "./Form.css";

const Form = (props) => {
  const nameRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    if (name !== "" && phone.length === 11) {
      props.addUser({
        name,
        phone,
      });
    }
    nameRef.current.value = "";
    phoneRef.current.value = "";
    nameRef.current.focus();
  };
  return (
    <div className="form-container">
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="نام" ref={nameRef} />
        <input type="number" placeholder="شماره موبایل" ref={phoneRef} />
        <input type="submit" value="افزودن" />
      </form>
    </div>
  );
};

export default connect(null, { addUser })(Form);
