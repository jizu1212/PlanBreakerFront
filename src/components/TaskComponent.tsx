import React, { useState } from 'react';
import Task from '../types/Task'

interface TaskComponentProps {
    task?: Task; // Make task optional
  }
  
  // Define default task outside the component for clarity
  const defaultTask: Task = {
    id: '1',
    userid: '123',
    title: 'Test Task',
    description: 'This is a test task',
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 0, 2),
  };
  
  const TaskComponent: React.FC<TaskComponentProps> = ({ task = defaultTask }) => {
    const [editedTask, setEditedTask] = useState<Task>(task);
  
    // Handler functions remain the same
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditedTask((prevTask) => ({
        ...prevTask,
        title: e.target.value,
      }));
    };
  
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEditedTask((prevTask) => ({
        ...prevTask,
        description: e.target.value,
      }));
    };
  
    return (
      <div>
        <h3>Task Details:</h3>
        <p>Title: {editedTask.title}</p>
        <p>Description: {editedTask.description}</p>
        {/* Assuming you want to edit the title and description */}
        <input type="text" value={editedTask.title} onChange={handleTitleChange} />
        <textarea value={editedTask.description} onChange={handleDescriptionChange}></textarea>
      </div>
    );
  };
  
  export default TaskComponent;