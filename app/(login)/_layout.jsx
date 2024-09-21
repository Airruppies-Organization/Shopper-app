import { Tabs, Redirect } from "expo-router";
import Dashboard from "../(page)/dashboard";

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" component={Dashboard} />
      </Tabs>
    </>
  );
};

export default TabLayout;
