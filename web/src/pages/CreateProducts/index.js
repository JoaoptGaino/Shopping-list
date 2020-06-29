import React,{useState,useEffect,FormEvent,ChangeEvent} from 'react';
import {useHistory,Link} from 'react-router-dom';
import api from '../../services/api';

const CreateProduct = () =>{
    const [products,setProducts] = useState();
    const [formData,setFormData] = useState({
        name:''
    });
    const history = useHistory();
    function handleInputChange(input){
        input.preventDefault();
        const {name,value} = input.target;
        /* console.log(name); */
        setFormData({...formData,[name]:value});
        console.log(formData);
    }
    async function handleSubmit(event){
        /* event = new FormEvent(); */
        event.preventDefault();
        //console.log(formData);
        const name = formData.name;
        /* const nameReal = JSON.stringify({name});
        console.log(nameReal); */
        const data = new FormData();

        data.append('name',name);
        
        await api.post('api/products',data.get("name"));
        
    }

    return(
        <div className="content">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="name">Nome do produto</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct;