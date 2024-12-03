import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {

      const enabled = await Location.hasServicesEnabledAsync();
      if (!enabled) {
        setErrorMsg(
          "Location services are disabled. Please enable them in your device settings."
        );
        return;
      }

      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        console.log("Location permission not granted");
        return;
      }

      const data = await Location.getLastKnownPositionAsync();

      if (data && data.coords) {
        const { latitude, longitude } = data.coords;
        
        setLocation({ latitude, longitude });
      } else {
        console.log("No location data available");
        // Optionally, you can try to get the current position if last known is not available
        const currentPosition = await Location.getCurrentPositionAsync({});
        if (currentPosition && currentPosition.coords) {
          const { latitude, longitude } = currentPosition.coords;
          setLocation({ latitude, longitude });
        } else {
          console.log("Unable to get current position");
        }
      }
    } catch (error) {
      console.log("Error getting location:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
