import React, { Component } from 'react';
import Link from './Link';

class LinkList extends Component {
    render() {
        const linksToRender = [
            {
                id: '1',
                description: 'Farts and toots',
                url: 'www.benlardie.net',
            },
            {
                id: '2',
                description: 'The best GraphQL client',
                url: 'https://www.apollographql.com/docs/react/',
              },
        ]

        return (
            <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
        )
    }
}

export default LinkList;