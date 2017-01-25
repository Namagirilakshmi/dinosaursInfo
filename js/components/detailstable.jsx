import React from 'react';
import MenuComponent from './menu.jsx';

let x=0;
let e=-1;

export default class DetailsComponent extends React.Component {


    componentWillMount(){
       this.initial(); 
    }

  

    verify(){
    	let a=jQuery.isEmptyObject(this.props.data);
    	let g=this.props.event;
    	if(e==g){
    		x=1;
    	}
    	else{
    	x=0;
    	}
    	if(a===false && x===0){
    		this.getData(this.props.event);
    		e=this.props.event;
    	}
    }

    initial(){
	    this.setState({
	    		name:"",
		        appeared:"",
		        height:"",
		        length:"",
		        order:"",
		        vanished:"",
		        weight:"",
		        src:""
	    });
    }

getData(param){   
    var t=this;
   	let datakeys=Object.keys(this.props.data);
     datakeys.map(function(key,i){
	            if(param==i){	           
	            	t.setState({
	            		name:key,
	            		appeared:t.props.data[key].appeared,
	            		height:t.props.data[key].height,
	            		length:t.props.data[key].length,
	            		order:t.props.data[key].order,
	            		vanished:t.props.data[key].vanished,
	            		weight:t.props.data[key].weight,
	            		imgsrc:t.props.data[key].src
	            	});
	            }
	    });          
    }


    displayData(){ 
    	this.verify();
    	 return(
    	<table class="centered bordered col l6 m12 s12">
					<tbody >
						<tr>
					        <td>Name </td>
					        <td>{this.state.name}</td>					         
					    </tr>
					    <tr>
					    	<td>Appeared </td>
					        <td>{this.state.appeared}</td>					         
					    </tr>
					    <tr>
					        <td>Height </td>
					        <td>{this.state.height}</td>					         
					    </tr>
					    <tr>
					        <td>Length </td>
					        <td>{this.state.length}</td>					         
					    </tr>
					    <tr>
					        <td>Order </td>
					        <td>{this.state.order}</td>					         
					    </tr>
					    <tr>
					        <td>Vanished </td>
					        <td>{this.state.vanished}</td>					         
					    </tr>
					    <tr>
					        <td>Weight </td>
					        <td>{this.state.weight}</td>					         
					    </tr>					    					      
					</tbody>
				</table>
    );

    }


   render() {
      return (
         	<section class=" body-content col l12 m12 s12 center">
         		<section class="body-image col l6 m12 s12">
         		<img src={this.state.imgsrc}/>
         		</section>
				{this.displayData()}
				<section class="clear"></section>		
			</section>
      );
   }
}