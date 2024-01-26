import { useState , useEffect} from "react";

export const SearchRepository = (props: any) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event: any) => {
    setSearchItem(event.target.value);
    
  };
  const filteredItems = props.repositState.filter((repositor) =>
  repositor.name.includes(searchItem)
  );
 
  return (
    <div>
      
        <input
        className="border-2 border-solid w-[30rem] rounded-lg h-[2rem]"
          type="text"
          placeholder="find a repository"
          value={searchItem}
          onChange={handleChange }
        />
      
    </div>
  );
};
