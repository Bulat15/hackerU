import AddAuthor from "./components/AddAuthor";
import AuthorsContainer from "./components/AuthorsContainer";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getAllAddAutors } from './assynncActions/autors'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAddAutors());
  }, [])

  return (
    <div className="App">
      <AddAuthor/>
      <AuthorsContainer/>
    </div>
  );
}

export default App;