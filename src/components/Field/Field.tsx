import React from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { Component, Wrapper } from "./Field.styles";

type FieldProps = {
  createTask: (task: string) => void;
};

export const Field: React.FC<FieldProps> = ({ createTask }) => {
  const [newTask, setNewTask] = React.useState<string>("");

  function handleCreateNewTask() {
    createTask(newTask.trim());
    clearField();
  }

  function handleAddTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function clearField() {
    setNewTask("");
  }

  const emptyField = !newTask.trim().length;
  return (
    <Component>
      <Wrapper>
        <input
          type={"text"}
          name={"todo-input"}
          placeholder={"Adicione uma nova tarefa"}
          value={newTask}
          onChange={handleAddTaskTitle}
        />
        <button
          type={"button"}
          title={"Criar nova tarefa"}
          onClick={handleCreateNewTask}
          disabled={emptyField}
        >
          Criar
          <PlusCircle />
        </button>
      </Wrapper>
    </Component>
  );
};
