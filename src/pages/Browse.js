import React from 'react';
import {default as useContent} from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';
import { BrowseContainer } from '../containers/browse';

export default function Browse()
{
   const {series}= useContent('series');
   const {films}= useContent('films');
   
   // console.log('the series are: ',series);
   // console.log('the films are: ',films);
   //we need slides
   const slides= selectionFilter({series, films})
   return <BrowseContainer slides={slides} />
}