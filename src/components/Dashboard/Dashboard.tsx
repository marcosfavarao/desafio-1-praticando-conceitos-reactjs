import * as React from "react";
import { Field, Header, Tasklist } from "..";
import { TaskType } from "../../types";

import { Component, Wrapper, Content } from "./Dashboard.styles";

export const Dashboard: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskType[]>([]);

  function createTask(taskTitle: string) {
    const newTask: TaskType = {
      id: String(new Date()),
      title: taskTitle,
      description: "",
      complete: false,
    };

    setTasks((current) => [...current, newTask]);
  }

  function completeTask(id: string) {
    const currentTasks = structuredClone(tasks);
    const updateTasks = currentTasks.map((task) => {
      if (task.id === id) {
        return { ...task, complete: !task.complete };
      }

      return task;
    });

    setTasks(updateTasks);

    // const task = currentTasks.find((task) => task.id === id);

    // if (typeof task === "undefined") return;

    // task.complete = !task.complete;
    // setTasks(updateTasks);
  }

  function deleteTask(id: string) {
    const currentTasks = structuredClone(tasks);
    const updateTasks = currentTasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  }

  return (
    <>
      <Component>
        <Header />

        <Wrapper>
          <Content>
            <Field createTask={createTask} />
            <Tasklist
              tasks={tasks}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          </Content>
        </Wrapper>
      </Component>
    </>
  );
};
