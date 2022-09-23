import React from "react";
import "./App.css";
import { DataProvider } from "./DataContext";
import Input from "./Input";

const App = () => {

  return (
    <div className="App">
      <DataProvider>
        <Input />
      </DataProvider>
    </div>
  );
};

export default App;
