import React, { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from "../shared/dishes"
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetails from './DishdetailsComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch , Route, Redirect} from 'react-router-dom';
import { render } from '@testing-library/react';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';
import {   withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
//import DishDetails from './DishdetailsComponent'





const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  
  

  render(){
    
    const HomePage = () => {
      return(
        <div>
          <About leaders = {this.state.leaders}/>
          {/* <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          /> */}
          </div>
      );
    }
  
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    
  return (
    <div className="App">
        <Header/>
          <Switch>
            <Route path = '/home' component={HomePage}/>
            <Route exact path = '/menu' component={()=><Menu dishes = {this.state.dishes }/> }/>
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} /> />
            <Route path = '/aboutus' component = {()=><About leaders = {this.state.leaders}></About>}/>
            <Redirect to='/home'/>
          </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=> {this.onDishSelect(dishId)}}/> */}
        {/* <DishDetails dish = {this.state.dishes.filter((dish )=> dish.id === this.state.selectedDish)[0]}/> */}
        <Footer/>
      </div>
  );  
      }
}

export default withRouter(connect(mapStateToProps)(Main));
