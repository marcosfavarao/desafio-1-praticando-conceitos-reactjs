import React from "react";
import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

import { Wrapper } from "./Task.styles";

type TaskProps = {
  taskTitle: string;
  taskComplete: boolean;
  completeTask: () => void;
  deleteTask: () => void;
};

export const Task: React.FC<TaskProps> = ({
  taskTitle = "",
  taskComplete = false,
  completeTask,
  deleteTask,
}) => {
  function handleCompleteTask() {
    completeTask();
  }

  function handleDeleteTask() {
    deleteTask();
  }

  return (
    <>
      <Wrapper taskComplete={taskComplete}>
        <button
          title={"Concluir tarefa"}
          className={"complete-icon"}
          onClick={handleCompleteTask}
        >
          {/* <Circle {...(taskComplete ? { weight: "fill" } : {})} /> */}
          {taskComplete ? <CheckCircle weight="fill" /> : <Circle />}
        </button>

        <span>{taskTitle}</span>

        <button
          title={"Deletar tarefa"}
          className={"delete-icon"}
          onClick={handleDeleteTask}
        >
          <Trash />
        </button>
      </Wrapper>
    </>
  );
};
