import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}){
        if(dish != null){
            return(
              <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                  </CardBody>
  
              </Card>
            );
        }
        else{
          return(
            <div></div>
          );
        }
      }
    function  RenderComments(dish){
        if(dish!=null)
        return(
            <div class="container">
              
              <h4>Comments</h4>
              <ul className='list-unstyled'>
                {dish.comments.map((comment ,i)=>{
                    return(
  <div key={comment.id}>
  <li className='mt-4' >{comment.comment}</li>
  <li className='mt-4'>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
  </div>

                    )
                })}
                </ul>
          </div>


        );
        else
        return(
  <div></div>
        );

      }
    const DishDetail = (props) => {
      console.log('Dishdetail Componenent render is invoked')
      const dish = props.dish;

    

      if(props.dish != null){
        return(
          <div className="container">
            <Breadcrumb>
              <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
        <div className="row">
          <RenderDish dish = {props.dish} />
          <RenderComments comments={props.comments}/>
        </div>
        </div>
        );
      }else{
          <div>

          </div>
      }
      return(<div></div>)
    
}



export default DishDetail;