# React + Vite

A simple calculator application built with React, designed to perform basic arithmetic operations for learning purpose and functionalities in reacr.
<h1>Features</h1>
<ul>
 <li> Basic Operations: Perform addition, subtraction, multiplication, and division.</li>
 <li>Clear Options: Use "AC" to clear the screen and reset calculations or "C" to delete the last input.</li>
 <li>Dynamic Display: Displays the current calculation and updates in real time.</li>
</ul>

<h1>How It Works</h1>
<ul>
  <li>The App.jsx file contains the main logic of the calculator.</li>
<li>State is managed using useState to track the current value (calVal) displayed.</li>
<li>onButtonclick handles button clicks for operations and updates the display accordingly.</li>
<li>CSS (App.css) ensures a user-friendly and centered design.</li>
</ul>

├── src <br>
│   ├── App.jsx            // Main application logic <br>
│   ├── App.css            // Styling for the application <br>
│   ├── Components <br>
│   │   ├── Display.jsx    // Displays the calculator's current value <br>
│   │   ├── ButtonContainer.jsx // Contains calculator buttons <br>
│   │   ├── Container.jsx  // Wrapper for layout <br>
