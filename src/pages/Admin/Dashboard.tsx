/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column, Line, Pie, Radar } from "@ant-design/charts";
import { Col, Row } from "antd";
import React from "react";
const Dashboard = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    // { year: "1996", value: 6 },
    // { year: "1997", value: 7 },
    // { year: "1998", value: 9 },
    // { year: "1999", value: 13 },
  ];

  const props = {
    data,
    xField: "year",
    yField: "value",
  };

  const style = {
    // padding: "10px",
    backgroundColor: "#fff",
    width: "100%",
    height: "320px",
  };

  const pieConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "year",
    radius: 0.9,
    innerRadius: 0.6,
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={12} style={style}>
            <p className="bg-sky-700">Jumlah Penduduk</p>
            <Line {...props} />
          </Col>
          <Col sm={1} />
          <Col xs={24} sm={11} style={style}>
            <p>Prasarana Air Bersih</p>
            <Column {...props} />
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={8} style={style}>
            <p>Jumlah Penduduk Tiap Dusun</p>
            <Pie {...pieConfig} />
          </Col>
          <Col sm={1} />
          <Col xs={24} sm={7} style={style}>
            <p>Jumlah KK Penduduk Tiap Dusun</p>
            <Radar {...props} />
          </Col>
          <Col sm={1} />
          <Col xs={24} sm={7} style={style}>
            <p>Jumlah Penduduk Tiap Dusun</p>
            <Pie {...pieConfig} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={8} style={style}>
            <p>Jumlah Prasarana Umum</p>
            <Pie {...pieConfig} />
          </Col>
          <Col sm={1} />
          <Col xs={24} sm={15} style={style}>
            <p>Jumlah Penduduk Berdasarkan Gender 2024</p>
            <Column {...props} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
