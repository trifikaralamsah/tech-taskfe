/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Row, Select, Space } from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, updateUser } from "../../redux/features/userManagementSlice";

interface DataTypeUserManagement {
  key: React.Key;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
  email: string;
  gender: string;
  lastUpdate: string;
  newUser?: string;
}

const ModalFormUserManagement = ({
  isModalOpen,
  handleOk,
  handleClose,
  isEdit = false,
  idUser,
}: {
  isModalOpen: boolean;
  handleOk: () => void;
  handleClose: () => void;
  isEdit?: boolean;
  idUser?: string;
}) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userManagement);
  const [dataUser, setDataUser] = React.useState<DataTypeUserManagement[]>([]);

  const filterUser = () => {
    const data = users?.filter((user: any) => user.id === idUser);
    setDataUser(data);
    // return users?.filter((user: any) => user.id === idUser);
  };
  // console.log(dataUser);
  React.useEffect(() => {
    if (isEdit) {
      filterUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUser, isEdit]);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      const valuesForm = form.getFieldsValue();
      // console.log(values);
      // console.log(valuesForm);

      if (isEdit) {
        dispatch(
          updateUser({
            ...valuesForm,
            id: idUser,
            image: dataUser[0].image,
            newUser: dataUser[0].newUser,
          })
        );
      } else {
        dispatch(addUser({ ...valuesForm, image: "" }));
      }
      handleOk();
      form.resetFields();
    });
  };
  return (
    <React.Fragment>
      <Modal
        title="User Management"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleClose}
        footer={null}
        width={600}
        destroyOnClose
        // centered
      >
        <div style={{ padding: 20 }}>
          <p style={{ fontWeight: "bold" }}>
            Form {isEdit ? "Edit" : "Add"} User Management
          </p>
          <Form
            name="basic"
            form={form}
            preserve={false}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
              initialValue={
                isEdit && dataUser.length > 0 ? dataUser[0].firstName : ""
              }
            >
              <Input placeholder="Input First Name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
              initialValue={
                isEdit && dataUser.length > 0 ? dataUser[0].lastName : ""
              }
            >
              <Input placeholder="Input Last Name" />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              initialValue={
                isEdit && dataUser.length > 0 ? dataUser[0].username : ""
              }
            >
              <Input placeholder="Input Username" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input valid email!",
                  type: "email",
                },
              ]}
              initialValue={
                isEdit && dataUser.length > 0 ? dataUser[0].email : ""
              }
            >
              <Input type="email" placeholder="Input Email" />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please input your gender!" }]}
              initialValue={
                isEdit && dataUser.length > 0 ? dataUser[0].gender : ""
              }
            >
              <Select placeholder="Select Gender" allowClear>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Row
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 40,
              }}
            >
              <Form.Item>
                <Space>
                  <Button
                    type="default"
                    htmlType="button"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    {isEdit ? "Update" : "Submit"}
                  </Button>
                </Space>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalFormUserManagement;
