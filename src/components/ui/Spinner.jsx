import React from 'react'
import { FadeLoader } from 'react-spinners'

const Spinner = ({ loading }) => {
    const override = {
        display: "block",
        // margin: "50vh auto",
        // borderColor: "black",
    };
    return (
        <section style={{ paddingTop: '80px', height: '90vh' }}>
            <div className='d-flex align-items-center justify-content-center'>
                <FadeLoader
                    color={'#000000'}
                    height={15}
                    width={5}
                    loading={loading}
                    cssOverride={override}
                    // size={150}
                    radius={10}
                    speedMultiplier={5}
                    margin={20}
                    aria-label="Sync Spinner"
                    data-testid="loader"
                />
            </div>
        </section>
    )
}

export default Spinner