import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
import { ChasingDots } from 'better-react-spinkit';

const cx = classNames.bind(styles);

const Viewer = ({ mediaType, url, loading, date }) => {

  if(loading) {
    // 로딩중일때 로더 보여주기
    return <div className={cx('viewer')}><ChasingDots /></div>
  }

  if(!url) return null;

  return (
    <div className={cx('viewer')}>
      <div className={cx('date')}>
        <h3>{date}</h3>
      </div>
      {
        mediaType === 'image' ? (
          <img onClick={() => window.open(url)} src={url} alt="space" />
        ) : (
          <iframe title="space-video" src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        )
      }
    </div>
  );
};

export default Viewer;