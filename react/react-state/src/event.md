React events are written in camelCase syntax:

(onClick, onChange, onSubmit) instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onclick="shoot()".

-----------------------------
import React from "react";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
-------------------------------
Passing Arguments to Event Handlers
import React from "react";

function App() {
  const handleClick = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <button onClick={() => handleClick("Alice")}>Greet Alice</button>
      <button onClick={() => handleClick("Bob")}>Greet Bob</button>
    </div>
  );
}

export default App;
Output:
------------------------------

Example 3: Handling Input Change Event
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;
Output:
As you type, the entered text dynamically updates and displays below the input field.

----------------------------------------
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
		/*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event      alert--> click
		*/
  }
----------------------------------
Example 4: Submitting a Form
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(`Form submitted! Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
------------------------------------------------
Example 5: Mouse Events
import React from "react";

function App() {
  const handleMouseOver = () => {
    console.log("Mouse is over the button!");
  };

  const handleMouseOut = () => {
    console.log("Mouse left the button!");
  };

  return (
    <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hover Over Me
    </button>
  );
}

export default App;
Output:

Example 6: Keyboard Events
import React from "react";

function App() {
  const handleKeyPress = (event) => {
    alert(`Key pressed: ${event.key}`);
  };

  return (
    <input type="text" onKeyPress={handleKeyPress} placeholder="Type something" />
  );
}

export default App;
Output:

Example 7: Combining Multiple Events
import React, { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => alert("Button clicked!")}
      >
        {hover ? "Hovering!" : "Hover over me!"}
      </button>
    </div>
  );
}

export default App;
Output:

A button labeled "Hover over me!".
When hovered, the label changes to "Hovering!".
Clicking the button triggers an alert saying "Button clicked!".
Notes:
Event Object: React provides an event object (SyntheticEvent) with useful properties like target, type, etc.

const handleEvent = (event) => {
  console.log(event.type); // Logs the event type (e.g., "click", "change")
  console.log(event.target.value); // For input fields, logs the current value
};
Default Behavior: Some events, like onSubmit, have default browser behavior. Use event.preventDefault() to override it.

Event Binding: Arrow functions (or .bind(this)) ensure proper this context when passing event handlers.

These examples illustrate how React handles events, making components interactive and dynamic!








