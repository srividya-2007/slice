// Import necessary tools from React
import React, { Component } from 'react';

// Import the styling from App.css
import './App.css';

// Create a React component named App
class App extends Component {
  constructor() {
    super(); // Call the parent constructor

    // Define the initial state of the app
    this.state = {
      index: 0,         // current slide index (starts at slide 0)
      slideCount: 3     // total number of slides (3 in total)
    };

    // Bind the method so it can access `this`
    this.autoSlide = this.autoSlide.bind(this);
  }

  // React lifecycle method: runs automatically after the component is loaded
  componentDidMount() {
    // Automatically call autoSlide every 3 seconds (3000 milliseconds)
    this.interval = setInterval(this.autoSlide, 3000);
  }

  // Function to slide to the next image
  autoSlide() {
    // Calculate the next slide index (loops back to 0 after the last slide)
    let nextIndex = (this.state.index + 1) % this.state.slideCount;

    // Update the state with the new index
    this.setState({ index: nextIndex });

    // Move the slide container to show the correct slide
    // For example, if nextIndex = 1 → translateX(-100%), index 2 → -200%, etc.
    document.getElementById("slideRef").style.transform = `translateX(-${nextIndex * 100}%)`;
  }

  // Render method to show content on the screen
  render() {
    const { index } = this.state; // Get the current index from state

    return (
      <>
        {/* Top header section */}
        <header>
          <div className='logo'>Sliding Page - Slide {index}</div>
        </header>

        {/* Middle section containing the image slider */}
        <section>
          <div className='slider'>
            <div className='slides' id="slideRef">
              {/* Each div is one full-screen slide with a background image */}
              <div className='slide s1'></div>
              <div className='slide s2'></div>
              <div className='slide s3'></div>
            </div>
          </div>
        </section>

        {/* Footer at the bottom */}
        <footer>
          Copyright @ 2025. All rights reserved.
        </footer>
      </>
    );
  }
}

// Export the App component so it can be used in main.jsx
export default App;
