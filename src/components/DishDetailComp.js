import React,{Component} from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Form,FormFeedback,FormGroup,Input,Label, Navbar, NavbarBrand, Jumbotron ,Nav,NavbarToggler,Collapse,NavItem, Button,Modal,ModalHeader,ModalBody} from 'reactstrap';

import {Link} from 'react-router-dom';
   
   
class Comments extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isModalOpen:false,
            rating:1,
            name:'',
            comment:'',
            touched:{
                name:false
            }
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    toggleModal()
    {
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });
    }

    validate(name){
        const errors=this.validate(this.state.name);
        if(this.state.touched.name && name.length<3 )
        {
            errors.name='Name should be atleast 3 char long';
        }
            else if(name.length>15)
            {
                errors.name='Name should be max 15 char long'
            }
    }
    render()
    {   
        const errors=this.validate(this.state.name);
        return(
            <div className="row">
                <button className="btn btn-light comment" type="button"
                onClick={this.toggleModal}>
                    <span className="fa fa-edit"></span>
                    Submit Button  
                </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
           <ModalBody>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Input value={this.state.rating} type="select" id="rating" name="rating" onChange={this.handleInputChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                
                                </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Your Name</Label>
                            <Input type="name" id="name" name="name"
                                placeholder="Your Name" value={this.state.name}
                                onChange={this.handleInputChange}
                                valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            Comment
                               
                                
                            </Label>
                            <Input type="textarea" id="comment" name="comment" rows="6"
                            value={this.state.comment}
                               onChange={this.handleInputChange}   />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </Form>

           </ModalBody>
       </Modal>
            </div>
        );
    }
}

    function RenderDish({dish})
    {
        if(dish!=null)
        {
            return(
                <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name}>
    
                </CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        }
        else
        {
            return (
                <div></div>
            )
        }
        
    }
    function RenderComments({Comments})
    {
        console.log('int here',Comments);
        if(Comments!=null)
        {
            return(
                Comments.map((response)=>{
                
                    let datePost=new Date(response.date);
                        return(
                            <ul className="list-unstyled">
                                <li>{response.comment}</li>
                                <li>-- {response.author} , {datePost.toDateString()}</li>  
                            </ul>
                        )
                })
            );
        }
        else
        {
            return (
                <div></div>  
            );
        }
        
        

    }
    const Dish=(props)=>
    {   
        
        if(props.dish!=null)
        {
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                    <div className="row">
                <div className="m-1 col-md-5 col-12">
               
                <RenderDish dish={props.dish}></RenderDish>
                </div>
                <div className="mt-5 col-md-5 col-12">
                    <h4>Comment</h4>
                    
                    <RenderComments Comments={props.comments}></RenderComments>
                    <Comments></Comments>
                </div>
                </div>
                </div>
                
                
            )
        }
        else
        {
            return(
                <div></div>
            );
        }
        
    }


export default Dish;