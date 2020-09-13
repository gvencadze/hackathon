import React, {useState, useEffect} from 'react'
import {File, Div} from "@vkontakte/vkui";
import {Icon28PictureOutline} from "@vkontakte/icons";

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    };

    return (
        <div>
            <File before={<Icon28PictureOutline />} controlSize="xl" mode="outline" onChange={onSelectFile}>
                Загрузить обложку
            </File>
            {selectedFile && <Div>
                <img src={preview} style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    borderRadius: 20
                }}/>
            </Div>
            }
        </div>
    )
};

export default ImageUpload