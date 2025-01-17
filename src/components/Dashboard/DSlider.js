import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "./DSlider.css";
import { styled } from "@mui/material/styles";
import IconTest from "../../assets/DashboardAsset/WalletIconDark.svg";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
  
`);

const title = <ul id="card-text">BNBDOWN Binance</ul>;
const currentPrice = "0.0009";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Card sx={{ maxWidth: 195, maxHeight: 125, borderRadius: 3 }}>
        <CardHeader
          className="card-header"
          sx={{ height: 30, bgcolor: "#2D2C56" }}
          avatar={
            <Avatar
              src={IconTest}
              sx={{ bgcolor: "#2D2C56", width: 40, height: 40 }}
            />
          }
          titleTypographyProps={{
            fontSize: 14,
            align: "left",
            color: "white",
          }}
          subheaderTypographyProps={{
            fontSize: 14,
            fontWeight: 700,
            color: "white",
          }}
          title={title}
          subheader={currentPrice}
        />

        <CardContentNoPadding sx={{ bgcolor: "#2D2C56" }}>
          <div className="card-content">
            <div className="card-col card-col-l">
              <p>24h %</p>
              <p>Profit/Loss</p>
              <p>Bought price</p>
            </div>
            <div className="card-col card-col-r">
              <p>1212312</p>
              <p>1231231</p>
              <p>1231231</p>
            </div>
          </div>
        </CardContentNoPadding>
      </Card>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
