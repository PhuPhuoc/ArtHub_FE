import { Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepositHistory } from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import { getDepositHistorySelector } from "../../redux/selector";

const DepositHistoryPage = () => {
  const userId = Cookies.get("sessionCookie");
  const dispatch = useDispatch();
  const depositHistory = useSelector(getDepositHistorySelector);
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date Time",
      dataIndex: "date",
      key: "date",
    },
  ];

  useEffect(() => {
    dispatch(getDepositHistory(userId));
  }, [userId]);
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <div className="title">
        <Typography.Title style={{ fontSize: "70px", fontWeight: "800" }}>
          Deposit History
        </Typography.Title>
      </div>
      <div className="tableDepositHistory">
        <Table
          columns={columns}
          dataSource={depositHistory?.map((item) => {
            return {
              description: item?.description,
              type: item?.type,
              date: item?.dateTime,
              amount: item?.amount,
            };
          })}
        />
      </div>
    </div>
  );
};
export default DepositHistoryPage;
