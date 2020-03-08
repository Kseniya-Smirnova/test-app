import React from 'react';
import './Badges.scss';

const Badges = (props) => {
    const iconURLs = props.content.split('|');
    const iconEls = iconURLs.map((url) => <li><img src={url} alt = 'icon'/></li>);
    return (
        <ul className = 'badges'>{iconEls}</ul>
    )
};

export default Badges;