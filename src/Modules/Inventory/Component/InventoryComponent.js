import React from 'react';

import ModalInventoryContainer from '../Container/ModalInventoryContainer';
import MTable from '../../../Assets/Components/CMTable';
// import { Row, Col, Pagination } from 'antd';

export default function InventoryComponent(props) {
  const {
    datas,
    handleAddInventory,
    handleUpdateInventory,
    // handleDetailInvetory,
    columns,
    isLoading,
    // totalPage,
    // currentPage,
    // sizePerPage,
    // handlePageClick,
  } = props;

  // const listData = datas.data;
  // console.log('invent component props', props);

  return (
    <>
      <MTable
        data={datas.data}
        columns={columns}
        handleAdd={handleAddInventory}
        handleUpdate={handleUpdateInventory}
        isLoading={isLoading}
        inventory
      />
      <ModalInventoryContainer {...props} />
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
}
