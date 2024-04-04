import { Table, Typography } from "antd";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProfitHistorySelector } from "../../redux/selector";
import { getAdminProfitHistory } from "../../redux/slices/artworkSlice";

const AdminProfitPage = () => {
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
  const adminId = Cookies.get("sessionCookie");
  const dispatch = useDispatch();
  const adminProfit = useSelector(getAdminProfitHistorySelector);
  useEffect(() => {
    dispatch(getAdminProfitHistory(adminId));
  }, [adminId]);
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <div className="title">
        <Typography.Title style={{ fontSize: "70px", fontWeight: "800" }}>
          Admin Profitable Page
        </Typography.Title>
      </div>
      <div className="profitHistoryTable">
        <Table
          columns={columns}
          dataSource={adminProfit?.map((item) => {
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
export default AdminProfitPage;
