import { ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import JobCard2 from "../../components/JobCard2";

const FavouriteScreen = () => {
  const favouritesList = useSelector((state) => state.favourites.value);
  return (
    <ScrollView>
      {favouritesList.map((item, index) => (
        <JobCard2 index={index} key={item.title} job={item} />
      ))}
    </ScrollView>
  );
};

export default FavouriteScreen;
