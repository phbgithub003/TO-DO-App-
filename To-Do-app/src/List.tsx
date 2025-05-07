import { useState } from "react";


type ListProp = {
  item: string;
  onDelete: (ind: number) => void;
  index: number;
};

function List({ item, onDelete, index }: ListProp) {

    const [checked,setChecked] = useState(false)

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }
  return (
    <div className="flex justify-between items-center p-2 border-b-2 border-gray-200">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked} 
          onChange={handleCheckboxChange}
          className="w-4 h-4 rounded-full border border-gray-400 appearance-none checked:bg-blue-600 checked:border-transparent cursor-pointer"
        />
       <h1
          className={`text-black font-medium transition-all ${
            checked ? "line-through text-gray-400" : ""
          }`}
        >
            {item}
        </h1>
      </div>
      <div>
        <button>
          <img
            src="/delete.png"
            alt="delete"
            className="h-4 w-4"
            onClick={() => onDelete(index)}
          />
        </button>
      </div>
    </div>
  );
}

export default List;
