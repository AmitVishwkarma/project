import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompnay] = React.useState("");
    const [error, setError] = React.useState(false);

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
        navigate("/");

    }

    return (
        <div className='product'>
            <h1>Student Form..</h1>
            <input type="text" placeholder='Enter  name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            
            <input type="mobile" placeholder='Mobile No' className='inputBox'
                value={mobile} onChange={(e) => { setMobile(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid number</span>}

            <input type="number" placeholder='Enter admission price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid admission price</span>}

            <input type="text" placeholder='Enter subject' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {error && !company && <span className='invalid-input'>Enter valid subject</span>}
                
            <input type="text" placeholder='Enter  teacher name' className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            />
            {error && !company && <span className='invalid-input'>Enter valid teacher name</span>}




            <button onClick={addProduct} className='appButton'>Add Subject</button>
        </div>
    )
}

export default AddProduct;