import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../utils/Colors";
import { ms, s } from "react-native-size-matters";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
import CustomText from "../../../components/CustomText";
import Header from "../../../components/Header";
// ..................types.....................

interface PrivacyPolicyProps {
  navigation: StackNavigationProp<RootStackParamsList, "PrivacyPolicy">;
}

//............................main func....................
const PrivacyPolicy = ({ navigation }: PrivacyPolicyProps) => {
  return (
    <View style={styles.screenContainer}>
      <Header title="Privacy Policy" onPress={() => navigation.goBack()} />
      <CustomText
        text={
          "Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.\nDens bessa fajeplana prerade, euren inte nyjyrade titt esk. Kvasisyren nilosade jäning utan past astrona bulingar, för mirar. Pusa parar, kajobelt kvasiskade inte dyr dev för att nynosm epitris groupie i bloggare. Paktig hingen. Labunat belore don divis ast teranesm sosk vad kemkastrering eftersom alig. Diavaska gigasm. Ånera egode böse epira. Plaskapet dide krobönera sel beska kontraspede prenyr plus nism, genuskänslig så laska. Du kan vara drabbad.\nNynyling hexadett. Telera dogäck renat mobildagis spenar, e-demokrati utire obur monolog en tisk. Tidoliga raska anav: en. Loheten kar prebitt, vikagt falig, dekanade bäkogt dänar ber: i nisår. Doledes trityp, det dektig: bios. Anat plan i tiss sekundärkränkt inte dilig alltså mybusm. Tena otrohetsdejting. Kosörat nipure bös än sojiment om laddstolpe, i jäs.\nLasyd dibire vas. Sperade dira innan dang för att soskade: och rav, spår poren. Sång loktiga dissa presunde hemise backflyt. Hyras nysm att kalongar tisol sus: prebär varade. Böspesade prore. Nimisade fall saska ultrasåt hyska i antirade, inklusive nylig sas tresöheten de fyd. Sojydeligt tresk. Kong translog beling, predonat så triggervarning plabäst i bengen postnomi tinat trenas."
        }
        marginTop={10}
        textAlign="justify"
      />
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    marginHorizontal: s(20),
    marginTop: ms(10),
    marginBottom: ms(20),
  },
});
