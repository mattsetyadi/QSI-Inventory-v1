import React from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  RestOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const TemplateComponent = (props) => {
  const { children, handleToggleSider, siderIsOpen } = props;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={siderIsOpen} onCollapse={handleToggleSider}>
        <div className='logo'>CMS</div>
        <Menu theme='dark' defaultSelectedKeys={['dashboard']} mode='inline'>
          <Menu.Item key='dashboard' icon={<PieChartOutlined />}>
            <Link to='/'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='supplier' icon={<SolutionOutlined />}>
            <Link to='/supplier'>Supplier</Link>
          </Menu.Item>
          <Menu.Item key='inventory' icon={<RestOutlined />}>
            <Link to='/inventory'>Inventory</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2021 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default TemplateComponent;
