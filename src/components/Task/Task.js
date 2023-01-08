import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from 'redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
  };

  const handleToggle = () => {
    dispatch(editTodo(task));
  };

  return (
    <div className={css.wrapper}>
      <input
        onChange={handleToggle}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
