import * as React from 'react';
import { View, TouchableOpacity, Image, TextInput, Text, FlatList, ScrollView, ImageBackground } from 'react-native';
import appStyles from '../common/appStyles';
import globalStyles from '../common/globalStyles';
import { colors } from '../common/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class MyConnections extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'John Doe'
        }
    }

    handleBackClick = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ paddingTop: 40 + getStatusBarHeight(), paddingBottom: 20, backgroundColor: '#FF9090', alignItems: 'center' }}>

                    <ImageBackground
                        resizeMode='contain' style={{ width: 260 }}
                        source={require('../assets/images/invite_search.png')}>
                        <TextInput placeholder={'name, phone or email'} style={[{ alignSelf: 'center', textAlign: 'center', marginTop: -6 }, appStyles.fontRegular]} />
                    </ImageBackground>

                </View>

                <ScrollView>
                    <FlatList
                        data={["", "", "", "", "", "", "", "", ""]}
                        contentContainerStyle={{ padding: 8 }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width: '100%', flexDirection: 'row', padding: 8, alignItems: 'center' }}>

                                    <View style={[globalStyles.middleShadow, { height: 60, width: 60, borderRadius: 30 }]}>
                                        <Image source={require('../assets/images/userImage.jpeg')} style={{ height: 60, width: 60, borderRadius: 30 }} />
                                    </View>
                                    <View style={{ marginStart: 16 }}>
                                        <Text style={[appStyles.textPink, { fontSize: 18, textAlign: 'left' }, appStyles.fontSemiBold]}>John Archer</Text>
                                        <Text style={[appStyles.textPink, { fontSize: 10, textAlign: 'right' }, appStyles.fontSemiBold]}>80% match</Text>
                                    </View>
                                    <View style={{ flex: 1 }} />
                                    <TouchableOpacity>
                                        <Image style={globalStyles.iconDefault} source={require('../assets/images/kebab_pink.png')} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />

                </ScrollView>

                <TouchableOpacity style={appStyles.topLeftContainer} onPress={this.handleBackClick}>
                    <Image style={globalStyles.iconSmall} source={require('../assets/images/arrow_pink_left.png')} />
                </TouchableOpacity>

            </View>
        )
    }
}