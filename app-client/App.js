import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import ContributorList from './src/components/ContributorList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.createClient = this.createClient.bind(this);
  }

  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://localhost:4000/graphql',
      }),
    });
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <View style={styles.container}>
          <Text>Serverless GraphQL Apollo</Text>
          <ContributorList />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
