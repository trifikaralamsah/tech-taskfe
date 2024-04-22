/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Row,
  Table,
  TableColumnsType,
} from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteUser, getUsers } from "../../redux/features/userManagementSlice";
import ModalFormUserManagement from "../../components/Modal/FormUserManagement";
import { DataTypeUserManagement } from "../../types";
import { profileDedaultImg } from "../../assets";

const UserManagement = () => {
  const [dataUsers, setDataUsers] = React.useState([]);
  const dispatch = useAppDispatch();
  const [searchParam] = React.useState(["firstName"]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { users, isUsersLoading } = useAppSelector(
    (state) => state.userManagement,
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalEdit, setIsModalEdit] = React.useState(false);
  const [idEdit, setIdEdit] = React.useState("");

  const handleModalEdit = (id: string) => {
    setIsModalOpen(true);
    setIsModalEdit(true);
    setIdEdit(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalEdit(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalEdit(false);
  };

  const columns: TableColumnsType<DataTypeUserManagement> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text: string, record: any) => (
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.image !== "" ? record.image : profileDedaultImg}
            alt={text + "avatar"}
            style={{ width: 32, height: 32, marginRight: 8 }}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      // responsive: ["md"],
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      // responsive: ["md"],
    },
    {
      title: "Last Update",
      dataIndex: "lastUpdate",
      key: "lastUpdate",
      // responsive: ["md"],
      render: (text: string) => {
        return new Date(text).toLocaleString();
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center" as const,
      render: (record: any) => (
        <Dropdown.Button
          menu={{
            items: [
              {
                label: "Edit",
                key: "edit",
                icon: <EditOutlined />,
                onClick: () => handleModalEdit(record.key),
              },
              {
                label: "Delete",
                key: "delete",
                icon: <DeleteOutlined />,
                onClick: () =>
                  Modal.confirm({
                    title: "Are you sure?",
                    content: `Do you want to delete this user ${record.name} ?`,
                    onOk() {
                      dispatch(
                        deleteUser({
                          id: record.key,
                          newUser: record?.newUser,
                        }),
                      ).then((res: any) => {
                        if (res.payload?.data?.success) {
                          Modal.success({
                            title: res.payload?.data?.message,
                          });
                        }
                      });
                    },
                  }),
              },
            ],
          }}
        />
      ),
    },
  ];

  const data = dataUsers.map((user: any) => {
    return {
      key: user.id,
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
      image: user.image,
      email: user.email,
      gender: user.gender,
      lastUpdate: user.lastUpdate,
    };
  });

  const searchUsers = (data: any) => {
    if (data === "") {
      return setDataUsers(users);
    } else {
      const resultSearch = users.filter((user: any) => {
        return searchParam.some((newItem: any) => {
          return user[newItem]
            .toString()
            .toLowerCase()
            .includes(data.toLowerCase());
        });
      });
      setDataUsers(resultSearch);
    }
  };

  React.useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers()).then((res: any) => {
        setDataUsers(res.payload?.data?.users);
      });
    }
  }, [dispatch, users.length]);

  React.useEffect(() => {
    setDataUsers(users);
  }, [users]);

  return (
    <React.Fragment>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="text-2xl font-semibold">User Management</h2>
        <p className="mb-4">LogoIpsum /UserManagement</p>
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Input
          type="text"
          placeholder="&#xF002; Search User Management"
          style={{
            fontFamily: "Arial, FontAwesome",
            padding: "8px 14px",
            width: "max-content",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            fontSize: "16px",
            color: "#333",
          }}
          onChange={(e) => {
            searchUsers(e.target.value);
          }}
        />
        <Button
          type="primary"
          style={{ marginLeft: 10 }}
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </Button>
      </Row>
      <div style={{ marginTop: 20 }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 6, showSizeChanger: false }}
          loading={isUsersLoading}
          scroll={{ x: "max-content" }}
        />
      </div>
      <ModalFormUserManagement
        isModalOpen={isModalOpen}
        handleOk={() => handleOk()}
        handleClose={() => handleCancel()}
        isEdit={isModalEdit}
        idUser={idEdit}
      />
    </React.Fragment>
  );
};

export default UserManagement;
