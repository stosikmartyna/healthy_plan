import React from 'react';
import { Container, Box, ButtonsWrapper, Button, SystemIcon, ArrowIcon, VerticalLine } from './Footer.styles';

export const Footer: React.FC = () => {
    return (
        <Container>
            <Box>
                <h3>Running out of products?</h3>
                <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <ButtonsWrapper>
                    <Button>
                        <span>Buy now</span>
                        <ArrowIcon src='/images/arrow_right.svg' alt='arrow right icon' />
                    </Button>
                </ButtonsWrapper>
            </Box>
            <VerticalLine />
            <Box>
                <h3>Body Trainer in your pocket</h3>
                <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <ButtonsWrapper>
                    <Button>
                        <SystemIcon src='/images/apple_icon.svg' alt='apple icon' />
                        <span>iOS</span>
                        <ArrowIcon src='/images/arrow_right.svg' alt='arrow right icon' />
                    </Button>
                    <Button>
                        <SystemIcon src='/images/android_icon.svg' alt='android icon' />
                        <span>Android</span>
                        <ArrowIcon src='/images/arrow_right.svg' alt='arrow right icon' />
                    </Button>
                </ButtonsWrapper>
            </Box>
            <VerticalLine />
            <Box>
                <h3>Frequently Asked Questions</h3>
                <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <ButtonsWrapper>
                    <Button>
                        <span>Read FAQs</span>
                        <ArrowIcon src='/images/arrow_right.svg' alt='arrow right icon' />
                    </Button>
                </ButtonsWrapper>
            </Box>
        </Container>

    );
};