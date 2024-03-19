# Kim's Portfolio

Welcome to Kim's Portfolio, currently live at [kimcode.fi](https://kimcode.fi).

## Overview

Kim's Portfolio showcases projects and skills, primarily in web development. It's a dynamic single-page application (SPA) built with React, highlighting proficiency in modern JavaScript frameworks, HTML, CSS, and responsive design.  You get back to home page when logo is clicked.

### Features

- **Home Page**: Introduces visitors with quick navigation.
- **About Me**: Offers a brief biography and background.
- **Project Showcase**: Details to my projects with GitHub repository links.
- **Applications**: Page has some applications like calculator and 15-game. All links are in home page
- **Contact Form**: Enables visitors to send messages or inquiries.

## Installation

To run this portfolio locally for development and testing:

1. **Clone the Repository**

   ```bash
   git clone http://github.com/KimLof/Portfolio.git
   ```

   Navigate to the Repository Directory

   ```bash
   cd Portfolio
   ```

2. **Set Up Environment Variables**

   Create an `apiKeys.js` file in the root directory and add API keys as follows (if applicable):

   ```javascript
   const API_KEYS = {
       apiKeyOne: "YOUR_OPENWEATHER_API",
       apiKeyTwo: "YOUR_OPENCURRENCY_API",
   };

   export default API_KEYS;
   ```

   Ensure to add the new `.js` file to your `.gitignore` to secure your keys.

3. **Start the Development Server**

   ```bash
   npm start
   ```

   This command runs the app in development mode. Visit http://localhost:3000 to view it in the browser.
