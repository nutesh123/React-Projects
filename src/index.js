import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Redirect} from "react-router-dom";
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/Login&logout/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AuthContextProvider>
    < BrowserRouter>
<App />
</BrowserRouter>
</AuthContextProvider>);
