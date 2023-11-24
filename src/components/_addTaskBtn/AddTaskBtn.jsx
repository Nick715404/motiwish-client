import './AddTaskBtn.scss';

export default function AddTaskBtn({ text, handleClick }) {
  return (
    <button onClick={handleClick} className='addTaskBtn'>{text}</button>
  )
}
