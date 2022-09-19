import React from 'react';
import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.sass'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPage />}/>
                <Route path={'/'} element={<MainPage />}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;