import React from 'react'

const BreadCrumb = (props) => {
  return (
    <> 
    <h1 class="mt-4"> my Dashboard </h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">{props.title}</li>
    </ol>
    </>
  )
}

export default BreadCrumb