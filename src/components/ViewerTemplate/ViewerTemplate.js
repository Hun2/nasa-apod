import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewer, spaceNavigator }) => {
  return (
    <div className={cx('viewer-template')}>
      <header>
        Astronomy Picture of the Day
      </header>
      <div className={cx('viewer-wrapper')}>
        {viewer}
        {/* SpaceNavigator를 viewer-wrapper 크기에 기반하여 설정하기 위해 내부에 코드 작성 */}
        <div className={cx('space-navigator-wrapper')}>
          {spaceNavigator}
        </div>
      </div>
    </div>
  );
};

export default ViewerTemplate;