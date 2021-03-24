import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import appStyles from '../common/appStyles';
import globalStyles from '../common/globalStyles';
import { colors } from '../common/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'John Doe'
        }
    }

    handleHomeClick = () => {
        this.props.navigation.navigate('Home')
    }

    handleChatClick = () => {
        this.props.navigation.navigate('Messages')
    }

    handleConnectionClick = () => {
        this.props.navigation.navigate('MyConnections')
    }

    handleRecentlyMetClick = () => {
        this.props.navigation.navigate('Connection')
    }

    handleFullProfileClick = () => {
        this.props.navigation.navigate('FullProfile')
    }

    handleSettingsClick = () => {
        this.props.navigation.navigate('Settings')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 40, marginTop: getStatusBarHeight(), marginBottom: 16, flex: 0.6 }}>
                    <Text style={[appStyles.textPink, {
                        fontSize: 20, alignSelf: 'flex-start',
                        fontFamily: 'hp_simplified_light', margin: 8, marginStart: 0, color: '#FD8888'
                    }]}>{this.state.userName} </Text>

                    <TouchableWithoutFeedback
                        onPress={this.handleFullProfileClick}>
                        <View style={[appStyles.profileImage, globalStyles.darkShadow]}>
                            <Image
                                style={[appStyles.profileImage]}
                                source={require('../assets/images/userImage.jpeg')} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>

                <View style={{ flex: 0.4, justifyContent: 'space-evenly', backgroundColor: '#FD8989' }}>

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={this.handleConnectionClick}>
                        <Text style={[appStyles.textShadow, appStyles.menuItems]}>Connections</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', backgroundColor: '#FD7E7E', height: 2 }} />

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={this.handleChatClick}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={[appStyles.textShadow, appStyles.menuItems]}>Chat</Text>
                            <View style={[appStyles.badge, globalStyles.darkShadow]}>
                                <Text style={appStyles.badgeText}>20</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '100%', backgroundColor: '#FD7E7E', height: 2 }} />

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={this.handleRecentlyMetClick}>
                        <Text style={[appStyles.textShadow, appStyles.menuItems]}>Recently Met</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', backgroundColor: '#FD7E7E', height: 2 }} />

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={this.handleSettingsClick}>
                        <Text style={[appStyles.textShadow, appStyles.menuItems]}>Settings</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', backgroundColor: '#FD7E7E', height: 2 }} />

                    <TouchableOpacity
                        onPress={this.handleHomeClick}
                        style={[appStyles.bottomLeftContainer, { position: 'relative' }]} >
                        <Image style={globalStyles.iconDefault} source={require('../assets/images/button_home.png')} />
                    </TouchableOpacity>

                    <View style={{ position: 'absolute', right: 20, bottom: 20 }}>
                        <Text style={[appStyles.textShadow, { fontFamily: 'hp_simplified_light' }]}>version 1.0 </Text>
                    </View>
                </View>

            </View >
        );
    }
}