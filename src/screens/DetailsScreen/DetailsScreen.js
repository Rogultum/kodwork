import { View, Text, ScrollView, Linking, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./DetailsScreen.style";
import Button from "../../components/Button";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../redux/slices/favouritesSlicer";

const DetailsScreen = ({ route }) => {
  const { title, location, company, details, level, URL } = route.params;
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const favouritesList = useSelector((state) => state.favourites.value);
  const [isFavourite, setIsFavourite] = useState(false);

  const source = {
    html: details,
  };

  return (
    <View style={styles.container}>
      <View style={styles.upper_card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.text_view}>
          <Text style={styles.static_text}>Locations: </Text>
          <Text style={styles.dynamic_text}>{location}</Text>
        </View>

        <View style={styles.text_view}>
          <Text style={styles.static_text}>Job Level: </Text>
          <Text style={styles.dynamic_text}>{level}</Text>
        </View>

        <Text style={styles.details_title}>Job Detail</Text>
      </View>
      <ScrollView style={styles.lower_card}>
        <RenderHtml source={source} contentWidth={width} />
      </ScrollView>
      <View style={styles.button_container}>
        <Button
          title="Submit"
          icon="exit-to-app"
          onPress={() => Linking.openURL(URL.landing_page)}
        />
        <Button
          title="Favourite"
          icon="heart"
          onPress={() => {
            if (!isFavourite) {
              dispatch(
                addFavourite({
                  title,
                  location,
                  company,
                })
              );
              setIsFavourite(true);
              Alert.alert("Successfully added to Favourites");
            } else Alert.alert("Already in Favourites");
          }}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
