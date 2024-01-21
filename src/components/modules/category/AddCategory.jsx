import React, { useState } from 'react'
import BreadCrumb from '../../partials/BreadCrumb'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Constants from '../../Constants';
import Swal from 'sweetalert2';
const AddCategory = () => {
  const [input, setInput] = useState({status:1});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    if(e.target.name == 'name'){
      let slug = e.target.value
      slug = slug.toLowerCase()
      slug = slug.replaceAll(' ', '-')
      setInput(prevState => ({ ...prevState, slug: slug }));
    }
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
   
  }

  const handlePhoto =(e)=>{
   let file = e.target.files[0]
   let reader = new FileReader()
   reader.onloadend =()=>{
    setInput(prevState => ({ ...prevState, photo:reader.result}))
   }
   reader.readAsDataURL(file)
  }

  const handleCategoryCreate=()=>{
    setIsLoading(true)
 axios.post(`${Constants.BASE_URL}/category`, input)
 .then(res => {
  setIsLoading(false);
  Swal.fire({
    position: "top-end",
    icon: res.data.cls,
    title:  res.data.msg,
    showConfirmButton: false,
    toast:true,
    timer: 1500
  })
  setInput({
    name: '',
    slug: '',
    serial: '',
    status: 1,
    description: '',
    photo:'' 
  });
  setErrors([]);
})
.catch(errors => {
  setIsLoading(false);
   if(errors.response.satus = 422){
      setErrors(errors.response.data.errors);
   }
});

  }

  return (
    <>
      <BreadCrumb title={'AddCategory'}/>
      <div className='row mt-5 pt-5'>
        <div className="col-md-8 col-lg-7 col-xl-6 m-auto">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>Add Category</h4>
              <button className='btn btn-sm btn-primary'>
                <Link to="#" className='text-light text-decoration-none'> <i className="fa-solid fa-list"></i> List</Link>
              </button>
            </div>
            <div className="card-body">
              <div className="row">


                <div className="col-md-6 mt-2">
                  <label htmlFor="name" className='w-100'>
                    <p>Name</p>
                    <input
                      className={errors.name !== undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                      name={'name'}
                      type='text'
                      value={input.name}
                      placeholder='Enater category name'
                      onChange={handleInput}
                    />
                  </label>
                  <p className='text-danger'> {errors.name != undefined ? errors.name[0] :null}</p>
                </div>
                

                <div className="col-md-6 mt-2">
                  <label htmlFor="slug" className='w-100'>
                    <p>Slug</p>
                    <input
                      className={errors.slug !== undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                      name={'slug'}
                      type='text'
                      value={input.slug}
                      placeholder='Enater category slug'
                      onChange={handleInput}
                    />
                  </label>
                  <p className='text-danger'> {errors.slug != undefined ? errors.slug[0] :null}</p>
                </div>
                

                <div className="col-md-6 mt-2">
                  <label htmlFor="serial" className='w-100'>
                    <p>Serial</p>
                    <input
                      className={errors.serial !== undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                      name={'serial'}
                      type='number'
                      value={input.serial}
                      placeholder='Enater category serial'
                      onChange={handleInput}
                    />
                  </label>
                  <p className='text-danger'> {errors.serial != undefined ? errors.serial[0] :null}</p>
                </div>
                

                <div className="col-md-6 mt-2">
                  <label htmlFor="status" className='w-100'>
                    <p>Status</p>
                    <select
                     className={errors.select !== undefined ? 'form-select mt-2 is-invalid' : 'form-select mt-2'}
                      name='status'
                      value={input.status}
                      placeholder='Select category status'
                      onChange={handleInput}
                    >
            
                     <option value="1">Active</option>
                     <option value="0">Inactive</option>
                    </select>  
                  </label>
                  <p className='text-danger'> {errors.status != undefined ? errors.status[0] :null}</p>
                </div>


                <div className="col-md-12 mt-2">
                  <label htmlFor="description" className='w-100'>
                    <p>Description</p>
                    <textarea
                      className={errors.description !== undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                      name={'description'}
                      value={input.description}
                      placeholder='Enater category description'
                      onChange={handleInput}
                    />
                  </label>
                  <p className='text-danger'> {errors.description != undefined ? errors.description[0] :null}</p>
                </div>


                <div className="col-md-12 mt-2">
                  <label htmlFor="photo" className='w-100'>
                    <p>Image</p>
                    <input
                      className={errors.photo !== undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                      name={'photo'}
                      type='file'
                      onChange={handlePhoto}
                    />
                     <p className='text-danger'> {errors.photo != undefined ? errors.photo[0] :null}</p>
                  </label>
                 {input.photo != undefined ? <div className="photo-preview">
                    <img src={input.photo} alt="" className='' />
                  </div>: null }
                  
                </div>
                  <div className="col-md-12 mt-1">
                    <button type='submit' className='btn btn-primary w-100' onClick={handleCategoryCreate} dangerouslySetInnerHTML={{__html:isLoading?' <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading....': 'Add category'}}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCategory