import React from 'react';
import { View, Text } from 'native-base';
import { TextInput, StyleSheet } from 'react-native';
import variables from '../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  textViewError: {
    borderWidth: 1,
    borderColor: variables.inputErrorBorderColor,
    borderRadius: 4,
    marginTop: 10,
  },
  label: {
    color: variables.inputLabelColor,
    paddingBottom: 6,
    fontSize: variables.inputLabelSize,
    fontFamily: variables.fontFamily,
  },
  errorLabel: {
    color: variables.inputErrorColor,
    textAlign: 'left',
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: variables.inputLabelSize,
    fontFamily: variables.fontFamily,
  },
  inputStyle: {
    fontSize: variables.inputFontSize,
    fontFamily: variables.fontFamily,
    color: variables.inputColor,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: variables.inputBorderColor,
  },
  errorInputStyle: {
    fontSize: variables.inputFontSize,
    fontFamily: variables.fontFamily,
    color: variables.inputColor,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: variables.inputErrorBorderColor,
  },
});

export default function textInputField(locals) {
  return (
    <View>
      <Text style={styles.label}>{locals.config.label}</Text>
      <TextInput
        style={locals.hasError ? styles.errorInputStyle : styles.inputStyle}
        accessibilityLabel={locals.label}
        ref={c => {
          this.input = c;
        }}
        autoCapitalize={locals.autoCapitalize}
        autoCorrect={locals.autoCorrect}
        autoFocus={locals.autoFocus}
        blurOnSubmit={locals.blurOnSubmit}
        editable={locals.editable}
        keyboardType={locals.keyboardType}
        maxLength={locals.maxLength}
        multiline={locals.multiline}
        onBlur={locals.onBlur}
        onEndEditing={locals.onEndEditing}
        onFocus={locals.onFocus}
        onLayout={locals.onLayout}
        onSelectionChange={locals.onSelectionChange}
        onSubmitEditing={locals.onSubmitEditing}
        onContentSizeChange={locals.onContentSizeChange}
        placeholderTextColor={
          locals.placeholderTextColor ? locals.placeholderTextColor : '#999999'
        }
        secureTextEntry={locals.secureTextEntry}
        selectTextOnFocus={locals.selectTextOnFocus}
        selectionColor={locals.selectionColor}
        numberOfLines={locals.numberOfLines}
        underlineColorAndroid={locals.underlineColorAndroid}
        clearButtonMode={locals.clearButtonMode}
        clearTextOnFocus={locals.clearTextOnFocus}
        enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
        keyboardAppearance={locals.keyboardAppearance}
        onKeyPress={locals.onKeyPress}
        returnKeyType={locals.returnKeyType}
        selectionState={locals.selectionState}
        onChangeText={value => locals.onChange(value)}
        onChange={locals.onChangeNative}
        placeholder={locals.placeholder}
        value={locals.value}
      />
      <Text style={styles.errorLabel}>{locals.error}</Text>
    </View>
  );
}
