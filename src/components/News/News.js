import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component{

	constructor(props){
		super(props);
		this.state = {
			news: [],
		};
	}

	componentDidMount(){
		const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-19&sortBy=publishedAt&apiKey=6835bf4d60e84905a8009886c1b15b84"
		const url2 = "http://www.mshire.com:5000/books"
		const url3 = "https://localhost:5001/api/candidate/getallWithoutFeedBack";
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
		fetch(url2)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data)
				this.setState({
					news : data.books
				})
			})
			.catch((error) => console.log(error));
	}

	renderItems() {

		return this.state.news.map((item) => (
			<NewSingle key={item.url} item = {item} />
			));
	}

	render(){
		return (
			
			<div className="row">
				<div className="col s12"> </div>
				<div className="col s1 z-depth-2 blue-grey lighten-4" > NAME </div>
				<div className="col s2 blue-grey lighten-1" > EMAIL-ID </div>
				<div className="col s1 blue-grey lighten-4" > PHONE </div>
				<div className="col s1 blue-grey lighten-1" > DEGREE </div>
				<div className="col s1 blue-grey lighten-4" > UNIVERSITY </div>
				<div className="col s1 blue-grey lighten-1" >COMPANY </div>
				<div className="col s1 blue-grey lighten-4" > EXPERIENCE </div>
				<div className="col s1 blue-grey lighten-1" > START TIME </div>
				<div className="col s1 blue-grey lighten-4" > STATE </div>
				<div className="col s1 blue-grey lighten-1" > RESUME </div>
				<div className="col s1 blue-grey lighten-4" > EVENT-ID</div>
				<div className="col s12"> </div>
				{this.renderItems()}
			</div>
		);
	}
}

export default News;