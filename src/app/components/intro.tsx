import { useEffect, useState } from 'react';

export default function Intro() {

    return (
        <>
            <div id="intro">
                <h1 className="logo-text">PETRA OASIS</h1>
            </div>

            <div id="homepage">
                <h2>Welcome to the Oasis</h2>
                <p>This is your main site content, visible through the text during the zoom.</p>
            </div>

        </>
    );
}