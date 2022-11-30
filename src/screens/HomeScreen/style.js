import { StyleSheet } from "react-native";

function useStyles(width) {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        imageStyle: {
            width: width,
            height: '55%'
        }
    })
}
export default useStyles;