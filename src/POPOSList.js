import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

export default function POPOSList() {
    return (
        <div className="POPOSList">
            <POPOSSpace name="10-california-st" address="10-california-st" image="10-california-st.jfif"/>
            <POPOSSpace name="12-california-st" address="12-california-st" image="12-california-st.jfif" />
            <POPOSSpace name="50-california-st" address="50-california-st" image="50-california-st.jfif" />
            <POPOSSpace name="60-california-st" address="60-california-st" image="60-california-st.jfif" />
            <POPOSSpace name="70-california-st" address="70-california-st" image="70-california-st.jfif" />
            <POPOSSpace name="80-california-st" address="80-california-st" image="80-california-st.jfif" />
        </div>
    )
}
