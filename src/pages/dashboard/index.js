import React, {Component} from 'react';
import { Button, Tooltip, Layout, Menu, Breadcrumb } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom";
import Headering from "../../component/headering";
import Footering from "../../component/footering";

const { Content } = Layout;

class Dashboard extends Component {

    render() {
        return (
            <Layout className="layout">
                <Headering/>

                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Tooltip title="search">
                            <Link to={"/login"}>
                                 <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                             </Link>
                        </Tooltip>
                    </div>
                </Content>

                <Footering/>
            </Layout>
        );
    }
}

export default Dashboard