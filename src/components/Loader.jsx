import { InfinitySpin } from "react-loader-spinner"

export const Loader = () => {
    return <>
        <div style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px', 
            margin: 'auto'
        }}>
            <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    </>
}



