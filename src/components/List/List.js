import React from "react";

import PropTypes from "prop-types";

import { REORDER } from "../../actions/types";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Task from "../Task/Task";

import "./List.scss";

const List = ({ tasks, dispatch }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    dispatch({ type: REORDER, result });
  };

  return (
    tasks && (
      <section>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <>
                <ul className="list" {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index} disableInteractiveElementBlocking>
                      {(provided) => (
                        <Task
                          task={task}
                          dispatch={dispatch}
                          ref={provided.innerRef}
                          draggable={provided.draggableProps}
                          handle={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                </ul>
                {provided.placeholder}
              </>
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
