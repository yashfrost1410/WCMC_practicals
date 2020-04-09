import { StatusBar } from "react-native";
export default yash = (props) => {
    const MyStatusBar = ({ backgroundColor, ...props }) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    );
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
    const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
}
