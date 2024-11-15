import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";
import TodoItem from "./components/todoItem/TodoItem";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/Bitmap.jpg"), rgba(128, 0, 128, 0.3);

  background-size: cover;
  background-position: center;
  margin-inline: 600px;
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px; 
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

const TodoList = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.listBackground};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTodo = (text) => {
    const newTodo = { text, completed: false, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <TodoWrapper>
          <Title>TODO</Title>
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <TodoInput
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                addTodo(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <TodoList>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={() => toggleComplete(todo.id)}
                deleteTodo={() => deleteTodo(todo.id)}
              />
            ))}
          </TodoList>
        </TodoWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
