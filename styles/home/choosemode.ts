import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerBottom: {
        marginBottom: 30,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'Satoshi-Bold',
        fontSize: 25,
        color: '#DADADA'
    },

    subheading: {
        fontFamily: 'Satoshi-Regular',
        fontSize: 17,
        color: '#797979',
        textAlign: 'center',

    },
    chooseModeWrapper: {
        alignItems: 'center', marginBottom: 30
    },
    buttonsContainer: {
        width: '80%', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20,
    }

});