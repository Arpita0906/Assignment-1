import React from 'react';
import { Table } from 'antd';
// import 'antd/dist/antd.css';

const columns = [
  {
    title: 'User ID',
    dataIndex: 'id',
    key: 'id',
    width: 90,
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName',
    width: 150,
  },
  {
    title: 'Registered Email',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: 'Registered Mobile',
    dataIndex: 'mobile',
    key: 'mobile',
    width: 150,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 110,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: 130,
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    width: 130,
  },
  {
    title: 'Active Time',
    dataIndex: 'activeTime',
    key: 'activeTime',
    width: 120,
  },
  {
    title: 'Last Seen',
    dataIndex: 'lastSeen',
    key: 'lastSeen',
    width: 150,
  },
];

const data = [
  {
    key: '1',
    id: 1,
    userName: 'John Brown',
    email: 'john@example.com',
    mobile: '+1234567890',
    gender: 'Male',
    country: 'USA',
    city: 'New York',
    activeTime: '2 hours',
    lastSeen: '1 day ago',
  },
  {
    key: '2',
    id: 2,
    userName: 'Jim Green',
    email: 'jim@example.com',
    mobile: '+9876543210',
    gender: 'Male',
    country: 'UK',
    city: 'London',
    activeTime: '5 hours',
    lastSeen: '2 hours ago',
  },
  {
    key: '3',
    id: 3,
    userName: 'Joe Black',
    email: 'joe@example.com',
    mobile: '+1122334455',
    gender: 'Male',
    country: 'Australia',
    city: 'Sydney',
    activeTime: '24 hours',
    lastSeen: '3 days ago',
  },
];

const MostLikedUsers = () => {
  return (
    <div style={{ padding: '20px', width: '98%', margin: '0 auto' }}>
      <h2>Most Liked Users</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        style={{ border: '1px solid #ddd', backgroundColor: '#fff' }}
        scroll={{ x: 800 }}
        rowClassName={() => 'editable-row'}
      />
    </div>
  );
};

export default MostLikedUsers;
