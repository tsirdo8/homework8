import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.inputBackground};
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.listBackground};
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 18px;
`;

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <TodoItemContainer onClick={toggleComplete}>
      <Text completed={todo.completed}>{todo.text}</Text>
      <DeleteButton
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      >
        ✖
      </DeleteButton>
    </TodoItemContainer>
  );
}

export default TodoItem;
