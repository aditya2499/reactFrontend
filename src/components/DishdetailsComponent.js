import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom'
  
   
   function RenderDish({dish}){
      if(dish!=null){
         return (
            
            <div  className="col-12 col-md-5 m-1">
         <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
         </Card>
         </div>
         
         )
      }
      else return (
         <div></div>
      )
   }

   function RenderComment({comments}){
      const cmnts = comments.map((cmnt)=>{
         return(
            
            <div>
            <li>{cmnt.comment}</li>
            <li>--{cmnt.author} {cmnt.date}</li>
            </div>
            
         )
      })
      return (
         <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
          <ul className="list-unstyled text-left mb-2"> 
          {cmnts}
          </ul>
          </div>
       )
   }
   const DishDetails=(props)=>{
     
      return(
         <div className='container'>  
          <div className='row'>
            <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem><Link active>{props.dish.name}</Link></BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'><h3>{props.dish.name}</h3><hr/></div>
          </div> 
         <div className="row">  
            <RenderDish dish = {props.dish}/>
            <RenderComment comments = {props.comments}/>
         </div>
         </div>
      )
      
   }
 
  export default DishDetails;