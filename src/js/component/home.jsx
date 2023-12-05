import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <form
        className="d-flex flex-column gap-3 "
        onSubmit={(e) => {
          // e.preventDefault() prevents the page from
          // reloading when you submit the form.
          e.preventDefault();
          // This event triggers when you submit the form,
          // so all your logic for that should live here.
          console.log(value);
          setValue("");
        }}
      >
        <h1>Open the console to see this in action!</h1>
        {/* This is a standard controlled input. */}
        {/* Read more here: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable */}
        <input
          placeholder="Type here and hit enter!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary">
          This button also works with <code>0</code> lines of code!
        </button>
        <h2>
          Check out <code>/src/js/component/home.jsx</code> to see how this
          works!
        </h2>
        <h2>
          Read about controlled inputs{" "}
          <a
            href="https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable"
            target="_blank"
          >
            here!
          </a>
        </h2>
      </form>
    </div>
  );
};

export default Home;
