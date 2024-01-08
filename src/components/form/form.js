import React, { useEffect, useState } from 'react';
import '../form/form.css'

const Form = (props) => {
    console.log("props",(props.data))
    const [childData, setChildData] = useState('');

    useEffect(()=>{
        setChildData(props.data)
    },[])

    const updateDataAndSendToParent = () => {
      const newData = 'New Data from Child';
      setChildData(newData);
      props.onChildData(newData);
    };

    return (
        <div className='formdata'>
            <div className='childFormData'>
                <div className='fakeShadow'>
                <form className='fromDesign'> {/* onSubmit={handleSubmit} */}
                {(Object.keys(childData)).map((item)=>{
                   return <>
                    <label className='itemHeading'>
                    <p className='name'>{item}</p>:
                        <input
                            className='itemValue'
                            type="text"
                            name={item}
                            value={childData[item]}
                            placeholder= {'Please Enter' +" "+ item}
                        //   onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    </>
                })}
                    {/* <label className='itemHeading'>
                    <p className='name'>Name</p>:
                        <input
                            className='itemValue'
                            type="text"
                            name="email"
                        //   value={formData.email}
                        //   onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label className='itemHeading'>
                    <p className='name'>Email</p>:
                        <input
                            className='itemValue'
                            type="email"
                            name="email"
                        //   value={formData.email}
                        //   onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label className='itemHeading'>
                    <p className='name'>Password</p>:
                        <input
                            className='itemValue'
                            type="text"
                            name="email"
                        //   value={formData.email}
                        //   onChange={handleInputChange}
                        />
                    </label>
                    <br /> */}
                </form>
                    <button className='SubmitButton inset-text-effect' type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Form
