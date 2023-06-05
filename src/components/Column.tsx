import { shallow } from 'zustand/shallow';
import { useStore } from '../store';
import Task from './Task';

type Props = {
  state: string;
};
const Column = (props: Props) => {
  const { state } = props;

  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
    );
    const addTask = useStore(store => store.addTask)
    
    const task = { title: 'task testing '+state, state: state }
    console.log(tasks)
  return (
    <div className="bg-gray-800 m-4 p-4 rounded-md shadow-md text-gray-50 min-h-[20rem] flex-1">
      <div className="flex justify-between item-center">
        <h2>{state}</h2>
        <button
          onClick={() => addTask(task)}
          className="text-xs bg-gray-600 px-2 font-semibold uppercase rounded-md shadow-md hover:bg-gray-950"
        >
          Add
        </button>
      </div>
      <div className="pt-4">
        {tasks.map((task) => (
          <Task title={task.title} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
};

export default Column;
