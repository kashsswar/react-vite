import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%', // Take full width of the viewport
        boxSizing: 'border-box', // Include padding and border in the element's total width and height
        padding: '17rem', // Optional padding
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>Learn about Redux Toolkit</h1>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <AddTodo />
      </div>
      <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto' }}>
        <Todos />
      </div>
    </div>
  );
}

export default App;
