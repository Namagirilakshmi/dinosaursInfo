import React from 'react';

import MenuComponent from './menu.jsx';
import DetailsWrapperComponent from './detailswrapper.jsx';

 let data=null;
 let src;

export default class MainContentComponent extends React.Component {
	 
	 componentWillMount(){
        this.fetchData('../../assets/data/data.json');
        this.initial();
    }

    initial(){
        src=this;
        this.setState({
        data:{},
        event:0
        });
    }

    assign(data){
        this.setState({
        	data:data
        })
    }


	 fetchData(URL){
    	 let t=this;
            $.ajax({
                type:"GET",
                dataType:"json",
                url:URL,
                success:function(response) {
                    t.assign(response);
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
    }

    eventassign(i){
    	this.setState({
    		event:i
    	});
    }

    eventcallback(i){
        src.eventassign(i);
    }


   render() {
      return (
         	<section class="content-wrapper row">
         		<MenuComponent data={this.state.data} event={this.eventcallback}></MenuComponent>
         		<DetailsWrapperComponent data={this.state.data} event={this.state.event}></DetailsWrapperComponent>
         	</section>
      );
   }
}