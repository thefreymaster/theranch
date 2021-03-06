import React from 'react';
import Flex from '../../common/Flex';
import Title from '../../common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faTachometerAlt, faMicrochip, faShapes, faHome } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../Context';
import { NIGHT_BACKGROUND_COLOR, WHITE } from '../../constants';

const Branding = () => {
    const { isDay } = React.useContext(Context);
    return (
        <Flex
            borderRadius="3px 10px 10px"
            backgroundColor={isDay ? NIGHT_BACKGROUND_COLOR : WHITE}
            height="120px"
            width="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <FontAwesomeIcon color={isDay ? WHITE : NIGHT_BACKGROUND_COLOR}
                size="2x" icon={faHome} />
            <div style={{ marginTop: 10 }} />
            <Title color={isDay ? WHITE : NIGHT_BACKGROUND_COLOR}>Domain</Title>
        </Flex>
    )
}

export default Branding;