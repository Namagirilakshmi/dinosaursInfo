import React from 'react';

import DetailsComponent from './detailstable.jsx';


export default class DetailsWrapperComponent extends React.Component {

   render() {
      return (
         	<section class="col m9 s12 center">
				<h5 class="center head-text">Dinosaurs Facts</h5>
				<DetailsComponent data={this.props.data} event={this.props.event}></DetailsComponent>				
			</section>
      );
   }
}