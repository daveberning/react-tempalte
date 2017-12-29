import React, { Component } from 'react';
import SVGMap from '@/assets/austin-plat-map.svg';
import styles from '@/components/interactivePlatMap/styles/InteractivePlatMap.scss';

class InteractivePlatMap extends Component {
  render() {
    return (
      <div>
        <div className="container is-fluid is-0">
          <div className="columns has-top-bottom-gap">
            <img className={styles.plat} src={SVGMap} alt="Plat Map for Austin, TX"/>
          </div>
        </div>
      </div>
    );
  }
}

export default InteractivePlatMap;