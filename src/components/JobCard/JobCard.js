import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./JobCard.style";
import { useNavigation } from "@react-navigation/native";

const JobCard = ({ job }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("DetailsScreen", {
          title: job.name,
          details: job.contents,
          location: job.locations[0].name,
          level: job.levels[0].name,
          URL: job.refs,
          company: job.company.name,
        })
      }
    >
      <Text style={styles.name}>{job.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <Text style={styles.location}>{job.locations[0].name}</Text>
    </Pressable>
  );
};

export default JobCard;
