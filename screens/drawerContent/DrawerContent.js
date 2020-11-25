import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Button,
} from "react-native-paper";
import { FontAwesome, Foundation } from "@expo/vector-icons";

// import { AuthContext } from "../components/Context";

const DrawerContent = (props) => {
  //   const { signOut, toggleTheme } = React.useContext(AuthContext);
  // const paperTheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://pbs.twimg.com/profile_images/1329640370565738497/UojmBzVK_400x400.jpg",
                }}
                size={50}
              />

              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Kachi FitGerald</Title>
                <Caption style={styles.caption}>@geraldkachi</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="list-alt"
                  type="FontAwesome5"
                  color={color}
                  size={size}
                />
              )}
              label="Lists"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
            {/* <FontAwesome5 name="list-alt" size={24} color="black" /> */}
            {/*  */}
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Topics"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Moments"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Follower requests"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                // toggleTheme();
              }}
            >
              <View style={styles.perference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  {/* <Switch value={paperTheme.dark} /> */}
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/*  */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            mariginTop: 12,
            marginHorizontal: 15,
          }}
        >
          <Foundation
            name="lightbulb"
            size={24}
            color={Colors.light.tint}
            onPress={() => {}}
          />
          <FontAwesome
            name="qrcode"
            size={24}
            color={Colors.light.tint}
            onPress={() => {}}
          />
          {/* <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => {
              // signOut();
            }}
          /> */}
        </View>
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  perference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
