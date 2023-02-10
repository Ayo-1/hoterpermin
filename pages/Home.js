import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline} from "react-native-maps";
import { StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 
import { View, Colors, Button, Image } from "react-native-ui-lib";
// import BottomSheet from '@gorhom/bottom-sheet';
const OverlayComponent = () => {

    return (
        <View style={{position: "absolute", top: 50, left: 20}}>
              <TouchableHighlight style={{height: 50, backgroundColor: "#fff", width: 50, flex: 1, alignItems: 'center', justifyContent: "center",  borderRadius: 12, borderColor: '#f5f5f5', borderWidth: 1,  shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,}}>
              {/* <Ionicons
                name="menu-outline"
                size={40}
                style={{ }}
                color="#040464"
              /> */}
              <Entypo name="menu" size={40} color="#040464" />
              </TouchableHighlight>
        </View>
    )
}
export default function Home() {
    const bottomSheetRef = React.useRef<BottomSheet>(null);

    // variables
    const snapPoints = React.useMemo(() => ['25%', '50%'], []);
  
    // callbacks
    const handleSheetChanges = React.useCallback((index) => {
      console.log('handleSheetChanges', index);
    }, []);

    const marker = require("../assets/scrapper.png");
  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsCompass={false}  initialRegion={{
      latitude: 9.072264,
      longitude: 7.491302,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
           <Marker coordinate={{
      latitude: 9.074424022766673,
      longitude: 7.495034640259419,
    }}><View>
        <Image source={marker}></Image>
        </View></Marker>

<Marker coordinate={{
      latitude: 9.07526708996197,
      longitude: 7.4875279514442985,
    }}>
        <View>
        <Image source={marker}></Image>
        </View>
    </Marker>
 {/* <Polyline coordinates={[{latitude: 9.07526708996197,longitude: 7.4875279514442985}, {
      latitude: 9.07526708996197,
      longitude: 7.4875279514442985,
    }]} strokeWidth={2}> */}
<Marker coordinate={{
      latitude: 9.073836825271218,
      longitude: 7.486390694896812,
    }}>
        <View>
        <Image source={marker}></Image>
        </View>
    </Marker>

    </MapView>
      <OverlayComponent
    />
    {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});