import React,{Component} from 'react';
import {Table} from'react-bootstrap';
import {Button,ButtonToolbar} from'react-bootstrap';
import {AddCarModal} from './AddCarModal';
import {EditCarModal} from './EditCarModal';

export class CarManager extends Component
{
   
   constructor(props){
       super(props);
       this.state={carsm:[] ,addModalShow : false,editModalShow :false}
   }
   componentDidMount()
   {
       this.refreshList();
   }
   refreshList()
   {
       
    fetch('https://localhost:44354/api/car')
       .then(response => response.json())
       .then(data=> {
           this.setState({carsm:data});
       })
        };
      
        deleteCar(carid) {
            if (window.confirm('Are you sure?')) {
                fetch('https://localhost:44354/api/car/' + carid, {
                    method: 'DELETE',
                    header: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            }
        }
   
    render() {

        const{carsm,carid,carname,carfuel,carbody,carprice,caroffroad,carspeed,carluxury,carreliability,carsafety,carpracticality,cardrive,carinterior,carcity,cardistance,
       carconsumption,careconsumption,carengine,carcylinder,carnaot,carseats,carcargo,caryears,cardetails }=this.state;
        let addModalClose=()=> this.setState({addModalShow:false});
        let editModalClose=()=> this.setState({editModalShow:false});
    return(
        <div>
            <h1>Car Management</h1>
    <Table className="mt-4" striped bordered hover size="sm">
<thead>
    <tr>
<th>id</th>
<th>Model Name</th>
<th>Fuel type</th>
<th>Body type </th>
<th>Price interval</th>
<th>Offroad rank</th>
<th>Acceleration</th>
<th>Luxury Rank</th>
<th>Reliability Rank</th>
<th>Safety rank</th>
<th>Practicality rank</th>
<th>Drive Rank</th>
<th>Interior rank</th>
<th>Good for city traffic?</th>
<th>Good for long distance?</th>
<th>Consumption</th>
<th>Electric Consumption</th>
<th>Engine Type</th>
<th>Cylinder number</th>
<th>Naturally aspired or Turbo?</th>
<th>Seats number</th>
<th>Cargo Space</th>
<th>Best Years for the model</th>
<th>More Details</th>

<th>Option</th>

 </tr>
</thead>
<tbody>
{carsm.map(cr=>
    <tr key={cr.id }  >
        <td>{cr.id } </td>
    <td> {cr.modelName }  </td>
    <td> {cr.fueltype }  </td>
    <td> {cr.bodytype}  </td>
    <td> {cr.priceinterval }  </td>
    <td> {cr.offroadrank }  </td>
    <td> {cr.maximumspeedinterval }  </td>
    <td> {cr.luxuryrank }  </td>
    <td> {cr.reliabilityrank }  </td>
    <td> {cr.safetyrank }  </td>
    <td> {cr.practicalityrank}  </td>
    <td> {cr.driverank }  </td>
    <td> {cr.interiorrank }  </td>
    <td> {cr.forcity }  </td>
    <td> {cr.forlong }  </td>
    <td> {cr.consumption }  </td>
    <td> {cr.electricconsumption}  </td>
    <td> {cr.enginetype }  </td>
    <td> {cr.cylindernumber }  </td>
    <td> {cr.naot }  </td>
    <td> {cr.seatsnumber }  </td>
    <td> {cr.cargo }  </td>
    <td> {cr.years }  </td>
    <td> {cr.details }  </td>

    <td>
        <ButtonToolbar>
            <Button 
           className="mr-2" variant ="info"
           onClick={()=> this.setState({editModalShow : true  , 
            carid:cr.id,
            carname:cr.modelName,
            carfuel:cr.fueltype,
            carbody:cr.bodytype,
            carprice:cr.priceinterval,
            caroffroad:cr.offroadrank,
            carspeed:cr.maximumspeedinterval, 
            carluxury:cr.luxuryrank,
            carreliability:cr.reliabilityrank,
            carsafety:cr.safetyrank,
            carpracticality:cr.practicalityrank,
            cardrive:cr.driverank,
            carinterior:cr.interiorrank,
            carcity:cr.forcity,
            cardistance:cr.forlong,
            carconsumption:cr.consumption,
            careconsumption:cr.electricconsumption,
            carengine:cr.enginetype,
            carcylinder:cr.cylindernumber,
            carnaot:cr.naot,
            carseats:cr.seatsnumber,
            carcargo:cr.cargo,
             caryears:cr.years,
             cardetails:cr.details
        })}
           >Edit 
           </Button>
           <Button className="mr-2" 
onClick={()=> this.deleteCar(cr.id)} 
variant="danger"
>Delete</Button>
        </ButtonToolbar>
        <EditCarModal
        show ={this.state.editModalShow}
        onHide={editModalClose}
        carid={carid}
        carname={carname}
        carfuel={carfuel}
        carbody={carbody}
        carprice={carprice}
        caroffroad={caroffroad}
        carspeed={carspeed}
        carluxury={carluxury}
        carreliability={carreliability}
        carsafety={carsafety}
        carpracticality={carpracticality}
        cardrive={cardrive}
        carinterior={carinterior}
        carcity={carcity}
        cardistance={cardistance}
        carconsumption={carconsumption}
        careconsumption={careconsumption}
        carengine={carengine}
        carcylinder={carcylinder}
        carnaot={carnaot}
        carseats={carseats}
        carcargo={carcargo}
        caryears={caryears}
        cardetails={cardetails}
     
/>
    </td>
    </tr>

   
    )}
        </tbody>
 </Table>
 <ButtonToolbar>
     <Button
     variant='primary'
     onClick={()=> this.setState({addModalShow: true})}
     >Add Car </Button>

     <AddCarModal
         show={this.state.addModalShow}
         onHide={addModalClose}
     />
 </ButtonToolbar>
 </div>

    )
    }
}
