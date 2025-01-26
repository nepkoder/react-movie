import React from 'react';
import './loadmore.css'
const LoadMore = (props) => {
    return (<div className='load-more'>
    <button onClick={props.onLoadMoreClick}>Load More</button>
    </div>
);
};

export default LoadMore;