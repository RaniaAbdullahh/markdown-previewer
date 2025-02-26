import { useState } from 'react';

function useLocalStorage(key, initialValue) {

    const storedValue = localStorage.getItem(key);

    const [value, setValue] = useState(storedValue || initialValue);

    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
      };
    
    return [value, updateValue];  
}

export default useLocalStorage;