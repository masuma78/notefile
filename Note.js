// Note.js
import React, { useState } from 'react';

const Note = ({ id, title, content, completed, onEdit, onDelete, onToggleComplete }) => {
  const handleToggle = () => {
    onToggleComplete(id);
  };

  return (
    <div className={`note ${completed ? 'completed' : ''}`} id='n1'>
      <div className='mp'>
      <input className='checkbox' type="checkbox" checked={completed} onChange={handleToggle} />
      <h3 className='k'>{title}</h3>
      <p>{content}</p>
      </div>
      <button className='btn' onClick={() => onEdit(id)}>Edit</button>
      <button className='btn' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Note;
