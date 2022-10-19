import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// client side rendered app: react (cra)
  // -> database which is firebase
  // -> react-loading-skeleton

// architecture
  // -> components,
  // -> constants,
  // -> context,
  // -> helpers,
  // -> lib (firebase is going to live in here),
  // -> services (firebase functions in here),
  // styles (tailwind's folder (app/tailwind))

