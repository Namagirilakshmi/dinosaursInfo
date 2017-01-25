import React from 'react';
import DetailsComponent from './detailstable.jsx';



export default class MenuComponent extends React.Component {

componentDidMount(){
	 $(".button-collapse").sideNav();
}

	displayData(){
		var t=this;
		let datakeys=Object.keys(this.props.data);
		let listItem=datakeys.map(function(key,j){
			 return (<li class="collection-item" key={j} onClick={()=>t.populate(j)}>{key}</li>);
			});
			return listItem;
	}

	populate(i){
		this.exit();
		this.props.event(i);
	}

	exit(){
		$('.button-collapse').sideNav('hide');		
	}

	

   render() {
      return (
         	<section>
         		<aside class="col m3 hide-on-small-only">
					<ul class="collection with-header center">
					<li class="collection-header"><h4>Species Name</h4>					
					</li>	
				      		{this.displayData()}      
				    </ul>
			</aside>
			<aside class="hide-on-med-and-up">
					<ul id="slide-out" class="side-nav collection with-header center">
						<li class="collection-header"><h4>Species Name <i class="material-icons" onClick={this.exit}>close</i></h4></li>
				     	{this.displayData()}
					</ul>
					<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
				</aside>
         	</section>
      );
   }
}