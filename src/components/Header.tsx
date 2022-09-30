import React from 'react';
import Image from 'next/image';

type HeaderProps = {

};

type HeaderState = {

};

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Image src="/header.png" width="1920px" height="200px" />
            </div>
        )
    }
}

export default Header;