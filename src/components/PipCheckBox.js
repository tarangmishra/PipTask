import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters'
import CheckBox from '@react-native-community/checkbox';

const PipCheckBox = ({ title, titleStyle, orgStyle }) => {
    const [isSelected, setSelection] = useState(false);
    const styles = useStyles();

    return <View style={styles.container}>
        <View style={styles.checkboxContainer}>
            <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setSelection(newValue)}
            />
            <Text style={styles.label}>{title}</Text>
        </View>

    </View>
};
function useStyles() {
    return ScaledSheet.create({
       
        checkboxContainer: {
            flexDirection: "row",
            marginStart: '5@s',
            marginTop: '2%'
        },
        checkbox: {
            alignSelf: "center",
        },
        label: {
            margin: '5@s',
        },
    });
}

export default PipCheckBox;
