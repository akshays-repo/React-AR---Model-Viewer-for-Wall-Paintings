'use client'
import React, { FC, useEffect, useRef } from 'react'
import '@google/model-viewer/';
import { ModelViewerElement } from '@google/model-viewer/';

const TextureModel: FC<{ name: string, poster: string, texture: string }> = (props) => {
    const modelRef = useRef<ModelViewerElement>();
    const { name, texture, poster } = props;

    useEffect(() => {
        const applyTextures = async () => {
            const imageTextureUrl = texture;
            modelRef?.current?.addEventListener('load', async () => {
                if (modelRef.current !== undefined) {
                    const imageTexture = await modelRef.current.createTexture(imageTextureUrl);
                    if (imageTexture) {
                        imageTexture.name = name;
                        const model = modelRef.current.model;
                        if (model) {
                            const material = model.materials[3];
                            const baseColorTexture = material.pbrMetallicRoughness.baseColorTexture;
                            baseColorTexture.setTexture(imageTexture);
                        }
                    }
                }
            })
        };

        applyTextures();
    }, [name, texture, poster]);


    return (
        <>
            <model-viewer
                id={name}
                camera-controls
                touch-action="pan-y pan-x"
                ref={modelRef}
                src={'/glb/frame1.glb'}
                ar-placement="wall"
                tone-mapping="commerce"
                ar
                ar-modes="webxr quick-look"
                alt={name}>
            </model-viewer>
        </>
    )
}

export default TextureModel;
