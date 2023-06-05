import { shallow } from 'zustand/shallow';
import { TASK, useStore } from '../store';
import Task from './Task';
import { useForm, SubmitHandler } from 'react-hook-form';
import enterIcon from '../assets/enter.svg';
import { useState } from 'react';
type Props = {
  state: string;
};
const Column = (props: Props) => {
  const { state } = props;
  const [open, setOpen] = useState(false);
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const addTask = useStore((store) => store.addTask);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TASK>();
  const onSubmit: SubmitHandler<TASK> = (data) => {
    addTask(data);
    setOpen(() => false);
    reset({ title: '' });
  };

  return (
    <div className="bg-gray-800 m-4 p-4 rounded-md shadow-md text-gray-50 min-h-[20rem] flex-1">
      <div className="flex justify-between item-center">
        <h2>{state}</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-xs bg-gray-600 px-2 font-semibold uppercase rounded-md shadow-md hover:bg-gray-950"
        >
          Add
        </button>
      </div>
      {open && (
        <div className="mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-row justify-center item-center"
          >
            <input
              className="focus:outline-none text-gray-950 w-4/5 px-1 rounded-md rounded-tr-none rounded-br-none text-sm leading-3 pb-1 font-medium shadow-md"
              type="text"
              {...register('title', { required: true })}
            />

            <input type="hidden" defaultValue={state} {...register('state')} />
            <button
              type="submit"
              className="text-xs bg-gray-300 px-2 py-1 font-semibold uppercase rounded-md rounded-tl-none rounded-bl-none shadow-md hover:bg-gray-400"
            >
              <img className="w-4 " src={enterIcon} alt="icon" />
            </button>
          </form>
          {errors.title && (
            <p className="text-red-600 text-xs text-center py-1">
              Title is required
            </p>
          )}
        </div>
      )}

      <div className="mt-4">
        {tasks.map((task) => (
          <Task title={task.title} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
};

export default Column;
