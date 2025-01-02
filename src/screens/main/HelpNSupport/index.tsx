import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/Colors";
import { ms, s, vs } from "react-native-size-matters";
import Header from "../../../components/Header";
import CustomText from "../../../components/CustomText";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../routes/RootNavigator";
// ..................types.....................

interface HelpNSupportProps {
  navigation: StackNavigationProp<RootStackParamsList, "HelpNSupport">;
}

//............................main func....................

const HelpNSupport = ({ navigation }: HelpNSupportProps) => {
  const questions = [
    {
      id: "1",
      Q: "What Payment Methods Are Accepted?",
      Ans: "Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.",
    },
    {
      id: "2",
      Q: "What Payment Methods Are Accepted?",
      Ans: "Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.",
    },
    {
      id: "3",
      Q: "What Payment Methods Are Accepted?",
      Ans: "Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.",
    },
    {
      id: "4",
      Q: "What Payment Methods Are Accepted?",
      Ans: "Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.",
    },
  ];
  const [showAns, setShowAns] = useState<number | null>(null);
  const toggleAnswer = (index: number) => {
    if (showAns === index) {
      setShowAns(null); // Collapse if clicked again
    } else {
      setShowAns(index); // Show the selected answer
    }
  };
  return (
    <View style={styles.screenContainer}>
      <ScrollView
        contentContainerStyle={styles.layout}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Help & Support" onPress={() => navigation.goBack()} />
        <CustomText
          text={
            "Here are some commonly asked questions by our customers. If you can’t find your answers, reach out to our customer support."
          }
          style={{ marginTop: vs(10) }}
        />
        {/* ...............questions  Map............................... */}

        <View style={styles.mapScroll}>
          {questions.map((item, index) => (
            <View key={item.id} style={styles.questionVw}>
              <TouchableOpacity onPress={() => toggleAnswer(index)}>
                <CustomText text={item.Q} fontWeight="bold" />
              </TouchableOpacity>
              {showAns === index && (
                <View>
                  <CustomText text={item.Ans} size={12} />
                  <TouchableOpacity>
                    <CustomText
                      text={"Action"}
                      fontWeight="bold"
                      color={Colors.blue}
                      style={{ marginTop: vs(10) }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* ........................................ */}
        <CustomText
          text={
            "Please make sure to report any issues promptly and adhere to the guidelines for a smooth returns or refund process. For further assistance, feel free to reach out to us.\n"
          }
        />
        <CustomText
          text={`Can’t find what you’re looking for? We're Here for You!`}
          color={Colors.gray}
        />
        {/* ........................................ */}
        <View style={styles.note}>
          <CustomText
            text={
              "Our offices are open Monday to Saturday from 9:00 AM to 5:00 PM."
            }
            size={12}
            color={Colors.orange}
          />
          <CustomText
            text={`Contact Us:
* Phone: 042-35292627 (Available during office hours)
* WhatsApp: 0300-0450227 (Available during office hours)
* Email: orders@readings.com.pk\n
Feel free to reach out to us during working hours. We're happy to assist you!`}
            size={12}
          />
        </View>

        {/* ........................................ */}
      </ScrollView>
    </View>
  );
};

export default HelpNSupport;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  layout: {
    marginHorizontal: s(20),
    marginTop: vs(20),
    paddingBottom: vs(30),
  },
  questionVw: {
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(16),
    gap: vs(8),
  },
  mapScroll: {
    marginTop: vs(10),
    marginBottom: vs(5),
    gap: vs(5),
  },
  note: {
    backgroundColor: Colors.white,
    borderRadius: ms(10),
    padding: ms(16),
    gap: vs(10),
    marginTop: vs(5),
  },
});
