import React from 'react';


import Card from './Card';

import Collapse from './Collapse'

const App = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-4'>
                    <Collapse href="collapseExample1">
                        <Card cardtitle="First Info" imagepath={require("./img/b1.png").default} moreinfo="Info About Picture 1" />
                    </Collapse>
                </div>
                <div className='col-lg-4'>
                    <Collapse href="collapseExample2">
                        <Card cardtitle="Second Info" imagepath={require("./img/b2.jpg").default} moreinfo="Info About Picture 2" />
                    </Collapse>
                </div>
                <div className='col-lg-4'>
                    <Collapse href="collapseExample3">
                        <Card cardtitle="Third Info" imagepath={require("./img/b3.jpg").default} moreinfo="Info About Picture 3" />
                    </Collapse>
                </div>
            </div>
        </div>
    );
}


export default App;