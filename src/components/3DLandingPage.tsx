'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'
import TextureModel from './TextureModel';

const ThreeDLandingPage = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const poster = searchParams.get('poster');
    const texture = searchParams.get('texture');

    if (texture && name && poster)
        return (
            <div className="min-w-screen min-h-screen">
                <TextureModel name={name} poster={poster} texture={texture} />
            </div>
        )
    return null;

}

export default ThreeDLandingPage;