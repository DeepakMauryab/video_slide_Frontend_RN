import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';
import { dpHeight, dpWidth } from '../SizeInDp';
import AxiosAuth from '../../api/AxiosAuth';

let requestInterceptorRef;
let responseInterceptorRef;
const hideToast = ['leaderboards'];

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    AxiosAuth.interceptors.request.eject(requestInterceptorRef);
    responseInterceptorRef = AxiosAuth.interceptors.request.use(
      config => {
        setIsLoading(true);
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
    responseInterceptorRef = AxiosAuth.interceptors.response.use(
      response => {
        if (
          response.config.method !== 'get' &&
          hideToast.indexOf(response?.config.url || '') === -1
        ) {
        }
        setIsLoading(false);
        return response;
      },
      error => {
        setTimeout(() => {
          setIsLoading(false);
        }, 10);
        if (error.response) {
          if (hideToast.indexOf(error.response?.config.url || '') === -1) {
          }

          let configUrl = error?.response?.config?.url;
          if (
            error.response.status === 401 &&
            !configUrl.includes('eligibility')
          ) {
          }
        }
        return Promise.reject(error);
      },
    );
  }, []);
  return isLoading ? (
    <View style={styles.body}>
      <Lottie source={require('./load.json')} autoPlay style={styles.loader1} />
      <Lottie
        source={require('./bolls.json')}
        autoPlay
        style={styles.loader2}
      />
    </View>
  ) : null;
};

export default Loader;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loader1: {
    width: dpWidth(200),
    flex: 1,
    marginTop: dpHeight(100),
  },
  loader2: {
    width: dpWidth(200),
    flex: 1,
    marginTop: dpHeight(-200),
  },
});
