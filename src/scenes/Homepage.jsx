import { Button, Checkbox, Table, Pagination, Tooltip } from "antd";
import React, { useState } from "react";
import { dataSample } from "../data/data";
import moment from "moment";

const columns = [
  {
    title: <Checkbox>Name</Checkbox>,
    dataIndex: "name",
    key: "name",
    render: (text, record) => <Checkbox>{text}</Checkbox>,
  },
  {
    title: "Balance($)",
    dataIndex: "balance",
    key: "balance",
    render: (balance) => `$${balance.toLocaleString()}`,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => <a href={`mailto:${email}`}>{email}</a>,
  },
  {
    title: "Registration",
    dataIndex: "registerAt",
    key: "registerAt",
    render: (registerAt) => (
      <Tooltip title={moment(registerAt).format("LLLL")}>
        {moment(registerAt).format("YYYY-MM-DD")}
      </Tooltip>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: () => <Button className="rounded-3xl">Status</Button>,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => <div>Icon</div>,
  },
];

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = dataSample.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={currentData}
        pagination={false}
        rowKey={(record) => record.id}
      />
      <Pagination
        current={currentPage}
        showTotal={(total) => `Total ${dataSample.length} users`}
        total={dataSample.length}
        showSizeChanger={false}
        onChange={handlePageChange}
        style={{ marginTop: "16px", textAlign: "right" }}
      />
    </div>
  );
};

export default Homepage;
