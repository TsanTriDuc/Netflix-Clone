import { Button, Form, Image, Input, Modal, Table, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload";

function MoviesManagement() {
  const [formMovies] = useForm();
  const [dataSource, setDataSource] = useState([]);
  const [invesible, setInvesible] = useState(false);
  const columns = [
    {
      title: "Movie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (poster_path) => <Image src={poster_path} width={150} />,
    },
  ];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  async function fetchMovies() {
    const response = await axios.get(
      "https://6633ee64f7d50bbd9b4b1fef.mockapi.io/Movie"
    );
    console.log(response.data);
    setDataSource(response.data);
  }

  function handleShowModal() {
    setInvesible(true);
  }

  function handleCancelModal() {
    setInvesible(false);
  }

  function handleOKModal() {
    formMovies.submit();
  }

  async function handleSubmit(values) {
    console.log(values);
    console.log(values.poster_path.file.originFileObj);
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;

    await axios.post(
      "https://6633ee64f7d50bbd9b4b1fef.mockapi.io/Movie",
      values
    );
    setDataSource([...dataSource, values]);
    formMovies.resetFields();
    handleCancelModal();
  }

  useEffect(function () {
    fetchMovies();
  }, []);

  return (
    <div>
      <Button type="primary" onClick={handleShowModal}>
        Add New Movies
      </Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title="Add New Movies"
        open={invesible}
        onCancel={handleCancelModal}
        onOk={handleOKModal}
      >
        <Form
          form={formMovies}
          onFinish={handleSubmit}
          labelCol={{
            span: 24,
          }}
        >
          <FormItem label="Movie name" name="name">
            <Input />
          </FormItem>
          <FormItem label="Description" name="description">
            <TextArea rows={4} />
          </FormItem>
          <FormItem label="Trailer" name="trailer">
            <Input />
          </FormItem>
          <FormItem label="Categrogy" name="categrory">
            <Input />
          </FormItem>
          <FormItem label="Poster" name="poster_path">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </FormItem>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default MoviesManagement;
