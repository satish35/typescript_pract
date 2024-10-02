

import React from 'react'
import { StateProvider } from './StateProvider';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Comment from './Comment';

interface AppProps{
    title: string;
}

const App: React.FC<AppProps>= (prop: AppProps) => {
  return (
    <StateProvider>
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<Home title='Summa'/>}/>
                <Route path='comment' element={<Comment/>}/>
            </Route>
        </Routes>
    </StateProvider>
  )
}

export default App