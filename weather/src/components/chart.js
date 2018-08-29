/**
 * Created by karan on 23/08/2018.
 */
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';


function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
    return(
      <div>
          <Sparklines height={100} width={180} data={props.data}>
              <SparklinesLine color={props.color}/>
              <SparklinesReferenceLine type="avg"/>
          </Sparklines>
          <div>{average(props.data)}</div>
      </div>
    );

}