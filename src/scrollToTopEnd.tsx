import { View, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, Animated, Dimensions, RefreshControl } from 'react-native';
import React, { useState, useRef } from 'react';

const ScrollToTopEnd = () => {
    const arr = [
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        }, {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        }, {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        },
        {
            name: 'Phạm Tiến Đạt',
            job: 'Technology Information'
        }
    ]
    const [dataSource, setDataSource] = useState<any[]>(arr); let listRef: any = useRef<FlatList>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const ItemSeparatorComponent = () => {
        return (
            <View style={styles.separator}>

            </View>
        )
    }
    const onTopHandler = () => {
        listRef.scrollToOffset({
            offset: 0,
            animated: true,
        });
    }
    const onBottomHandler = () => {
        listRef.scrollToEnd({
            animated: true,
        });
    }
    const scrollToActiveIndex = (index: number) => {
        setActiveIndex(index);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                ref={(ref) => {
                    listRef = ref;
                }}
                stickyHeaderIndices={[0, 6, 10]}

                data={dataSource}
                refreshControl={<RefreshControl />}
                ItemSeparatorComponent={ItemSeparatorComponent}
                // onMomentumScrollEnd={ev => {
                //     scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.y / Dimensions.get('window').height))
                // }} // call back sẽ được gọi khi cuộn được dừng
                onScroll={ev => {
                    scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.y / Dimensions.get('window').height))
                }} //Kích hoạt nhiều nhất một lần trên mỗi khung hình trong khi cuộn. Tần suất của các sự kiện có thể được kiểm soát bằng cách sử dụng phần mềm hỗ trợ scrollEventThrottle.
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.itemStyle} key={index}>
                            <Text>{index}{' . '}{item.name}.{item.job}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.name + index}
            />
            {/* <TouchableOpacity style={[styles.buttonStyle, { right: 30, top: 70 }]} onPress={onTopHandler}>
                <Text style={{ color: 'white' }}>Top</Text>
            </TouchableOpacity> */}
            {
                activeIndex !== 0 && -1 ? (<TouchableOpacity style={[styles.buttonStyle, { right: 30, bottom: 70 }]} onPress={onTopHandler}>
                    <Text style={{ color: 'white' }}>Top</Text>
                </TouchableOpacity>) : null
            }
        </SafeAreaView>
    )
}
export default ScrollToTopEnd;
const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        width: '86%',
        backgroundColor: '#c8c8c8',
        marginLeft: 14,
    },
    itemStyle: {
        padding: 30,
        fontSize: 20,
    },
    buttonStyle: {
        position: 'absolute',
        width: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 8,
    }
})