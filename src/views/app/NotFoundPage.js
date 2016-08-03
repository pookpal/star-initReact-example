/**
 * Created by lijie on 16/7/22.
 */
/**
 * Created by lijie on 16/7/6.
 */

import React, { Component } from 'react';

import { Link} from 'react-router';

import { Button } from 'antd';

import styles from './NotFound.less';

const NotFoundPage = () => {
    return (
        <div className={styles.normal}>
            <div className={styles.container}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.desc}>未找到该页面</p>
                <Link to='/app'> <Button type="primary" style={{ marginTop: 5 }}>返回首页</Button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
