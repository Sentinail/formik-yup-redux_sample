import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../redux/theme/themeSlice'

const Sample = () => {
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    return (
        <>
            <p> The Theme is: {JSON.stringify(theme)}</p>
            <button onClick={() => dispatch(changeTheme({
                primaryColor: "White",
                secondaryColor: "White",
                tertiaryColor: "White"
            }))}> Click Me </button>
        </>
    )
}

export default Sample