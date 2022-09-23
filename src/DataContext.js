import {createContext, useState, React } from "react";

const DataContext = createContext({});

export const DataProvider =({children}) => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };


  return (
    <DataContext.Provider value={{
         imgPreview,setImgPreview,error,setError, handleImageChange
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext