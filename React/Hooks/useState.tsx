// Adding state to a component 
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
  // ...

// Updating state based on the previous state
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}

// Update object
setForm({
  ...form,
  lastName: e.target.value
});

// Update nested object
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    title: e.target.value
  }
});

// Add to list
setTodos([
  ...todos,
  {
    id: nextId++,
    title: title,
    done: false
  }
]);

// Update list item
setTodos(todos.map(t => {
  if (t.id === nextTodo.id) {
    return nextTodo;
  } else {
    return t;
  }
}));

// Delete list item
setTodos(
  todos.filter(t => t.id !== todoId)
);

// Avoiding recreating the initial state
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos); // Initalizer function
  // ...

// Resetting state with a key
export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}
