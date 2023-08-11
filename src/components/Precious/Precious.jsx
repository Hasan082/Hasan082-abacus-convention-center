import React from 'react';
import Container from '../Container/Container';
import precius from "../../assets/precious/marriage.png"

const Precious = () => {
    return (
        <div>
            <Container>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img src={precius} alt="Abacus Convention Center" />
                    </div>
                    <div className='w-1/2'></div>
                </div>
            </Container>
        </div>
    );
};

export default Precious;