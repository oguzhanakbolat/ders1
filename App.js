import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const doctor = require('./images/doctor.png');
const notificationIcon = require('./images/notification_icon.png');
const searchIcon = require('./images/search_icon.png');
const dateIcon = require('./images/date_icon.png');
const timeIcon = require('./images/time_icon.png');
const starIcon = require('./images/star_icon.png');
const menuIcon = require('./images/menu_icon.png');

export default function App() {



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <View style={styles.image}>
            <Image style={styles.imageURL} source={{ uri: 'https://lh3.googleusercontent.com/a/AAcHTtdfEVUxgNJ7IBEvIdjkN9bU3FAU3lO-ZzEye6_M92NylTg=s83-c-mo' }} />
          </View>
          <Text style={styles.name}>Oğuzhan Akbolat</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.headerIcon} source={searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.headerIcon} source={notificationIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Upcoming appointment</Text>
        <View style={styles.userContent}>
          <View style={styles.userInfo}>
            <View style={styles.userImage}>
              <Image style={styles.imageDoctor} source={require('./images/doctor.png')} />
            </View>
            <View style={styles.userText}>
              <Text style={styles.userName}>Dt. Mehmet Akif Yozgat</Text>
              <Text style={styles.userJop}>Terapist</Text>
              <View style={styles.userPoint}>
                <View style={styles.star}>
                  <Image style={styles.starIcon} source={starIcon} />
                </View>
                <Text style={styles.point}>4.8</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.userButton}>
              <Image style={styles.whiteIcon} source={menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.dateInfo}>
            <View style={styles.date}>
              <View style={styles.dateIconContainer}>
                <Image style={styles.dateIcon} source={dateIcon} />
              </View>
              <Text style={styles.dateText}>09.07.2023</Text>
            </View>
            <View style={styles.date}>
              <View style={styles.timeIcon}>
                <Image style={styles.dateIcon} source={timeIcon} />
              </View>
              <Text style={styles.timeText}>10:00 - 11:00 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 10
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bbb',
    marginRight: 10,
    overflow: 'hidden',
  },
  imageURL: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#444'
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  content: {
    padding: 16,
    width: '100%',
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 16,
  },
  userContent: {
    width: '100%',
    backgroundColor: '#6B80F9',
    borderRadius: 10,
    padding: 16,
  },
  userInfo: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
  },
  userImage: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: '#bbb',
  },
  userText: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fefefe',
  },
  userJop: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fefefe',
  },
  userPoint: {
    flexDirection: 'row',
    backgroundColor: '#fefefe',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    width: 56,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 4,
    borderRadius: 8,
  },
  starIcon: {
    width: 14,
    height: 14,
  },
  point: {
    fontSize: 12,
    fontWeight: '700',
    color: '#444',
  },
  userButton: {
    width: 42,
    height: 42,
    backgroundColor: '#fefefe44',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInfo: {
    flexDirection: 'row',
    backgroundColor: '#5F71E1',
    padding: 12,
    borderRadius: 10,
    marginTop: 24
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIconContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 4,
  },
  dateIcon: {
    width: 16,
    height: 16,
    tintColor: '#fefefe',
  },
  
  dateText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fefefe',
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  timeIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 4,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fefefe',
  },
  imageDoctor: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  whiteIcon: {
    width: 24,
    height: 24,
    tintColor: '#fefefe',
  },
});
