import React from "react";

const Ad_Product = () => {
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompnay] = React.useState("");
  const [error, setError] = React.useState(false);

  const addProduct = async () => {
    if (!name ||!mobile || !price || !company || !category) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name,mobile, price, category, company, userId }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="product">
      <h1>Flight Booking Form.. </h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid-input">Enter valid name</span>
      )}

      <input
        type="mobile"
        placeholder="Mobile No."
        className="inputBox"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      {error && !price && (
        <span className="invalid-input">Enter valid number</span>
      )}
    
    <select  className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}>
        <opton>Preffered Seating</opton>
        <opton>IndoGo</opton>
        <opton>AirIndia</opton>
        <opton>SpaceJet</opton>
     </select>
     {error && !name && (
        <span className="invalid-input">Enter valid Admission Price</span>
      )}

     <select  className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}>
        <opton>Preffered Seating</opton>
        <opton>Economic Class</opton>
        <opton>Business Class</opton>
        <opton>First Class</opton>
     </select>
     {error && !name && (
        <span className="invalid-input">Enter valid Subject</span>
      )}
      
     <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />

      <button onClick={addProduct} className="appButton">
        Add Subject
      </button>
    </div>
  );
};

export default Ad_Product;




// 3 things will be shown (booked tickets (business and economic class) ,user list( number of users login), add flight( diffrent names of flight) Price, (price will diffrent for business and economic including taxes and Gst)
// ,time (pick and drop ), destination1 (from where user is going) destination 2 where he is going .
// 4) admin will able to see number of bookings,numbers of seats available in the flight.



   
{/* 

import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompnay] = React.useState('');
    const [error,setError] = React.useState(false);

    const addProduct = async () => {

        if(!name || !mobile ||!price || !company || !category)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, mobile, price, category, company, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }

    return (
        <div className='product'>
            <h1>Flight Booking Form..</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Enter product category' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {error && !category && <span className='invalid-input'>Enter valid category</span>} 

            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}


            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;

*/}