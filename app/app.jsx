require('./styles/app');

import React from 'react';
import Button from './components/button';

React.render(
    <Button value="Hello world" />,
    document.getElementById('app')
);

if (DEBUG) {
    console.log('dev');
} else {
    console.log('production');
}
