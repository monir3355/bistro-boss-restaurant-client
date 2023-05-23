import React, { useState } from "react";
import Cover from "../../share/Cover";
import bannerImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard";
import ShopTab from "../ShopTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();
  const offered = menus.filter((item) => item.category === "offered");
  const soups = menus.filter((item) => item.category === "soup");
  const salads = menus.filter((item) => item.category === "salad");
  const desserts = menus.filter((item) => item.category === "dessert");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const drinks = menus.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      {/* Banner */}
      <Cover
        img={bannerImg}
        title={"Our Shop"}
        desc={"Lorem Ipsum has been the industry"}
      ></Cover>
      {/* Tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>{<ShopTab items={salads}></ShopTab>}</TabPanel>
        <TabPanel>{<ShopTab items={pizzas}></ShopTab>}</TabPanel>
        <TabPanel>{<ShopTab items={soups}></ShopTab>}</TabPanel>
        <TabPanel>{<ShopTab items={desserts}></ShopTab>}</TabPanel>
        <TabPanel>{<ShopTab items={drinks}></ShopTab>}</TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
