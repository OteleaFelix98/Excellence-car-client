import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class EditCarModal extends Component{
    constructor(props){
        super(props);
        this.state={carsm :[],snackbaropen : false ,snackbarmsg: ''}
        this.handleSubmit =this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        fetch('https://localhost:44354/api/car')
        .then(response =>response.json())
        .then(data => {
          this.setState({carsm:data})  ;
        });
    }

    snackbarClose=(event) =>{
        this.setState({snackbaropen:false});

    };
    handleSubmit(event ){
event.preventDefault();
fetch('https://localhost:44354/api/car' ,{
 method:'PUT',
 headers :{
    'Accept':'application/json',
    'Content-Type':'application/json'
 },
 body:JSON.stringify({
     id:event.target.id.value,
     modelName: event.target.modelName.value,
     fueltype: event.target.fueltype.value,
     bodytype: event.target.bodytype.value,
     priceinterval: event.target.priceinterval.value,
     offroadrank: event.target.offroadrank.value,
     maximumspeedinterval: event.target.maximumspeedinterval.value,
     luxuryrank: event.target.luxuryrank.value,
     reliabilityrank: event.target.reliabilityrank.value,
     safetyrank: event.target.safetyrank.value,
     practicalityrank: event.target.practicalityrank.value,
     driverank: event.target.driverank.value,
     interiorrank: event.target.interiorrank.value,
     forcity: event.target.forcity.value,
     forlong: event.target.forlong.value,
     consumption: event.target.consumption.value,
      electricconsumption  : event.target.electricconsumption.value,
     enginetype: event.target.enginetype.value,
     cylindernumber: event.target.cylindernumber.value,
     naot: event.target.naot.value,
     seatsnumber: event.target.seatsnumber.value,
     cargo: event.target.cargo.value,
     years: event.target.years.value,
     details: event.target.details.value
    })
})
.then(res=> res.json())
.then((result)=>
{
    //alert(result);
    this.setState({snackbaropen:true, snackbarmsg:result});
},
(error)=>{
  //alert('Failed')
  this.setState({snackbaropen:true, snackbarmsg:'failed'});
}
)
}


render()
{
    return(
       <div className="container">
<Snackbar
anchorOrigin={{vertical:'center',horizontal:'center'}}
open= {this.state.snackbaropen}
autoHideDuration ={3000}
onClose ={this.snackbarClose}

message ={<span id="message-id">{this.state.snackbarmsg} </span>}
action={[
    <IconButton
    
    key="close"
    arial-label="Close"
    color="inherit"
    onClick={this.snackbarClose}
    > x

    </IconButton>]} 
    />
       
       
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Edit Car
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
       <Row>
           <Col sm={6}>
              <Form onSubmit={this.handleSubmit} >

            
           
              <Form.Group controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                disabled
                defaultValue={this.props.carid}
                placeholder="ID"
               />
              </Form.Group>
     
     
     
         <Form.Group controlId="modelName">
             <Form.Label>Model Name</Form.Label>
             <Form.Control
                 type="text"
                 name="modelName"
                 
                 defaultValue={this.props.carname}
                 placeholder="Model Name"
                 
             />
           </Form.Group>


         <Form.Group controlId="fueltype">
             <Form.Label>Fuel Type</Form.Label>
             <Form.Control
                 type="text"
                 name="fueltype"
                 
                 defaultValue={this.props.carfuel}
                 placeholder="Fuel Type"
             />
             </Form.Group>
         
             <Form.Group controlId="bodytype">
             <Form.Label>Body Type</Form.Label>
             <Form.Control
                 type="text"
                 name="bodytype"
                 
                 defaultValue={this.props.carbody}
                 placeholder="Bodytype"
             />
             </Form.Group>
             
             <Form.Group controlId="priceinterval">
             <Form.Label>Price Interval</Form.Label>
             <Form.Control
                 type="text"
                 name="priceinterval"
                 
                 defaultValue={this.props.carprice}
                 placeholder="Price Interval"
             />
             </Form.Group>
             <Form.Group controlId="offroadrank">
             <Form.Label>Offroad Rank</Form.Label>
             <Form.Control
                 type="text"
                 name="offroadrank"
                 
                 defaultValue={this.props.caroffroad}
                 placeholder="Offroad Rank"
             />
             </Form.Group>

             <Form.Group controlId="maximumspeedinterval">
             <Form.Label>Maximum speed interval</Form.Label>
             <Form.Control
                 type="text"
                 name="maximumspeedinterval"
                 
                 defaultValue={this.props.carspeed}
                 placeholder="Maximum speed interval"
             />
             </Form.Group>
             <Form.Group controlId="luxuryrank">
             <Form.Label>Luxury rank</Form.Label>
             <Form.Control
                 type="text"
                 name="luxuryrank"
                 
                 defaultValue={this.props.carluxury}
                 placeholder="Luxury rank"
             />
             </Form.Group>
             <Form.Group controlId="reliabilityrank">
             <Form.Label>Reliability rank</Form.Label>
             <Form.Control
                 type="text"
                 name="reliaiblityrank"
                 
                 defaultValue={this.props.carreliability}
                 placeholder="Reliability rank"
             />
             </Form.Group>
             <Form.Group controlId="safetyrank">
             <Form.Label>Safety rank</Form.Label>
             <Form.Control
                 type="text"
                 name="safetyrank"
                 
                 defaultValue={this.props.carsafety}
                 placeholder="Safety rank"
             />
             </Form.Group>
             <Form.Group controlId="practicalityrank">
             <Form.Label>Practicality rank</Form.Label>
             <Form.Control
                 type="text"
                 name="practicalityrank"
                 
                 defaultValue={this.props.carpracticality}
                 placeholder="Practicality rank"
             />
             </Form.Group>
             <Form.Group controlId="driverank">
             <Form.Label>Drive Rank</Form.Label>
             <Form.Control
                 type="text"
                 name="driverank"
                 
                 defaultValue={this.props.cardrive}
                 placeholder="Drive Rank"
             />
             </Form.Group>
             <Form.Group controlId="interiorrank">
             <Form.Label>Interior rank</Form.Label>
             <Form.Control
                 type="text"
                 name="interiorrank"
                 
                 defaultValue={this.props.carinterior}
                 placeholder="Interior rank"
             />
             </Form.Group>
             <Form.Group controlId="forcity">
             <Form.Label>Good for city traffic?</Form.Label>
             <Form.Control
                 type="text"
                 name="forcity"
                 
                 defaultValue={this.props.carcity}
                 placeholder="Yes or No?"
             />
             </Form.Group>
             <Form.Group controlId="forlong">
             <Form.Label>Good for long distance?</Form.Label>
             <Form.Control
                 type="text"
                 name="forlong"
                 
                 defaultValue={this.props.cardistance}
                 placeholder="Yes or No?"
             />
             </Form.Group>
             <Form.Group controlId="consumption">
             <Form.Label>Consumption</Form.Label>
             <Form.Control
                 type="text"
                 name="consumption"
                 
                 defaultValue={this.props.carconsumption}
                 placeholder="Consumption"
             />
             </Form.Group>
             <Form.Group controlId="electricconsumption">
             <Form.Label>Electric consumption</Form.Label>
             <Form.Control
                 type="text"
                 name="electricconsumption"
                 
                 defaultValue={this.props.careconsumption}
                 placeholder="Electric consumption"
             />
             </Form.Group>
             <Form.Group controlId="enginetype">
             <Form.Label>Engine Type</Form.Label>
             <Form.Control
                 type="text"
                 name="enginetype"
                 
                 defaultValue={this.props.carengine}
                 placeholder="Engine Type"
             />
             </Form.Group>
             <Form.Group controlId="cylindernumber">
             <Form.Label>Cylinder number</Form.Label>
             <Form.Control
                 type="text"
                 name="cylindernumber"
                 
                 defaultValue={this.props.carcylinder}
                 placeholder="Cylinder number"
             />
             </Form.Group>
             <Form.Group controlId="naot">
             <Form.Label>Naturally Aspired or Turbo?</Form.Label>
             <Form.Control
                 type="text"
                 name="naot"
                 
                 defaultValue={this.props.carnaot}
                 placeholder="Naturally Aspired or Turbo?"
             />
             </Form.Group>
             <Form.Group controlId="seatsnumber">
             <Form.Label>Number of Seats</Form.Label>
             <Form.Control
                 type="text"
                 name="seatsnumber"
                 
                 defaultValue={this.props.carseats}
                 placeholder="Number of seats"
             />
             </Form.Group>
             <Form.Group controlId="cargo">
             <Form.Label>Cargo</Form.Label>
             <Form.Control
                 type="text"
                 name="cargo"
                 
                 defaultValue={this.props.carcargo}
                 placeholder="Cargo"
             />
             </Form.Group>


             <Form.Group controlId="years">
             <Form.Label>Years</Form.Label>
             <Form.Control
                 type="text"
                 name="years"
                 
                 defaultValue={this.props.caryears}
                 placeholder="Years"
             />
             </Form.Group>

             <Form.Group controlId="details">
             <Form.Label>More details</Form.Label>
             <Form.Control
                 type="text"
                 name="details"
                 
                 defaultValue={this.props.cardetails}
                 placeholder="Details"
             />
             </Form.Group>
            
         
         
         <Form.Group>
             <Button variant="primary" type="submit">
                 Update Car
             </Button>
         </Form.Group>
         </Form>
           </Col>
       </Row>
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    );
}


}