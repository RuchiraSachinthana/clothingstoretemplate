import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import RangeSlider from 'Components/RangeSlider/RangeSlider';
import clsx from 'clsx';


const CatalogFilterPrice = () => {
  const classes = useStyles();
  const [valueMin, setValueMin] = useState(50);
  const [valueMax, setValueMax] = useState(1500);

  const handleChange = (value) => {
    setValueMin(value[0])
    setValueMax(value[1])
  }
  const min = 50;//minimum value of price
  const max = 1500;//maximum value of price

  return (
    <div className='mt-2 mb-3'>
      <h3 className={classes.title}>Choose Price</h3>
      <div className='mt-2'>
        <RangeSlider
          min={min}
          max={max}
          valueMax={valueMax}
          valueMin={valueMin}
          handleChange={handleChange} />
      </div>
      <div className={clsx(classes.prices, {
        'd-flex mt-2': true
      })}>
        <p>{valueMin}<span>USD</span></p>
        <p className='ml-auto'>{valueMax}<span>USD</span></p>
      </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({

  title: {
    color: theme.colors.darkGrey,
    fontWeight: 600,
  },
  prices: {
    '& p': {
      fontSize: 20,
    }
  }
}));

export default CatalogFilterPrice;