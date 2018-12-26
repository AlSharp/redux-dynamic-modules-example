import React from 'react';
import Card from './component/colorized-card';
import getColorizedCardModule from './redux/colorized-card-module';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

const ColorizedCard = ({ id }) => 
  <DynamicModuleLoader
    modules={[getColorizedCardModule(id)]}
  >
    <Card id={id}/>
  </DynamicModuleLoader>

export default ColorizedCard;