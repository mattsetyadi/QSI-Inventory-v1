import React from 'react';
// import { Card, Button, Row, Col, Pagination } from 'antd';

import ModalSupplierContainer from '../Container/ModalSupplierContainer';
import MTable from '../../../Assets/Components/CMTable';

const SupplierComponent = (props) => {
  const {
    listData,
    handleAddSupplier,
    // totalPage,
    columns,
    // currentPage,
    // sizePerPage,
    // handlePageClick,
    handleUpdateSupplier,
    isLoading,
  } = props;

  const suppliers = listData.data;
  return (
    <>
      <ModalSupplierContainer {...props} />
      <MTable
        data={suppliers}
        columns={columns}
        handleAdd={handleAddSupplier}
        handleUpdate={handleUpdateSupplier}
        isLoading={isLoading}
      />
      {/* <Row>
        <Col>
          <Pagination
            defaultCurrent={currentPage}
            onChange={handlePageClick}
            size='small'
            total={totalPage && sizePerPage ? totalPage * sizePerPage : 2}
            pageSize={sizePerPage}
            showSizeChanger={true}
          />
        </Col>
      </Row> */}
    </>
  );
};

export default SupplierComponent;
