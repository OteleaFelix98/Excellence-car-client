import React, { Component } from 'react';
import ReactTable from "react-table-6";
export  class Car extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cars: [],
			carsFiltered: []
			
		}
	}

	componentDidMount() {
		this.refreshList();
	}

	refreshList() {

		fetch('https://localhost:44354/api/car')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ cars: data });
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

	search = (searchString) => {
		const search = (searchString.target.value).toLowerCase();

		let filterData = this.state.cars.filter(value => {
			return (
				value.modelName.toLowerCase().includes(search) ||
				value.fueltype.toLowerCase().includes(search)||
				value.bodytype.toLowerCase().includes(search) ||
				value.priceinterval.toLowerCase().includes(search)||
				value.offroadrank.toLowerCase().includes(search) ||
				value.maximumspeedinterval.toLowerCase().includes(search)||
				value.luxuryrank.toLowerCase().includes(search) ||
				value.reliabilityrank.toLowerCase().includes(search)||
				value.safetyrank.toLowerCase().includes(search) ||
				value.practicalityrank.toLowerCase().includes(search)||
				value.driverank.toLowerCase().includes(search) ||
				value.interiorrank.toLowerCase().includes(search)||
				value.forcity.toLowerCase().includes(search) ||
				value.forlong.toLowerCase().includes(search)||
				value.consumption.toLowerCase().includes(search) ||
				value.electricconsumption.toLowerCase().includes(search)||
				value.enginetype.toLowerCase().includes(search) ||
				value.cylindernumber.toLowerCase().includes(search)||
				value.naot.toLowerCase().includes(search) ||
				value.seatsnumber.toLowerCase().includes(search)||
				value.cargo.toLowerCase().includes(search) 	
				
				
			
			);
		})

		this.setState({ carsFiltered: filterData });

	}
	render() {
		const columns = [
			{
				Header: 'Model Name',
				accessor: 'modelName',
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Fuel type',
				accessor: 'fueltype'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Bodytype',
				accessor: 'bodytype'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Price ',
				accessor: 'priceinterval'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Offroad ',
				accessor: 'offroadrank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Acceleration',
				accessor: 'maximumspeedinterval'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Luxury',
				accessor: 'luxuryrank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Reliability',
				accessor: 'reliabilityrank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Safety',
				accessor: 'safetyrank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Practicality',
				accessor: 'practicalityrank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Drive',
				accessor: 'driverank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Interior',
				accessor: 'interiorrank'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Good for city',
				accessor: 'forcity'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Good for long distance',
				accessor: 'forlong'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Consumption',
				accessor: 'consumption'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Autonomy(electric cars only)',
				accessor: 'electricconsumption'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Engine ',
				accessor: 'enginetype'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Number of cylinders',
				accessor: 'cylindernumber'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Naturally aspired or turbo?',
				accessor: 'naot'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Number of seats',
				accessor: 'seatsnumber'
				,
				style: { 'whiteSpace': 'unset' } 
			},
			{
				Header: 'Cargo Space',
				accessor: 'cargo',
				
			},
			{
				Header: 'Years',
				accessor: 'years',
				style: { 'whiteSpace': 'unset' } 
				
			},
			{
				Header: 'More details',
				accessor: 'details',
				style: { 'whiteSpace': 'unset' } 
				
			}
		
		
		
			
		]

		const { cars, carsFiltered } = this.state;	
		return (
			<div className="container-fluid">
	  <label for="name">Search:</label>
    <input onChange={this.search}></input>
				<ReactTable data={carsFiltered && carsFiltered.length ? carsFiltered : cars}
					columns={columns}
				/>
			</div>
			
		)
	}
}
