import React from 'react';
import Container from '../Container/Container';
import { BsArrowRight } from "react-icons/bs";



const Precious = () => {
    return (
        <div className='pt-[60px]'>
            <Container>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='w-full md:w-1/2'>
                        <img src="https://raw.githubusercontent.com/Hasan082/abacus-convention-center-react/main/src/assets/precious%20/marriage.png" alt="Abacus Convention Center" />
                    </div>
                    <div className='w-full md:w-1/2 space-y-4 inline-flex items-start flex-col justify-center'>
                        <h2>Every moment is Precious</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <a href="" className='inline-flex items-center gap-2 btn btn-primary'>Explore our album <BsArrowRight /> </a>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Precious;