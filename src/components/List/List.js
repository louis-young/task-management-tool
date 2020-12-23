import React from "react";

import PropTypes from "prop-types";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Task from "../Task/Task";

import "./List.scss";

const List = ({ tasks, dispatch }) => {
  return (
    tasks && (
      <section>
        <DragDropContext>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul className="list" {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Task
                        task={task}
                        dispatch={dispatch}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      />
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    )
  );
};

List.propTypes = {
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
};

export default List;
