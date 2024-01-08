
import './App.css';
import React, { useState } from 'react';
import Form from './components/form/form';

function App() {
  const [parentData, setParentData] = useState(
    {'Name':'',
      'Email':'',
      'Phone':'',
      'Address':'',
      'Country':'',
      'State':'',
      'Zip-code':'',}
      );

  // let field = {'name':'', 'email':'','phone':'','address':'','country':'','state':'','zip-code':''};

    // Callback function to receive data from the child
    const handleChildData = (dataFromChild) => {
      console.log('Data received from child:', dataFromChild);
      // Update parent data based on child data
      setParentData(dataFromChild);
    };


  return (
    <div className="App">
    <router>
      <route>
        <Form data={parentData} onDataFromChild={handleChildData}/>
        {/* <Form /> */}
      </route>
    </router>
    </div>
  );
}

export default App;
