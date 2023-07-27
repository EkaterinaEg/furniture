// import React from "react";
// import ReactDOM from "react-dom";
// import { useState } from "react";
// import { createRoot } from "react-dom/client";

// ______________________________________________test
// const myElement = React.createElement("h1", {}, "I do not use JSX!");

// const root = ReactDOM.createRoot(document.getElementById("contact__form"));
// root.render(myElement);
// test____________________________________________________

function ContactUsForm() {
  // const [firstName, setFirstName] = useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Dear ${firstName}! Thank you for your message. We will call you soon!`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name">
        <label className="form__input">
          First Name
          <br />
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="form__input">
          Last Name
          <br />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="form__input">
          Phone Number
          <br />
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className="form__textarea">Message</label>
        <textarea name="message" rows={5} cols={40}></textarea>
      </div>
      <input type="submit" />
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("form")).render(<ContactUsForm />);

// export default Form;
