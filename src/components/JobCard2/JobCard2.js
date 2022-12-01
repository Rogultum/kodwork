import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./JobCard.style";
import { useNavigation } from "@react-navigation/native";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { unFavourite } from "../../redux/slices/favouritesSlicer";

const JobCard2 = ({ job, index }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable style={styles.container} onPress={() => console.log(index)}>
      <Text style={styles.name}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Button
        title="                             Remove                             "
        onPress={() => {
          dispatch(unFavourite(index));
        }}
      />
    </Pressable>
  );
};

export default JobCard2;
