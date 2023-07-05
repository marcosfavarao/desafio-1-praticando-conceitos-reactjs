import React from "react";
import { ClipboardText } from "@phosphor-icons/react";

import { Task } from "..";

import { TaskType } from "../../types";

import {
  Component,
  Wrapper,
  Header,
  Display,
  EmptyDisplay,
} from "./Tasklist.styles";

type TasklistProps = {
  tasks: TaskType[];
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const Tasklist: React.FC<TasklistProps> = ({
  tasks = [],
  completeTask,
  deleteTask,
}) => {
  const taskTotal = tasks.length;
  const taskComplete = tasks.reduce((acc, task) => {
    if (task.complete) {
      return acc + 1;
    }
    return acc;
  }, 0);

  function handleCompleteTask(id: string) {
    completeTask(id);
  }

  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  return (
    <Component>
      <Wrapper>
        <Header>
          <div>
            <p>Tarefas criadas</p>
            <span>{taskTotal}</span>
          </div>

          <div>
            <p>Concluídas</p>
            <span>
              {taskComplete} de {taskTotal}
            </span>
          </div>
        </Header>

        {!taskTotal && (
          <EmptyDisplay>
            <ClipboardText />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </EmptyDisplay>
        )}

        {!!taskTotal && (
          <Display>
            <ul>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    taskTitle={task.title}
                    taskComplete={task.complete}
                    completeTask={() => handleCompleteTask(task.id)}
                    deleteTask={() => handleDeleteTask(task.id)}
                  />
                );
              })}
            </ul>
          </Display>
        )}
      </Wrapper>
    </Component>
  );
};
