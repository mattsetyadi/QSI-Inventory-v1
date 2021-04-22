import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

import inventoryImg from '../../../Assets/Images/warehouse-worker-checking-inventory_3446-395.jpeg';
import supplierImg from '../../../Assets/Images/man-carries-cardboard-box_1441-29.jpeg';

const { Title } = Typography;
const { Meta } = Card;
const DashboardComponent = () => {
  return (
    <div>
      <Title style={{ marginTop: 30, marginBottom: 20, textAlign: 'center' }}>
        Welcome to Inventory Dashboard
      </Title>
      <Row md={20} lg={20} style={{ marginTop: '30px' }}>
        <Col>
          <Link to="/inventory">
            <Card
              style={{ width: 355, marginRight: 20, marginLeft: 20 }}
              cover={<img alt="invnetory" src={inventoryImg} />}
            >
              <Meta
                title="Inventory"
                description="Check out inventory page now"
              />
            </Card>
          </Link>
        </Col>
         
        <Col>
          <Link to="/supplier">
            <Card
              style={{ width: 300, marginRight: 20, marginLeft: 20 }}
              cover={<img alt="example" src={supplierImg} />}
            >
              <Meta
                title="Supplier"
                description="See more about our Supplier"
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardComponent;
