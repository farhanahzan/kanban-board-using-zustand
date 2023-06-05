import { useStore } from '../store';

type Props = {
  title: string;
};
const Task = (props: Props) => {
  const { title } = props;

  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  console.log(task?.state);
  let bg = 'bg-yellow-300';
  if (task?.state === 'DONE') {
    bg = 'bg-green-600';
  } else if (task?.state === 'ONGOING') {
    bg = 'bg-blue-600';
  } else {
    bg = 'bg-gray-300 text-gray-800';
  }
  return (
    <div className="bg-slate-50 rounded-md min-h-[5rem] mb-2 shadow-md shadow-gray- text-gray-800 px-2 pt-1 pb-2 flex flex-col justify-between">
      <h3 className="font-semibold text-sm">{task?.title}</h3>
      <div className="flex justify-between">
        <div></div>
        <p
          className={
            'text-xs px-2 py-1 rounded-lg shadow-md font-medium text-gray-50 ' +
            bg
          }
        >
          {task?.state}
        </p>
      </div>
    </div>
  );
};

export default Task;
