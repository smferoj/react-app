import React from 'react'
import {Helmet} from "react-helmet";
const BreadCrumb = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}|FashionShop</title>
      </Helmet>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item ">Dashboard</li>
        <li className="breadcrumb-item active">{props.title}</li>

      </ol>
    </>
  )
}

export default BreadCrumb