import React from 'react'

export default function Avatar({ url, email }) {
    return (
        <>
            <div class="grid justify-items-end">
                <h1>{email}</h1>
                {/* Hello world */}
                <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={url}
                    alt=""
                />
            </div>

        </>

    )
}
