import React from 'react'

const Error = ({error}) => {
    return (
        <div className="alert alert-danger alert-dismissible fade show mb-5" role="alert">
            {error || 'Failed to load categories. Please try again.'}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>

    )
}

export default Error