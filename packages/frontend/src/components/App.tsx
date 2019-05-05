import React, { lazy, Suspense, useState } from 'react';

const Lazy = lazy(() => import('./Async'));

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      Hello it's React, glad to meet you.
      <button onClick={() => setLoad(true)}>load other content</button>
      {load && (
        <Suspense fallback={<div>Loading...</div>}>
          <Lazy />
        </Suspense>
      )}
    </div>
  );
};

export default App;
