import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../components/JobCard/JobCard";
import { URL, API_KEY } from "../../resources/api_server";
import styles from "./JobScreen.style";

const JobScreen = () => {
  // const [page, setPage] = useState(1);
  const [jobsData, setJobsData] = useState([]);

  const getJobs = async () => {
    let response = await axios.get(URL, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    });
    response = response.data.results;
    // setJobsData([...jobsData, response]);
    // setJobsData({ ...jobsData }, response);
    // setJobsData((j) => [...j, response]);
    setJobsData(response);
    // console.log("job", jobsData);
    // console.log(jobsData);
  };

  useEffect(() => {
    getJobs();
  }, []);

  const renderJobs = ({ item }) => <JobCard job={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={jobsData}
        renderItem={renderJobs}
        // onEndReached={() => {
        //   setPage((page) => page + 1);
        // }}
        // onEndReachedThreshold={0.4}
      />
    </View>
  );
};

export default JobScreen;
