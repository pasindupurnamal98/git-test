import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
    // componentDidMount(){
    //     console.log('DishDetail componentDidMounbt is invoked');
    // }
    // componentDidUpdate(){
    //     console.log('DishDetail componentDidUpdate is invoked');
    // }
    // constructor(props){
    //     super(props);
    //     console.log(props);

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments==null){
            return(
                <div></div>
            )
        }
        const cmmnts=comments.map(comment=>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {cmmnts}
                </ul>
            </div>
        )
    }
    const DishDetail =(props) => {
        // console.log('DishDetail component render is invoked');
        const dish=props.dish;
        console.log(dish);

        if (dish == null) {
            return (<div></div>);
        }
         
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            { props.dish.name }
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3> {props.dish.menu}</h3>
                        <hr />
                    </div>
                </div>

                <div className='row'>
                    <RenderDish dish={ props.dish } />
                    <RenderComments comments={ props.comments } />
                </div>
            </div>
        )
    }

export default DishDetail;