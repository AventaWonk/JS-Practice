import React, { Component } from 'react';

export default class NPV extends Component {
	constructor(props) {
		super(props);
		this.handleExpensesTextInputChange = this.handleExpensesTextInputChange.bind(this);
		this.handleEnergyExpensesTextInputChange = this.handleEnergyExpensesTextInputChange.bind(this);
		this.handleMaterialsExpensesTextInputChange = this.handleMaterialsExpensesTextInputChange.bind(this);
		this.handleInstantExpensesTextInputChange = this.handleInstantExpensesTextInputChange.bind(this);
		this.handlePlannedIncomeTextInputChange = this.handlePlannedIncomeTextInputChange.bind(this);
		this.handleProfitabilityTextInputChange = this.handleProfitabilityTextInputChange.bind(this);
		this.handleRisksTextInputChange = this.handleRisksTextInputChange.bind(this);
		this.handleInflationTextInputChange = this.handleInflationTextInputChange.bind(this);
		this.handleYearTextInputChange = this.handleYearTextInputChange.bind(this);
		this.handleCompletitionTextInputChange = this.handleCompletitionTextInputChange.bind(this);
		this.state = {workExp: 0, energyExp: 0, materialExp: 0, years: 4, completition: 2, income: 100, instantCosts: 0, profitability: 20, risks: 2, inflation: 2  };
	}
	
	handleExpensesTextInputChange(e) {
		this.setState({workExp: e.target.value});
	}
	handleEnergyExpensesTextInputChange(e) {
		this.setState({energyExp: e.target.value});
	}
	handleMaterialsExpensesTextInputChange(e) {
		this.setState({materialExp: e.target.value});
	}
	handleInstantExpensesTextInputChange(e) {
		this.setState({instantCosts: e.target.value});
	}
	handlePlannedIncomeTextInputChange(e) {
		this.setState({income: e.target.value});
	}

	handleProfitabilityTextInputChange(e) {
		this.setState({profitability: e.target.value});
	}
	handleRisksTextInputChange(e) {
		this.setState({risks: e.target.value});
	}
	handleInflationTextInputChange(e) {
		this.setState({inflation: e.target.value});
	}

	handleYearTextInputChange(e) {
		this.setState({years: e.target.value});
	}
	handleCompletitionTextInputChange(e) {
		this.setState({completition: e.target.value});
	}

	render() {
		let sum = new Number(this.state.workExp)  + new Number(this.state.energyExp) + new Number(this.state.materialExp) + new Number(this.state.instantCosts);
		let discont = new Number(this.state.profitability)  + new Number(this.state.risks) + new Number(this.state.inflation);
		let thead = [];
		let income = [];
		let ph = [];
		let b = [];
		let instantCosts = [];
		let npv;

		let incomeSum = 0;
		let instantCostsSum = 0;
		let phSum = 0;
		let bSum = 0;

		for(let i = 0; i<this.state.years; i++) {
			let income2;
			let instantCosts2;
			let ph2;
			let b2;

			thead.push(<th>{i+1} год</th>);
			if(i < this.state.completition - 1) {
				income2 = this.state.income / this.state.completition;
				instantCosts2 = (sum - this.state.instantCosts) / this.state.completition;
			} else {
				income2 = this.state.income / 1;
				instantCosts2 = sum - this.state.instantCosts;
			}
			ph2 = income2 - instantCosts2;
			console.log(Math.pow((1 + (discont / 100)), i));
			b2 = (ph2 / Math.pow((1 + (discont / 100)), i)).toFixed(2);	

			incomeSum += income2;
			instantCostsSum += instantCosts2;
			phSum += ph2;
			bSum += new Number(b2);

			income.push(<td>{income2}</td>);
			instantCosts.push(<td>{instantCosts2}</td>);
			ph.push(<td>{ph2}</td>);
			b.push(<td>{b2}</td>);
		}
		income.push(<td>{incomeSum}</td>);
		instantCosts.push(<td>{instantCostsSum}</td>);
		ph.push(<td>{phSum}</td>);
		b.push(<td>{bSum.toFixed(2)}</td>);
		npv = (bSum.toFixed(2) - this.state.instantCosts).toFixed(2);

		return (
			<div>
				<div className="col-md-2">
					<div className="form-group">
				    <label >Затраты труда</label>
				    <input type="email" className="form-control" onChange={this.handleExpensesTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Затраты э/энергии</label>
				    <input type="email" className="form-control" onChange={this.handleEnergyExpensesTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Затраты материалов</label>
				    <input type="email" className="form-control" onChange={this.handleMaterialsExpensesTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Единовременные</label>
				    <input type="email" className="form-control" onChange={this.handleInstantExpensesTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Планируемый доход</label>
				    <input type="email" className="form-control" onChange={this.handlePlannedIncomeTextInputChange} />
				  </div>
				</div>
				<div className="col-md-2">
					<div className="form-group">
				    <label >Доходность, %</label>
				    <input type="email" className="form-control" onChange={this.handleProfitabilityTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Риски, %</label>
				    <input type="email" className="form-control" onChange={this.handleRisksTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Годовая инфляция, %</label>
				    <input type="email" className="form-control" onChange={this.handleInflationTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Длительность, лет</label>
				    <input type="email" className="form-control" onChange={this.handleYearTextInputChange} />
				  </div>
				  <div className="form-group">
				    <label >Выход на 100%, лет</label>
				    <input type="email" className="form-control" onChange={this.handleCompletitionTextInputChange} />
				  </div>
				</div>

				<div className="col-md-8">
					<table className="table">  
						<thead> 
							<tr> <th>Показатели</th> {thead} <th>Итого</th></tr>
						</thead> 
						<tbody> 
							<tr> <th scope="row">Доход</th> {income} </tr>
							<tr> <th scope="row">Единовременные затраты</th> <td> {this.state.instantCosts} </td></tr>
							<tr> <th scope="row">Текущие затраты</th> {instantCosts}</tr>
							<tr> <th scope="row">Pn</th> {ph}</tr>
							<tr> <th scope="row">B</th> {b}</tr>
							<tr> <th scope="row">ЧТС</th> <td>{npv}</td></tr>
						</tbody> 
					</table>
				</div>
			</div>
		);
	}
}
