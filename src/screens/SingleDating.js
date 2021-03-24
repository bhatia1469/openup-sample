import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, Switch, TouchableWithoutFeedback } from 'react-native';
import appStyles from '../common/appStyles';
import globalStyles from '../common/globalStyles';
import { colors } from '../common/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class SingleDating extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            isSerious: false,
            showSeriousModal: false
        }
    }

    handleVideoCallClick = () => {
        this.props.navigation.navigate('Mirror')
    }

    handleHomeClick = () => {
        this.props.navigation.navigate('Home')
    }

    handleMenuClick = () => {
        this.props.navigation.navigate('Profile')
    }

    handlePrefClick = () => {
        this.props.navigation.navigate('Preferences', { title: 'Single Dating Preferences' })
    }

    handleBackClick = () => {
        this.props.navigation.goBack()
    }


    render() {
        if (this.state.showSeriousModal)
            return (
                <View style={{ flex: 1 }}>

                    <ImageBackground
                        source={require('../assets/images/bg_single_dating_screen.png')}
                        style={{ width: '100%', flexGrow: 1 }}>

                        <View style={{ alignItems: 'center', zIndex: 2 }}>
                            <Text style={[appStyles.textPink, { fontSize: 20, marginTop: 60 }]}>singles dating </Text>
                            <Image source={require('../assets/images/anim_heart.gif')} style={{ height: 140, resizeMode: 'contain' }} />
                        </View>

                        <View style={{ margin: 12, zIndex: 2, right: 0, alignItems: 'flex-end' }}>
                            {
                                this.state.isSerious ?
                                    <TouchableOpacity onPress={() => this.setState({ isSerious: !this.state.isSerious, showSeriousModal: false })}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../assets/images/serious.png')} style={globalStyles.iconLarge} />
                                            <Text style={appStyles.switchTextPink}>serious</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <TouchableWithoutFeedback onPress={() => this.setState({ isSerious: !this.state.isSerious })}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../assets/images/casual.png')} style={globalStyles.iconLarge} />
                                            <Text style={appStyles.switchTextBlue}>casual</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                            }
                        </View>

                        <View style={{
                            width: '70%', margin: 16, backgroundColor: '#fff',
                            borderRadius: 30, zIndex: 2, paddingVertical: 40,
                            paddingHorizontal: 10, alignSelf: 'center'
                        }}>
                            <TouchableOpacity
                                onPress={() => { this.setState({ showSeriousModal: false }) }}
                                style={{ position: 'absolute', right: 16, top: 16 }}>
                                <Image style={globalStyles.iconSmall} source={require('../assets/images/cross.png')} />
                            </TouchableOpacity>

                            <Text><Text style={{ color: colors.textPink }}>RED</Text> indicates you are serious about finding a relationship.{'\n'}
                                <Text style={{ color: colors.textBlue }}>BLUE</Text> indicates you are just wanting to chat casually.
                        Serious players will be BANNED for 15 minutes from serious play if they leave early from a chat
                        </Text>

                        </View>

                        <View style={{ height: '100%', width: '100%', backgroundColor: '#000000bb', flex: 1, position: 'absolute' }} />

                    </ImageBackground>

                    <TouchableOpacity
                        onPress={this.handleMenuClick}
                        style={appStyles.topLeftContainer} >
                        <Image style={globalStyles.iconDefault} source={require('../assets/images/account_pink.png')} />
                    </TouchableOpacity>

                </View >

            )
        else
            return (
                <View style={{ flex: 1 }}>

                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={[appStyles.textPink, { fontSize: 20, marginTop: 60 }]}>singles dating </Text>
                        <Image source={require('../assets/images/anim_heart.gif')} style={{ flex: 1, resizeMode: 'contain' }} />
                    </View>


                    <ImageBackground
                        source={require('../assets/images/bg_single_dating_screen.png')}
                        style={appStyles.doubleBackground}>

                        <View style={{ margin: 12, position: 'absolute', right: 0, alignItems: 'center' }}>

                            {this.state.isSerious ?
                                <TouchableWithoutFeedback onPress={() => this.setState({ isSerious: !this.state.isSerious })}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../assets/images/serious.png')} style={globalStyles.iconLarge} />
                                        <Text style={appStyles.switchTextPink}>serious</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                :
                                <TouchableWithoutFeedback onPress={() => this.setState({ isSerious: !this.state.isSerious, showSeriousModal: true })}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../assets/images/casual.png')} style={globalStyles.iconLarge} />
                                        <Text style={appStyles.switchTextBlue}>casual</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            }
                        </View>

                        <View style={appStyles.singleRow}>
                            <Image style={appStyles.callScreenIcon} source={require('../assets/images/button_voice_call.png')} />
                            <Text style={[appStyles.textShadow, { textAlign: 'center' }]}>Voice chat with someone new for {'\n'}two minutes !</Text>
                        </View>

                        <TouchableWithoutFeedback style={appStyles.singleRow} onPress={this.handleVideoCallClick}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image style={appStyles.callScreenIcon} source={require('../assets/images/button_video_call.png')} />
                                <Text style={[appStyles.textShadow, { textAlign: 'center' }]}>Video call with someone new for {'\n'}two minutes !</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableOpacity
                            onPress={this.handlePrefClick} style={appStyles.singleRow}>
                            <Image style={[appStyles.callScreenIcon, { margin: 4 }]} source={require('../assets/images/p.png')} />
                            <Text style={[appStyles.textShadow, { textAlign: 'center', marginTop: 4 }]}>Adjust preferences to find the {'\n'}one you are looking for.</Text>
                        </TouchableOpacity>

                        <View style={{ flex: 0.8 }} />

                    </ImageBackground>

                    <TouchableOpacity
                        onPress={this.handleMenuClick}
                        style={appStyles.topLeftContainer} >
                        <Image style={appStyles.navIcon} source={require('../assets/images/account_pink.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.handleHomeClick}
                        style={appStyles.bottomLeftContainer} >
                        <Image style={appStyles.navIcon} source={require('../assets/images/button_home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.handleBackClick}
                        style={appStyles.bottomRightContainer} >
                        <Image style={[appStyles.navIcon, { flex: 0.9 }]} source={require('../assets/images/arrow_pink.png')} />
                    </TouchableOpacity>


                </View >
            )
    }
}