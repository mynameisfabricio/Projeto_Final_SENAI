import React from "react";
import {View, TextInput, StyleSheet} from "react-native";

const SearchBar = ({value, onChangeText, placeholder}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder || "Buscar por código ou nome da peça"}
                placeholderTextColor="#888"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;