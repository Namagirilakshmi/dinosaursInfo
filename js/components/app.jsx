import React from 'react';

import HeaderComponent from './header.jsx';
import MainContentComponent from './maincontent.jsx';
import FooterComponent from './footer.jsx';


export default class AppComponent extends React.Component {
   render() {
      return (
         	<section class="main-wrapper">
         		<HeaderComponent></HeaderComponent>
         		<MainContentComponent></MainContentComponent>
         		<FooterComponent></FooterComponent>
         	</section>
      );
   }
}