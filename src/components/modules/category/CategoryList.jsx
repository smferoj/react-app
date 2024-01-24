import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../partials/BreadCrumb'
import CardHeader from '../../partials/miniComponents/CardHeader'
import Constants from './../../Constants';
import axios from 'axios';
import CategoryPhotoModal from '../../partials/modals/CategoryPhotoModal';

const CategoryList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalphoto, setModalPhoto] = useState(false);
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios.get(`${Constants.BASE_URL}/category`).then(res => {
      console.log(res.data);
      setCategories(res.data.data)
    })
  }

  const handlePhotoModal=(photo)=>{
    setModalPhoto(photo)
    setModalShow(true);
  }


  useEffect(() => {
    getCategories()
  }, []);


  return (
    <>
      <BreadCrumb title={'CategoryList'} />
      <div className='row mt-5 pt-5'>
        <div className="col-md-8 col-lg-7 col-xl-6 m-auto">
          <CardHeader
            title='Category List'
            link='/category/create'
            icon='fa solid fa-add'
            btn_text='Add'
          />
        </div>
        <div className="card-body">
          <div className="table-responsive pt-2">
            <table className='table table-hover table-striped table-bordered'>
              <thead>
                <tr className='text-center'>
                  <th>SL</th>
                  <th>Name/Slug</th>
                  <th>Serial</th>
                  <th>Status</th>
                  <th>Photo</th>
                  <th>Created By</th>
                  <th>Date Time</th>

                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr className='text-center'>
                    <th>{++index}</th>
                    <th>
                      <p className='text-primary'>Name:{category.name}</p>
                      <p className='text-success'> Slug:{category.slug}</p>
                    </th>

                    <th>
                      <p>Serial: {category.serial}</p>
                    </th>

                    <th>
                      <p className='text-success'> Status: {category.status} </p>
                    </th>
                    <th> <img onClick={()=>handlePhotoModal(category.photo_full)} src={category.photo} alt={category.name} width={'75px'} /> </th>
                    <th>{category.user_id}</th>
                    <th>
                      <p className='text-primary'>{category.created_at}</p>
                      <p className='text-success'>{category.updated_at} </p>
                    </th>
                  </tr>
                ))}

              </tbody>
            </table>
            <CategoryPhotoModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title ='Category Photo'
              photo = {modalphoto}
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default CategoryList