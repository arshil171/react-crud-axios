import axios from "axios";
import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import { Route, Routes } from "react-router";
import Update from "./components/Update";

const App = () => {
     return(
        // <Create/>
        <Routes>
            <Route path="/" element={<Create/>}/>
            <Route path="/update/:id" element={<Update/>}/>
        </Routes>
     )
};

export default App;
