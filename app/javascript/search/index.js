import React from 'react';
import ReactDOM from 'react-dom';
import Search_grid from './search_grid';
import Search_input from './search_input';


ReactDOM.render(
    <div>
        <div>
            <Search_input />
        </div>
        <div>
            <Search_grid />
            <Search_grid />
        </div>
    </div>,
    document.getElementById("search")
)