import React from 'react';
import { Container, VerticalLine, TabsWrapper, UserWrapper, Text, Icon } from './Navbar.styles';

interface NavbarProps {
    user: {
        name: string;
        avatar: string;
    }
}

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
    return (
        <Container>
            <VerticalLine />
            <TabsWrapper>
                <Text>Dashboard</Text>
                <Text>Recipes</Text>
                <Text>Challenge</Text>
            </TabsWrapper>
            <UserWrapper>
                <Icon src={user.avatar} alt='user image' />
                <span>{user.name}</span>
            </UserWrapper>
        </Container>
    );
};