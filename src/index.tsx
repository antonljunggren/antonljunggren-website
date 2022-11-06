/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";

import './index.css';
import App from './App';
import { MetaProvider } from '@solidjs/meta';

render(() => 
    <Router>
        <MetaProvider>
            <App />
        </MetaProvider>
    </Router>, 
    document.getElementById('root') as HTMLElement);
