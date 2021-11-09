import React from 'react';
import {Menu, Layout} from "antd";
import "./index.css"

const {Header} = Layout

const Headering = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                {new Array(3).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                })}

            </Menu>
        </Header>
    );
};

export default Headering;
