import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Action from './components/action';
import Annther from './components/another_action';
import Something from './components/something';
import Layout from './Layout/Components/Header/layout';
import Loginuser from './components/user';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="action" element={<Action />} />
                    <Route path="anothor_action" element={<Annther />} />
                    <Route path="something" element={<Something />} />
                    <Route path="/user" element={<Loginuser />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;
