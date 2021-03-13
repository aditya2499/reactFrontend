import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
  import Loading from './LoadingComponent';
  import { baseUrl } from '../shared/baseUrl';

function RenderCard({item,isLoading,errMess})
{
  // console.log('heare',item.name);
  if(isLoading)
  {
    return(
      <Loading></Loading>
    )
    
  }
  else if(errMess)
  {
    return (
      <h4>{errMess}</h4>
    );
  }
  else
  {
    return(
      <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
          {/* ternary operator */}
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
  );
  }
  
}

function Home(props) {
  console.log('home',props.dish);
    return(
      <div className="container">
        <H4>Home</H4>
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
              <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}></RenderCard>
            </div>
            <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess}></RenderCard>
            </div>
        </div>
      </div>
    );
}

export default Home;   