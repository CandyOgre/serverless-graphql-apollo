import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    gql,
    graphql,
} from 'react-apollo';

import Contributor from './Contributor';

const ContributorList = ({ data: {loading, error, getContributorFeed }}) => {

    if (loading) {
        return <Text>Loading ...</Text>;
    }
    if (error) {
        return <Text>{error.message}</Text>;
    }

    return (
        <View>
            {getContributorFeed.map(user => (
                <Contributor key={user.name} user={user}/>
            ))}
        </View>
    );
};

export const ContributorQuery = gql`
  query ContributorQuery {
    getContributorFeed {
      name
      location
    }
  }
`;

export default graphql(ContributorQuery)(ContributorList);