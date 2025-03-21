import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { hp, wp } from "../../helper/common";
import { fonts } from "../../styles/font";
import { theme } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { Formik, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface UserProp {
  name: string;
  dob: string;
  email: string;
  phoneNo?: string;
  gender?: string;
}

const userSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
});

const initialValues: UserProp = { name: "", email: "", dob: "" };

const handleSubmit = (
  values: UserProp,
  { setSubmitting }: FormikHelpers<UserProp>
) => {
  console.log("Form submitted with values:", values);
  setSubmitting(false);
};

const EditProfile: React.FC = () => {
  const navigation = useNavigation<any>();
  const [showPicker, setShowPicker] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back to screen */}
      <View style={styles.headerContainer}>
        {/* back icon */}
        <Ionicons
          name="arrow-back-outline"
          style={styles.icons}
          color="black"
          onPress={() => navigation.goBack()}
        />
        {/* profile text */}
        <Text style={styles.TextOne}>Edit Profile</Text>
      </View>

      {/* Edit Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          isSubmitting,
        }) => (
          <View style={styles.formContainer}>
            {/* Name Field */}
            <View style={styles.input}>
              <TextInput
                placeholder="Enter your name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
            </View>
            <ErrorMessage name="name">
              {(msg) => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>

            {/* Email Field */}
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MaterialCommunityIcons
                name="gmail"
                size={24}
                color={theme.colors.green}
              />
            </View>

            <ErrorMessage name="email">
              {(msg) => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>

            {/* Date of Birth Picker */}
            <Pressable
              style={styles.datePicker}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.dateText}>
                {values.dob
                  ? new Date(values.dob).toLocaleDateString()
                  : "Select Date of Birth"}
              </Text>
              <MaterialCommunityIcons
                name="calendar-range"
                size={24}
                color={theme.colors.green}
              />
            </Pressable>

            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={values.dob ? new Date(values.dob) : new Date()}
                onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
                  if (selectedDate) {
                    setFieldValue("dob", selectedDate.toISOString()); // Store in ISO format
                  }
                  setShowPicker(false);
                }}
              />
            )}

            {/* Submit Button */}
            <Pressable
              style={[styles.button, isSubmitting && styles.disabledButton]}
              onPress={() => handleSubmit()}
              disabled={isSubmitting} // Disable while submitting
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingHorizontal: 8,
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icons: {
    fontSize: wp(8.6),
  },
  TextOne: {
    fontFamily: fonts.SemiBold,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: hp(3),
  },
  formContainer: {
    marginTop: hp(7),
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 9.5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: hp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 9.5,
    padding: 10,
    marginBottom: hp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: theme.colors.green,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: theme.fontWeight.medium,
    fontFamily: fonts.Regular,
  },
  disabledButton: {
    opacity: 0.6, // Reduce opacity when disabled
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 9.5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: hp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default EditProfile;
