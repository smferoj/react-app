import React from 'react'

const BreadCrumb = (props) => {
  return (
    <> 

    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item ">Dashboard</li>
      <li class="breadcrumb-item active">{props.title}</li>
      
    </ol>
    </>
  )
}

export default BreadCrumb