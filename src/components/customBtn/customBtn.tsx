import React, { FC } from 'react'
import { Text, View } from 'react-native'

type Props = {
    name: string,
    textStyle: any
}

export const CustomBtn: FC<Props> = ({name, textStyle}) => {

    return (
        <View>
            <Text style={textStyle}> {name} </Text>
        </View>
    )

}