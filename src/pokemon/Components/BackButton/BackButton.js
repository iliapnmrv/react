import React from 'react'
import { useHistory } from 'react-router-dom'
import './BackButton.css'

export default function BackButton() {
    let history = useHistory();

    return (
        <>
            <button
                className="button icon-left"
                onClick={history.goBack}>
                Back
            </button>
        </>
    )
}
