
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleAddTask = () => {
    onAddTask(task);
    setTask('');
    setShowPopup(false);
  };

  return (
    <>
      <div>
        <button className='btn btn-primary w-full' onClick={() => setShowPopup(true)}>
          Add Task <AiOutlinePlus className='ml-2' size={10}/>
        </button>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-2">Add Task</h2>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="border border-gray-300 p-2 mb-2 w-full rounded"
              placeholder="Enter task name"
            />
            <div className="flex justify-end">
              <button className="btn btn-secondary mr-2" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAddTask}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
